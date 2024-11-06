"use client";

import { useEffect } from "react";
// next hooks
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { currentUser } from "@/lib/redux/AuthStore";
// react-hook-for | zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import { signInAccount } from "@/lib/appwrite/api";
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
// validation
import { loginSchema } from "@/lib/validation";
// components
import Logo from "@/utils/Logo";

const page = () => {
	const dispatch = useDispatch<AppDispatch>();
	// init the next hook
	const router = useRouter();
	// init shadcn toast
	const { toast } = useToast();
	// redux init
	const { isAuthenticated, isLoading } = useSelector(
		(state: any) => state.auth
	);
	const {
		handleSubmit,
		control,
		setError,
		formState: { errors },
	} = useForm();
	// define the default values of the form
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	useEffect(() => {
		if (isAuthenticated === true) {
			form.reset();
			router.push("/dashboard");
		}
	}, [isAuthenticated]);

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
	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
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
				email: string;
				password: string;
			} = {
				email: values.email,
				password: values.password,
			};
			try {
				// sign the user in
				const session = await signInAccount({
					email: values.email,
					password: values.password,
				});
				console.log(session);
				// check if the user has been logged in
				if (!session) {
					toast({
						variant: "destructive",
						title: "session failed, Please check credentials and try again",
					});
					return;
				}
				// dispatch the function to check if the user is registered and signed in,
				//then set the authenticated variable
				dispatch(currentUser());
			} catch (error) {
				console.log(error);
				toast({
					variant: "destructive",
					title: "Wrong user credentials",
				});
			}
		}
	};
	return (
		<div className="w-[400px] m-4 flex flex-col items-center justify-between gap-8 rounded-lg bg-white bg-cover shadow-lg px-4 pt-2 dark:bg-doc">
			<div className="flex flex-col items-center justify-between">
				<Logo />
				<h3 className="font-kanit text-darkBlue text-sm text-center font-medium my-2">
					Sign In to continue
				</h3>
			</div>
			<div className="w-11/12">
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
