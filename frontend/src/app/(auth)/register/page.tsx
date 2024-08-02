"use client";

// next hooks
import Image from "next/image";
import Link from "next/link";
// react-hook-for | zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
// shadcn components
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
// components
import Logo from "@/utils/Logo";

// form schema
const formSchema = z.object({
	username: z
		.string()
		.min(2, { message: "Username must be at least 2 characters long" })
		.max(50, { message: "Username must be at most 50 characters long" }),

	email: z.string().email({
		message: "Please enter a valid email",
	}),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.max(20, { message: "Password must be at most 20 characters long" }),
	isClient: z.boolean(),
	isServiceProvider: z.boolean(),
});

const page = () => {
	// init shadcn toast
	const { toast } = useToast();
	const {
		handleSubmit,
		control,
		setError,
		formState: { errors },
	} = useForm();
	// define the default values of the form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			isClient: false,
			isServiceProvider: false,
		},
	});

	// function to handle input errors
	const onError = (errors: any) => {
		// check if there are any errors
		if (Object.entries(errors).length !== 0) {
			for (let key in errors) {
				if (errors.hasOwnProperty(key)) {
					// Check if the property belongs to the object (not inherited)
					toast({
						variant: "destructive",
						title: errors[key]?.message,
					});
					console.log(`Key: ${key}, Value: ${errors[key]?.message}`);
				}
			}
		}
		console.log({ errors, errorCheck: Object.entries(errors).length });
	};

	//  function to handle the submission of the form
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.

		// ✅ This will be type-safe and validated.
		console.log(123);
		console.log(values);
	}
	return (
		<div className="w-[400px] m-4 flex flex-col items-center justify-between gap-8 rounded-lg bg-white shadow-lg px-4 pt-2">
			<div className="flex flex-col items-center justify-between">
				<Logo />
				<h3 className="font-kanit text-darkBlue text-sm text-center font-medium my-2">
					Register to create your first account
				</h3>
			</div>
			<div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit, onError)}
						className="-mt-12"
					>
						<div className="mt-2">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-darkBlue">Username</FormLabel>
										<FormControl>
											<Input
												{...field}
												className="bg-transparent text-darkBlue border border-darkBlue focus:outline-none focus:border-gray-300 focus:outline-2 focus:bg-transparent"
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<div className="mt-2">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-darkBlue">Email</FormLabel>
										<FormControl>
											<Input
												{...field}
												className="bg-transparent text-darkBlue border border-darkBlue focus:outline-none focus:border-gray-300 focus:outline-2 focus:bg-transparent"
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<div className="mt-2">
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-darkBlue">
											Create Password
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												className="bg-transparent text-darkBlue border border-darkBlue focus:outline-none focus:border-gray-300 focus:outline-2 focus:bg-transparent"
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<p className="text-xs text-gray-300">
								Must be ateast 8 characters
							</p>
						</div>
						<p className="font-inter text-sm text-gray-300 mt-4">
							Select Account type
						</p>
						<div className="w-full flex gap-4 items-center justify-between">
							<FormField
								control={form.control}
								name="isClient"
								render={({ field }) => (
									<FormItem className="flex items-center gap-4">
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
												className="hidden"
											/>
										</FormControl>
										<FormLabel className="font-inter text-xs text-gray-800 px-12 py-2 rounded-md border border-gray-200 cursor-pointer hover:border-red hover:text-red">
											Employer
										</FormLabel>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="isServiceProvider"
								render={({ field }) => (
									<FormItem className="flex items-center gap-4">
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
												className="hidden"
											/>
										</FormControl>
										<FormLabel className="font-inter text-xs text-gray-800 px-12 py-2 rounded-md border border-gray-200 cursor-pointer hover:border-red hover:text-red">
											Employee
										</FormLabel>
									</FormItem>
								)}
							/>
						</div>

						<div className="flex gap-2 items-center justify-center text-xs my-2">
							<hr className="border border-gray-300 w-1/4" />
							<p className="font-inter text-gray-500 mx-2">Or Register with</p>
							<hr className="border border-gray-300 w-1/4" />
						</div>
						<button
							type="submit"
							className="w-full text-center bg-darkBlue font-inter font-medium text-white text-sm rounded-full py-2 duration-500 hover:bg-cyan-800"
						>
							Submit
						</button>
					</form>
				</Form>
				<div className="my-2">
					<button className="w-full mt-4 border border-red text-red rounded-full py-2 flex items-center justify-center gap-4 text-center font-inter text-sm font-medium duration-500 hover:bg-red hover:text-white">
						<FaGoogle />
						<span>Sign in with Google</span>
					</button>
				</div>

				<div className="flex items-center justify-center gap-2 mt-2">
					<p className="text-sm text-gray-300 font-inter font-semibold">
						Already have an Account?
					</p>
					<Link
						href="/logIn"
						className="flex justify-center font-kanit text-sm text-center text-slate-500 duration-500 hover:text-slate-700"
					>
						Log-In
					</Link>
				</div>
			</div>

			<Toaster />
		</div>
	);
};

export default page;
