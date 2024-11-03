import {
	account,
	appwriteConfig,
	avatars,
	databases,
	ID,
} from "@/lib/appwrite/config";
import { UserAccountType } from "@/types/UserType";
import { Query } from "appwrite";

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

		if (!currentUser) throw Error;

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
