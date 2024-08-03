import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import UserProfile from "./UserProfile.js";

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
			unique: true,
		},
		userType: {
			type: String,
			enum: ["client", "service_provider", "admin"],
			default: "client",
		},
		profile: {
			type: mongoose.Schema.Types.ObjectId,
			ref: UserProfile,
		},
	},
	{ timestamps: true }
);
// function to compare passwords before log in
userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

// function to hash passwords before saving them to the DB
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
