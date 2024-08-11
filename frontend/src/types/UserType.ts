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
export interface UserDocumentType {
	username: string;
	email: string;
	password: string;
	userType: string;
	profile: Profile | [];
	projects: string[] | [];
}

export interface UserType {
	username: string;
	email: string;
	password: string;
	status: String;
	message: string;
}

export interface UserLogInType {
	email: string;
	password: string;
	status?: any;
	message?: String;
}
