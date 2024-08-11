import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},

		firstName: String,
		lastName: String,
		avatar: {
			type: String,
			default:
				"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		},
		bio: String,
		skills: [String],
		experience: {
			name: String,
			description: String,
			position: String,
			skillsUsed: [String],
		},
		projects: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Project",
			},
		],
		userType: String,
		email: String,
		isEmailVerified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
