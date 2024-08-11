import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		title: String,
		description: String,
		skills_required: [String],
		status: {
			type: String,
			enum: ["pending", "in_progress", "completed"],
			default: "pending",
		},
		availabilty: {
			type: String,
			enum: ["open", "closed"],
			default: "open",
		},
		deadline: String,
		employer_id: {
			type: String,
		},
		applications: [
			{
				employee_id: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
				},
				status: {
					type: String,
					enum: ["pending", "in_review", "rejected", "accepted"],
					default: "pending",
				},
			},
		],
		tasks: [String],
		team: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
	{ timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
