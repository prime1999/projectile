import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import asyncHandler from "./asyncMiddleware.js";

// --------------------------- function to check if the user is authenticated (loged in) --------------- //
const protect = asyncHandler(async (req, res, next) => {
	// init a token variable
	let token;
	// store the toke from in the variable
	token = req.cookies.jwt;
	// check if the token is actually there
	if (token) {
		// if the token is there then check if it is correct
		try {
			// decode the token
			const decoded = await jwt.verify(token, process.env.JWT_SECRET);
			// once the token is verified, get the user using the token
			req.user = await User.findById(decoded.userId).select("-password");
			// move on to the next middleware
			next();
		} catch (error) {
			// if any error occured in the try block, then:
			res.status(401);
			throw new Error("User not authorized");
		}
	} else {
		// if there is no token in the cookies in the request then:
		res.status(401);
		throw new Error("User not authorized, No token");
	}
});

// ------------------------ function to check if the user is a service provider ----------------------- //
const isProvider = async (req, res, next) => {
	// check if the user is authenticated and if the user is a service provider
	if (req.user && req.user.userType === "serviceProvider") {
		// if yes, then allow passage
		next();
	} else {
		// if no, then
		res.status(400);
		throw new Error("User not authorized");
	}
};

// ---------------------------------- function to check if the user is an admin --------------------------- //
const admin = (req, res, next) => {
	// check if there is a user logged in and if the user is an admin

	if (req.user && req.user.isAdmin) {
		// if yes, then allow passage
		next();
	} else {
		// if no, then
		res.status(400);
		throw new Error("User not authorized");
	}
};

export { protect, isProvider, admin };
