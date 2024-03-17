import { createSlice } from "@reduxjs/toolkit";

type UserInfo = {
	username: string;
	email: string;
	isAdmin: boolean;
	_id: string;
	userType: boolean;
};

type initialStateType = {
	userInfo: UserInfo | null;
};

const storedUserInfoString = localStorage.getItem("userInfo");
const parsedUserInfo: UserInfo | null = storedUserInfoString
	? JSON.parse(storedUserInfoString)
	: null;

const initialState: initialStateType = {
	userInfo: parsedUserInfo,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		// function to set the user details to the localstorage and redux auth store
		setCredentials: (state, action) => {
			// store the userinfo in the redux store
			state.userInfo = action.payload;
			// store the user info in the localstorage
			localStorage.setItem("userInfo", JSON.stringify(action.payload));
		},
		logOut: (state) => {
			// remove the user info from the state
			state.userInfo = null;
			// clear the local storage
			localStorage.clear();
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
