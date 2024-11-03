import asyncHandler from "../middleware/asyncMiddleware.js";
import Schedule from "../models/ScheduleModel.js";
import User from "../models/userModel.js";

// ----------------------------- function to et a user's schedules ------------------------------ //
const getAllSchedules = asyncHandler(async (req, res) => {
	try {
		const { userId } = req.body;
		// check if user is authorized
		const userExist = await User.find({ userId });
		// if the user is not authorized then,
		if (!userExist) {
			throw new Error("User not authorized");
		}
		// but if the user is athorized then,
		const userSchedules = await Schedule.findOne({
			attendees: { $in: [userId] },
		});
		// if the user does not have a schedule then,
		if (userSchedules) {
			throw new Error("No pending shedules for now");
		}
		res.statu(200).json(userSchedules);
	} catch (error) {
		res.status(400);
		throw new Error(error.message);
	}
});

export { getAllSchedules };
