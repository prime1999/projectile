import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import Listing from "./model/ListingModel.js";
import connectDB from "./config/db.js";
import lisitngs from "./data/listings.js";

dotenv.config();

connectDB();

// function to import listing data
const importListingsData = async () => {
	try {
		// delete users data in the DB
		await Listing.deleteMany();
		// add the new users data into the DB
		await Listing.insertMany(lisitngs);
		console.log(`Data imported:`.green.inverse);
		// exit the process
		process.exit();
	} catch (error) {
		// if an error occured in the try block then
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

// function to clear all lisitngs data from the DB
const destroyListingsData = async () => {
	try {
		// delete listings data in the DB
		await Listing.deleteMany();
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
	destroyListingsData();
} else {
	// if there isn't then
	importListingsData();
}
