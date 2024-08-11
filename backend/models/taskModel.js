import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
	{
		title: String,
		description: String,
		status: {
			type: String,
			enum: ["to_do", "in_progress", "done"],
			default: "to_do",
		},
		assignee_id: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		project_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Project",
		},
		deadline: String,
	},
	{ timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
