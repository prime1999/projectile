import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import connectDB from "./config/db.js";
import User from "./models/userModel.js";
dotenv.config();

connectDB();

// function to import dummy user datas
const importUserData = async () => {
	try {
		// delete the existing users data
		await User.deleteMany();
		// insert new users data
		await User.insertMany(users);
		// exit out of the function
		process.exit();
	} catch (error) {
		// if an error occured in the try block then
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

// function to delete all users data
const destroyUserData = async () => {
	try {
		// delete all users
		await User.deleteMany();
		console.log(`Data destroyed:`.red.inverse);
		// exit out of the function
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
	destroyUserData();
} else {
	// if there isn't then
	importUserData();
}
