import { UserType, UserLogInType } from "@/types/UserType";
import { USERS_URL } from "../constants";
import { apiSlice } from "./ApiSlice";

// inject the register users API into the apiSlice created
export const UserApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// use the mutate on the function (for handling data changes)
		registerUser: builder.mutation<UserType, any>({
			query: (userData) => ({
				url: `${USERS_URL}/registerUser`,
				method: "POST",
				body: userData,
			}),
		}),
		// use the mutate on the function (for handling data changes)
		verifyEmail: builder.mutation<any, any>({
			query: (verificationData) => ({
				url: `${USERS_URL}/verifyCode`,
				method: "POST",
				body: verificationData,
			}),
		}),
		logUserIn: builder.mutation<UserLogInType, any>({
			query: (logInData) => ({
				url: `${USERS_URL}/authUser`,
				method: "POST",
				body: logInData,
			}),
		}),
	}),
});

//
export const useRegisterUserMutation =
	UserApiSlice.endpoints.registerUser.useMutation;
//
export const useVerifyEmailMutation =
	UserApiSlice.endpoints.verifyEmail.useMutation;
//
export const useLogUserInMutation =
	UserApiSlice.endpoints.logUserIn.useMutation;
