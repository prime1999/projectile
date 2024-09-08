import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema(
	{
		project_id: {
			type: mongoose.Schema.Types.ObjectId, // Reference to the Project model
			ref: "Project",
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		start_time: {
			type: Date, // Start time of the schedule
			required: true,
		},
		end_time: {
			type: Date, // End time of the schedule
			required: true,
		},
		location: {
			type: String, // Physical or virtual location (e.g., "Zoom", "Google Meet", etc.)
			required: true,
		},
		attendees: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		], // Array of attendees
	},
	{ timestamps: true }
);

const Schedule = mongoose.model("Schedule", ScheduleSchema);

export default Schedule;
