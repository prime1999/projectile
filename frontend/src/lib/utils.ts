import { CurrentUserReturn } from "@/types/UserType";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { signOutAccount } from "./appwrite/api";
import { account } from "./appwrite/config";
import { useSelector } from "react-redux";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const saveUserStatusToLS = (userDetails: CurrentUserReturn) => {
	// get the time of log in
	const logInTime = new Date().getTime();
	// persist the user to localStorage
	localStorage.setItem(
		"userStatus",
		JSON.stringify({
			isAuthenticated: userDetails.isAuthenticated,
			user: userDetails.user,
			logInTime,
			theme: userDetails.theme,
		})
	);
};

export const calcExpiryDate = () => {
	// get the userDetails from LS
	const status = localStorage.getItem("userStatus");
	const userStatus = status ? JSON.parse(status) : null;

	// check if the userStatus exist
	if (!userStatus) return;

	const currentTime = new Date().getTime();
	const timeDifference = currentTime - parseInt(userStatus.loginTime, 10); // difference in milliseconds
	const threeDaysInMs = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

	if (timeDifference > threeDaysInMs) {
		localStorage.removeItem("userStatus");
		return true;
	}
};

export const themeToggler = async (theme: string, isAuthenticated: boolean) => {
	try {
		console.log(isAuthenticated);
		if (!isAuthenticated) {
			// theme toggler for when a user is not signed in
			localStorage.setItem("theme", theme);
			console.log(theme);
			return theme;
		}

		return themeTogglerIfSignedIn(theme);
	} catch (error) {
		console.log(error);
	}
};

export const themeTogglerIfSignedIn = async (theme: string) => {
	// check if the user has a theme defined before signing in
	const themeSelected = localStorage.getItem("theme");

	// Retrieve and parse `userStatus` from localStorage
	const userStatus = localStorage.getItem("userStatus");
	const currentUserData: CurrentUserReturn = userStatus
		? JSON.parse(userStatus)
		: {
				isAuthenticated: false,
				user: null,
				theme: themeSelected ? themeSelected : "light",
		  };

	// get the user's pref from the DB
	const userPref = await account.getPrefs();
	// add the user's theme pref to the DB
	const updatedPref = await account.updatePrefs(
		userPref ? { ...userPref, theme } : { theme }
	);
	console.log(updatedPref);
	// save the updated theme to local storage
	localStorage.setItem(
		"userStatus",
		JSON.stringify({ ...currentUserData, theme })
	);
	return theme;
};
