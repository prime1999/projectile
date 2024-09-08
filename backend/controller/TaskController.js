import asyncHandler from "../middleware/asyncMiddleware.js";
import Task from "../models/taskModel.js";
import User from "../models/userModel.js";

// ----------------------------- function to get all task of a user ------------------------ //
const getAllTasks = asyncHandler(async (req, res) => {
	try {
		// get the details of the user requesting the tasks
		const { userId } = req.body;

		// check if the user exist
		const userExist = await User.findOne({ _id: userId });

		// if the user does not exist
		if (!userExist) {
			throw new Error("User not authorized");
		}
		// if the user exist then, find the tasks associated to the user
		const userTasks = await Task.find({
			assignee_id: { $in: [userId] },
		}).populate("assignee_id", "-password");
		// if the user does not have any task then
		if (!userTasks) {
			throw new Error("No task for you");
		}
		// if the user have tasks then
		res.status(200).json(userTasks);
	} catch (error) {
		res.status(400);
		throw new Error(error.message);
	}
});

// ---------------------------------- function to et tasks of a project ---------------------------- //
const getProjectTasks = asyncHandler(async (req, res) => {
	try {
		// get the details from the request body
		const { projectId, userId } = req.body;
		// check if the user exist
		const userExist = await User.findOne({ _id: userId });

		// if the user does not exist
		if (!userExist) {
			throw new Error("User not authorized");
		}
		// if the user exist then, find the tasks of the project
		const projectTasks = await Task.find({ project_id: projectId }).populate(
			"assignee_id",
			"-password"
		);
		// if the project task doex not exis then
		if (!projectTasks) {
			throw new Error("No task assigned for the project");
		}
		// but if task exist then
		res.status(200).json(projectTasks);
	} catch (error) {
		res.status(400);
		throw new Error(error.message);
	}
});

export { getAllTasks, getProjectTasks };
