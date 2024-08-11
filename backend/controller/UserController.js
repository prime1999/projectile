import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncMiddleware.js";
import generateToken from "../utils/generateToken.js";
import nodemailer from "nodemailer";
import UserProfile from "../models/UserProfile.js";

// init code
let code = "";

// ---------------------------- function to register users --------------------------------- //
const registerUser = asyncHandler(async (req, res) => {
	try {
		// get the user details from the req body
		const { username, email, password, userType } = req.body;

		// check if all field are filled
		if (!username || !email || !password || !userType) {
			// if not then show an error
			throw new Error("Please fill all fields");
		}
		//check if there is a user with the same username or email
		const sameUserName = await User.find({ username: username });
		const sameEmail = await User.find({ email: email });
		console.log({ sameUserName, sameEmail });
		// check if the username and email has not been used
		if (sameUserName.length !== 0 || sameEmail.length !== 0) {
			throw new Error("please choose a unique username and email");
		}
		console.log(req.body);
		// send the verification code
		generateRandomCode(6);
		// Create Nodemailer transporter with Gmail SMTP settings
		const transporter = nodemailer.createTransport({
			service: "Gmail",
			auth: {
				user: process.env.APP_MAIL, // app email address
				pass: process.env.APP_PASSWORD, // app email password
			},
			tls: {
				rejectUnauthorized: false, // allow access from any domain
			},
		});
		let mailDetails = {
			from: process.env.APP_MAIL,
			to: email,
			subject: "Verification Mail from PROJECTILE",
			text: `Your verification code is ${code}`,
		};
		// send the mail with verification code to the user
		transporter.sendMail(mailDetails, function (err, data) {
			console.log(data);
			if (err) {
				console.error("Error sending email:", err);
				res.status(200).json({
					status: "error",
					message: err.message,
				});
			} else {
				res.status(200).json({
					username,
					email,
					userType,
					message: "Email sent successfully",
				});
			}
		});
	} catch (error) {
		// if an error occured in the try block, then
		res.status(400);
		throw new Error(error.message);
	}
});

// ----------------------- function to verify code and adding user to DB ---------------------------------- //
const verifyCode = asyncHandler(async (req, res) => {
	try {
		const { username, email, password, userType, verificationCode } = req.body;
		// check if te code is the same as the one sent
		console.log({ code, verificationCode });
		if (code === verificationCode) {
			// create the users detail
			const userData = {
				username,
				email,
				password,
				userType,
			};
			// create the user in the DB
			const user = await User.create(userData);

			// if the user was created then
			if (user) {
				// generate a token here
				generateToken(res, user._id);
				// create a rofile for the user
				const profile = await UserProfile.create({
					user: user._id,
					email,
					isEmailVerified: true,
					userType,
				});
				if (profile) {
					// get the user from the database
					const userExist = await User.findById(user._id);
					userExist.profile = profile._id;
					// Save the updated user
					await userExist.save();
				}
				// send the user details to the frontend
				res.status(201).json({
					username: user?.username,
					email: user.email,
					userType: user.userType,
					profile: profile._id,
				});
			}
		} else {
			throw new Error("Invalid code");
		}
	} catch (error) {
		// if an error occured in the try block, then
		res.status(200).json({
			status: "error",
			message: error.message,
		});
		throw new Error(error.message);
	}
});

// --------------------------------- function to log a user in ---------------------------------- //
const authUser = asyncHandler(async (req, res) => {
	try {
		// get the user details from the req body
		const { email, password } = req.body;

		// check if all field are filled
		if (!email || !password) {
			// if not then show an error
			throw new Error("Please fill all fields");
		}
		// check if the user is in the db (is reistered)
		const user = await User.findOne({ email });
		if (user && user.matchPassword(password)) {
			generateToken(res, user._id);
			// send the details to te frontend
			res.status(200).json({
				username: user.username,
				email: user.email,
				userType: user.userType,
			});
		} else {
			throw new Error("user not found");
		}
	} catch (error) {
		// if an error occured in the try block, then
		res.status(200).json({
			status: 400,
		});
		res.status(400);
		throw new Error(error.message);
	}
});

// -------------------------------- function to log users out ---------------------------------------- //
const logUserOut = asyncHandler(async (req, res) => {
	// check if the user exist
	const userExist = await User.find(req.user._id);
	if (!userExist) {
		// if no, then
		throw new Error("user not found");
	}
	try {
		// proceed to log user out
		// clear the cookie "jwt"
		res.cookie("jwt", "", {
			httpOnly: true,
			expires: new Date(0),
		});
		// send a message  to the frontend
		res.status(200).json({ message: "User logged out successfully" });
	} catch (error) {
		// if an error occured in the try block, then:
		res.status(400);
		throw new Error(error.message);
	}
});

// ------------------------------- function to generate code -------------------------------- //
const generateRandomCode = (length) => {
	let newCode = "";
	// Define the characters from which to generate the code
	const charset = "0123456789";
	// Loop through the specified length and append a random character from the charset to the code
	for (let i = 0; i < length; i++) {
		// Generate a random index
		const randomIndex = Math.floor(Math.random() * charset.length);
		// Append the character at the random index to the code
		newCode += charset[randomIndex];
	}

	code = newCode;

	return code;
};

export { registerUser, authUser, logUserOut, verifyCode };
