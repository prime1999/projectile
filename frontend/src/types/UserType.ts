// type interface for user profile contact information
type ContactInfo = {
	phone: string;
	address: string;
	city: string;
	country: string;
	zipCode: string;
};

// type for user profile
type Profile = {
	firstName: string;
	lastName: string;
	avatar: string;
	bio: string;
	contactInfo: ContactInfo;
	skills: string[];
	experience: string;
	education: string;
};

// type interface for user document
export interface UserAccountType {
	name: string;
	username: string;
	email: string;
	password: string;
	accountType: string;
}

export interface UserType {
	username: string;
	email: string;
	name: string;
	accountType: string;
	imageUrl: string;
	userProfile: string;
}

// Define a type for the response
export interface CurrentUserReturn {
	isAuthenticated: boolean;
	user: {
		id: string;
		name: string;
		username: string;
		email: string;
		imageUrl: string;
		accountType: string;
	} | null;
	logInTime: string;
	theme: string;
}

export interface UserLogInType {
	id: string;
	name: string;
	username: string;
	email: string;
	imageUrl: string;
	accountType: string;
}
