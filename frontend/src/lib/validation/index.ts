import * as z from "zod";

// =============================== AUTH VALIDATION
export const registrationSchema = z.object({
	username: z
		.string()
		.min(2, { message: "Username must be at least 2 characters long" })
		.max(15, { message: "Username must be at most 15 characters long" }),
	firstname: z
		.string()
		.min(2, { message: "Username must be at least 2 characters long" }),

	lastname: z
		.string()
		.min(2, { message: "Username must be at least 2 characters long" }),

	email: z.string().email({
		message: "Please enter a valid email",
	}),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.max(20, { message: "Password must be at most 20 characters long" }),

	accountType: z.string(),
});

// ====
export const loginSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email",
	}),
	password: z.string(),
});
