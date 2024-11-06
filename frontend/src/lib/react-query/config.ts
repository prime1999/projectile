import { useMutation } from "@tanstack/react-query";
import { UserAccountType } from "@/types/UserType";
import {
	confirmEmail,
	createUserAccount,
	signInAccount,
	verifyEmail,
} from "../appwrite/api";

// ============================================================
// AUTH QUERIES
// ============================================================

export const useCreateAccount = () => {
	return useMutation({
		mutationFn: (user: UserAccountType) => createUserAccount(user),
	});
};

export const useSignInAccount = () => {
	return useMutation({
		mutationFn: (user: { email: string; password: string }) =>
			signInAccount(user),
	});
};

export const useVerifyEmail = () => {
	return useMutation({
		mutationFn: () => verifyEmail(),
	});
};

export const useConfirmEmail = ({
	userId,
	secret,
}: {
	userId: string;
	secret: string;
}) => {
	return useMutation({
		mutationFn: () => confirmEmail({ userId, secret }),
	});
};
// ============================================================
// USER QUERIES
// ============================================================
// export const useGetCurrentUser = () => {
// 	return useQuery({
// 		queryKey: [QUERY_KEYS.GET_CURRENT_USER],
// 		queryFn: getCurrentUser,
// 	});
// };
