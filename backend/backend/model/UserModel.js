import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		userType: {
			type: String,
			enum: ["guest", "host"],
			default: "guest",
		},
		profile: {
			firstName: String,
			lastName: String,
			avatar: {
				type: String,
				default: "/images/users/default.jpg",
			},
			bio: String,
			contactInfo: {
				phone: String,
				address: String,
				city: String,
				country: String,
				zipCode: String,
			},
		},
		listings: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Listing",
			},
		],
		bookings: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Booking",
			},
		],
		admin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
