import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { UserAccountType } from "@/types/UserType";
import { createUserAccount, signInAccount } from "../appwrite/api";

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
