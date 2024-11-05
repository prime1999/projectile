import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CurrentUserReturn, UserType } from "@/types/UserType";
import {
	getCurrentUser,
	SignInWithGoogle,
	signOutAccount,
} from "../appwrite/api";
import { saveUserStatusToLS, themeToggler } from "../utils";
import { account } from "../appwrite/config";

type initType = {
	user: any | null;
	isLoading: boolean;
	isAuthenticated: any;
	theme: string;
	message: string;
};

// check if the user has a theme defined before signing in
const theme = localStorage.getItem("theme");

// Retrieve and parse `userStatus` from localStorage
const userStatus = localStorage.getItem("userStatus");
const currentUserData: CurrentUserReturn = userStatus
	? JSON.parse(userStatus)
	: {
			isAuthenticated: false,
			user: null,
			theme: theme ? theme : "light",
	  };

// declare initial state data
const initialState: initType = {
	user: currentUserData.user,
	isLoading: false,
	isAuthenticated: currentUserData.isAuthenticated,
	theme: currentUserData.theme,
	message: "",
};

// function to check for a signed in user
export const currentUser = createAsyncThunk(
	"auth/checkUser",
	async (_, thunkAPI) => {
		try {
			const currentAccount = await getCurrentUser();
			if (currentAccount) {
				console.log(currentAccount);

				const user = {
					id: currentAccount.$id,
					name: currentAccount.name,
					username: currentAccount.username,
					email: currentAccount.email,
					imageUrl: currentAccount.imageUrl,
					accountType: currentAccount.accountType,
				};
				console.log({ isAuthenticated: true, ...user });

				// get the user's theme pref from the DB
				const pref = await account.getPrefs();

				saveUserStatusToLS({
					isAuthenticated: true,
					user,
					logInTime: "",
					theme: pref?.theme ? pref?.theme : theme ? theme : "light",
				});

				return {
					isAuthenticated: true,
					user,
					theme: pref?.theme ? pref?.theme : theme ? theme : "light",
				};
			}
			return { isAuthenticated: false, user: null, theme: "light" };
		} catch (error) {
			console.log(error);
		}
	}
);

// FUNCTION TO LOG USER OUT
export const SignUserOut = createAsyncThunk(
	"auth/logOutUser",
	async (_, thunkAPI) => {
		try {
			signOutAccount();
			localStorage.removeItem("userStatus");
		} catch (error) {
			console.log(error);
		}
	}
);

// FUNCTION TO TOGGLE THEME
export const toggleTheme = createAsyncThunk(
	"auth/toggleTheme",
	async (theme: string, thunkAPI) => {
		return theme;
	}
);

// create the slice (auth slice)
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.message = "";
			state.isLoading = false;
		},
	},
	extraReducers: (builders) => {
		builders
			// for checking current users
			.addCase(currentUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(currentUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isAuthenticated = action?.payload?.isAuthenticated as any;
				state.user = action?.payload?.user;
				state.theme = action?.payload?.theme;
			})
			.addCase(currentUser.rejected, (state) => {
				state.isLoading = true;
			})
			// for the user sign out
			.addCase(SignUserOut.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(SignUserOut.fulfilled, (state) => {
				state.isLoading = false;
				state.isAuthenticated = false;
				state.user = null;
			})
			.addCase(SignUserOut.rejected, (state) => {
				state.isLoading = true;
			})
			// for theme toggle
			.addCase(toggleTheme.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(toggleTheme.fulfilled, (state, action) => {
				state.isLoading = false;
				state.theme = action?.payload as string;
			})
			.addCase(toggleTheme.rejected, (state) => {
				state.isLoading = true;
			});
	},
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
