import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
			enum: ["client", "service_provider"],
			default: "client",
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
	},
	{ timestamps: true }
);
// function to compare passwords before log in
userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

// function to hash passwords before savin them to the DB
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
