import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncMiddleware.js";
import generateToken from "../utils/generateToken.js";

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
		// check if there is a user with the same username or email
		const sameUserName = await User.find({ username: username });
		const sameEmail = await User.find({ email: email });
		console.log({ sameUserName, sameEmail });
		if (sameUserName.length !== 0 || sameEmail.length !== 0) {
			throw new Error("please choose a unique username and email");
		}
		console.log(req.body);
		// if all fields are filled then create user
		const userData = {
			username,
			email,
			password,
			userType,
		};
		const user = await User.create(userData);
		// if the user wa created then
		if (user) {
			// generate a token here
			generateToken(res, user._id);
			// send the user details to the frontend
			res.status(201).json({
				username: user?.username,
				email: user.email,
				userType: user.userType,
			});
		}
	} catch (error) {
		// if an error occured in the try block, then
		res.status(400);
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

export { registerUser, authUser, logUserOut };
