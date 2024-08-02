import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import User from "./model/UserModel.js";
import connectDB from "./config/db.js";
import users from "./data/user.js";

dotenv.config();

connectDB();

// function to import user data
const importUsersData = async () => {
	try {
		// delete users data in the DB
		await User.deleteMany();
		// add the new users data into the DB
		await User.insertMany(users);
		console.log(`Data imported:`.green.inverse);
		// exit the process
		process.exit();
	} catch (error) {
		// if an error occured in the try block then
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

// function to clear all users data from the DB
const destroyUsersData = async () => {
	try {
		// delete users data in the DB
		await User.deleteMany();
		console.log(`Data destroyed:`.red.inverse);
		// exit the process
		process.exit();
	} catch (error) {
		// if an error occured in the try block then
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

// when calling the functions in the panel, check if there is a second argument of "-d".
if (process.argv[2] === "-d") {
	// if there is then
	destroyUsersData();
} else {
	// if there isn't then
	importUsersData();
}
