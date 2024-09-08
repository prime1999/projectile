import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import connectDB from "./config/db.js";
import User from "./models/userModel.js";
import UserProfile from "./models/UserProfile.js";
import Project from "./models/ProjectModel.js";
import Task from "./models/taskModel.js";
import Schedule from "./models/ScheduleModel.js";
import userProfile from "./data/userProfile.js";
import projects from "./data/projects.js";
import tasks from "./data/tasks.js";
import schedules from "./data/Schedule.js";
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

// function to generate a fake user profile
const importProfileData = async () => {
	try {
		// delete the existing user profiles data
		await UserProfile.deleteMany();
		// insert new user profiles data
		await UserProfile.insertMany(userProfile);
		// exit out of the function
		process.exit();
	} catch (error) {
		// if an error occured in the try block then
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

// function to generate fake projects
const importProjects = async () => {
	try {
		// delete the existing projects data
		await Project.deleteMany();
		// insert new projects data
		await Project.insertMany(projects);
		// exit out of the function
		process.exit();
	} catch (error) {
		// if an error occured in the try block then
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

// function to create a fake task data
const importTask = async () => {
	try {
		// delete the existing tasks data
		await Task.deleteMany();
		// insert new tasks data
		await Task.insertMany(tasks);
		// exit out of the function
		process.exit();
	} catch (error) {
		// if an error occured in the try block then
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

// function to create a fake schedules data
const importSchedule = async () => {
	try {
		// delete the existing schedules data
		await Schedule.deleteMany();
		// insert new schedules data
		await Schedule.insertMany(schedules);
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
} else if (process.argv[2] === "-p") {
	importProfileData();
} else if (process.argv[2] === "-w") {
	importProjects();
} else if (process.argv[2] === "-t") {
	importTask();
} else if (process.argv[2] === "-s") {
	importSchedule();
} else {
	// if there isn't then
	importUserData();
}
