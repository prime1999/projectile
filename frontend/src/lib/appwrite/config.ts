import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
	databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
	userCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USER_ID as string,
};

export const client = new Client();

client
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL as string)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
export { ID } from "appwrite";
