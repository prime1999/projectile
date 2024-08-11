"use client";

import { useState } from "react";
// redux hook
import { useDispatch } from "react-redux";
// next hooks
import Link from "next/link";
import { useRouter } from "next/navigation";
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
// user redux splice function
import { setCredentials } from "@/redux/slices/AuthSlice";
// redux components
import { useLogUserInMutation } from "@/redux/slices/UserSlice";
// components
import Logo from "@/utils/Logo";

// form schema
const formSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email",
	}),
	password: z.string(),
});

const page = () => {
	// init the next hook
	const router = useRouter();
	// init the useDispatch hook
	const dispatch = useDispatch();
	// init shadcn toast
	const { toast } = useToast();
	// for the auth slice
	const [logIn, { isLoading }] = useLogUserInMutation();
	// state for opening the modal
	const [isOpen, setIsOpen] = useState<boolean>(false);
	// state for the user data
	const [userData, setUserData] = useState<any>(null);
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
			email: "",
			password: "",
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
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(123);
		console.log(values);
		// check if the user has chosen an acc type
		if (values.password === "") {
			toast({
				variant: "destructive",
				title: "Invalid password",
			});
		} else {
			const userData: {
				email: String;
				password: String;
			} = {
				email: values.email,
				password: values.password,
			};
			const res = await logIn(userData).unwrap();
			if (res.status) {
				toast({
					variant: "destructive",
					title: "Invalid user data",
				});
			} else {
				dispatch(setCredentials({ ...res }));
				router.push("/dashboard");
				console.log(res);
			}
		}
	};
	return (
		<div className="w-[400px] m-4 flex flex-col items-center justify-between gap-8 rounded-lg bg-white shadow-lg px-4 pt-2">
			<div className="flex flex-col items-center justify-between">
				<Logo />
				<h3 className="font-kanit text-darkBlue text-sm text-center font-medium my-2">
					SIgn In to continue
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
										<FormLabel className="text-darkBlue">Password</FormLabel>
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
						<button
							disabled={isLoading}
							type="submit"
							className={`w-full flex gap-4 items-center justify-center mt-4 text-center ${
								isLoading ? "bg-blue" : "bg-darkBlue hover:bg-cyan-800"
							} font-inter font-medium text-white text-sm rounded-full py-2 duration-500`}
						>
							{isLoading && <span className="loader"></span>}
							Submit
						</button>
						<div className="flex gap-2 items-center justify-center text-xs my-2">
							<hr className="border border-gray-300 w-1/4" />
							<p className="font-inter text-gray-500 mx-2">Or Sign In with</p>
							<hr className="border border-gray-300 w-1/4" />
						</div>
					</form>
				</Form>
				<div className="my-2">
					<button className="w-full mt-4 border border-red text-red rounded-full py-2 flex items-center justify-center gap-4 text-center font-inter text-sm font-medium duration-500 hover:bg-red hover:text-white">
						<FaGoogle />
						<span>Log in with Google</span>
					</button>
				</div>

				<div className="flex items-center justify-center gap-2 mt-2">
					<p className="text-sm text-darkBlue font-inter font-semibold">
						Don't have an Account?
					</p>
					<Link
						href="/register"
						className="flex justify-center font-kanit text-md font-bold text-center text-slate-500 duration-500 hover:text-slate-700"
					>
						Register Here
					</Link>
				</div>
			</div>

			<Toaster />
		</div>
	);
};

export default page;
