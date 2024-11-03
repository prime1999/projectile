import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema(
	{
		project_id: {
			type: mongoose.Schema.Types.ObjectId,
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
			type: Date,
			required: true,
		},
		end_time: {
			type: Date,
			required: true,
		},
		location: {
			type: String,
			enum: ["zoom", "google-meet", "in-app", "other"],
			required: true,
		},
		attendees: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
	{ timestamps: true }
);

const Schedule = mongoose.model("Schedule", ScheduleSchema);

export default Schedule;
