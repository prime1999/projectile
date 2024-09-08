import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema(
	{
		project_id: {
			type: String,
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
		attendees: [String], // Array of attendees
	},
	{ timestamps: true }
);

const Schedule = mongoose.model("Schedule", ScheduleSchema);

export default Schedule;
