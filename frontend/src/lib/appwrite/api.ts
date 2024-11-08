import {
	account,
	appwriteConfig,
	avatars,
	databases,
	ID,
} from "@/lib/appwrite/config";
import { UserAccountType } from "@/types/UserType";
import { OAuthProvider, Query } from "appwrite";

// ============================== SIGN UP
export const createUserAccount = async (user: UserAccountType) => {
	try {
		const newAccount = await account.create(
			ID.unique(),
			user.email,
			user.password,
			user.name
		);

		if (!newAccount) throw Error;

		console.log(newAccount);

		// // verify email provided
		// const verifiedAccount = await verifyEmail(newAccount);

		// if (!verifiedAccount) throw Error;

		// get the user name initials
		const avatarUrl = avatars.getInitials(user.name);
		console.log("save user");
		const newUser = await saveUserToDb({
			accountId: newAccount.$id,
			username: user.username,
			name: newAccount.name,
			email: newAccount.email,
			imageUrl: avatarUrl,
			accountType: user.accountType,
		});
		console.log(newUser);
		return newUser;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ============================== SAVE USER TO DB
export const saveUserToDb = async (user: {
	accountId: string;
	name: string;
	username: string;
	email: string;
	imageUrl: URL;
	accountType: string;
}) => {
	try {
		const newUser = await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.userCollectionId,
			ID.unique(),
			user
		);

		return newUser;
	} catch (error) {
		console.log(error);
	}
};

// ============================== SIGN IN
export async function signInAccount(user: { email: string; password: string }) {
	try {
		const session = await account.createEmailPasswordSession(
			user.email,
			user.password
		);

		return session;
	} catch (error) {
		console.log(error);
	}
}

// ============================== SIGN-IN/SIGN-UP WITH GOOGLE
export const SignInWithGoogle = async (currentPage: string) => {
	try {
		// sign in using google
		account.createOAuth2Session(
			OAuthProvider.Google,
			"http://localhost:3000/dashboard",
			currentPage
		);

		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// ============================== GET USER
export async function getCurrentUser() {
	try {
		const currentAccount = await account.get();

		if (!currentAccount) throw Error;

		const currentUser = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.userCollectionId,
			[Query.equal("accountId", currentAccount.$id)]
		);

		console.log(currentUser);

		if (currentUser.documents.length === 0) {
			// get the user name initials
			const avatarUrl = avatars.getInitials(currentAccount.name);
			const user: {
				accountId: string;
				name: string;
				username: string;
				email: string;
				imageUrl: URL;
				accountType: string;
			} = {
				accountId: currentAccount.$id,
				name: currentAccount.name,
				username: currentAccount.name,
				email: currentAccount.email,
				imageUrl: avatarUrl,
				accountType: "isClient",
			};
			// function to create a documents for the user
			const newUser = await saveUserToDb(user);
			console.log(newUser);
			return newUser;
		}

		return currentUser.documents[0];
	} catch (error) {
		console.log(error);
		return null;
	}
}

// ============================== SIGN OUT
export async function signOutAccount() {
	try {
		const session = await account.deleteSession("current");

		return session;
	} catch (error) {
		console.log(error);
	}
}

// ========================= VERIFY EMAIL
export const verifyEmail = async () => {
	try {
		// send the email verification url
		const result: any = await account.createVerification(
			"http://localhost:3000/register"
		);
		console.log(result);

		if (!result) throw Error;
		// // verify the user
		// const verified = await account.updateVerification(newAccount.$id, result);
		console.log(result);
		return result;
	} catch (error) {
		console.log(error);
	}
};

// =========================== CONFIRM EMAIL
export const confirmEmail = async ({
	userId,
	secret,
}: {
	userId: string;
	secret: string;
}) => {
	try {
		// verify the user
		console.log({
			userId: `userId is ${userId}`,
			secret: `secret is ${secret}`,
		});
		const verified = await account.updateVerification(userId, secret);
		if (!verified) throw Error;
		console.log(verified);
		return verified;
	} catch (error) {
		console.log(error);
	}
};
