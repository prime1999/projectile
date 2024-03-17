"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
	username: z.string().min(2).max(50),
	email: z.string().email({
		message: "Please enter a valid email",
	}),
	password: z.string().min(8).max(20),
	confirmPassword: z.string().min(8).max(20),
});

const page = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});
	return <div>page</div>;
};

export default page;
