import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		profile: {
			firstName: String,
			lastName: String,
			avatar: {
				type: String,
				default:
					"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
			},
			bio: String,
			contactInfo: {
				phone: String,
				address: String,
				city: String,
				country: String,
				zipCode: String,
			},
			skills: [String],
			experience: String,
			education: String,
		},
		projects: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Project",
			},
		],
		userType: String,
		Email: String,
		isEmailVerified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
