"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
// next hooks
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// components
import Logo from "@/utils/Logo";
// import EmailVerificationModal from "@/components/modals/EmailVerificationModal";
import {
	useConfirmEmail,
	useCreateAccount,
	useVerifyEmail,
} from "@/lib/react-query/config";
import { UserAccountType } from "@/types/UserType";
// appwrite components
import { signInAccount, SignInWithGoogle } from "@/lib/appwrite/api";
// redux components
import { currentUser } from "@/lib/redux/AuthStore";
import { AppDispatch } from "@/lib/redux/store";
// validation
import { registrationSchema } from "@/lib/validation";

const page = () => {
	// init the next hook
	const router = useRouter();
	const searchParams = useSearchParams();
	// state
	const [userId, setUserId] = useState<string>("");
	const [secret, setSecret] = useState<string>("");
	// init shadcn toast
	const { toast } = useToast();
	// Queries
	const { mutateAsync: createUserAccount } = useCreateAccount();
	const { mutateAsync: verifyEmail } = useVerifyEmail();
	const { mutateAsync: confirmEmail } = useConfirmEmail({ userId, secret });
	// redux init
	const { isAuthenticated, isLoading } = useSelector(
		(state: any) => state.auth
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const EmailConfirmation = async () => {
			await confirmEmail();
		};
		if (isAuthenticated === true) {
			const userId = searchParams.get("userId") as string;
			const secret = searchParams.get("secret") as string;
			if (userId === null || secret === null) {
				return;
			} else {
				setUserId(userId);
				setSecret(secret);
				EmailConfirmation();
				form.reset();
				router.push("/dashboard");
			}
		}
	}, [isAuthenticated]);

	const {
		handleSubmit,
		control,
		setError,
		formState: { errors },
	} = useForm();
	// define the default values of the form
	const form = useForm<z.infer<typeof registrationSchema>>({
		resolver: zodResolver(registrationSchema),
		defaultValues: {
			firstname: "",
			lastname: "",
			username: "",
			email: "",
			password: "",
			accountType: "",
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
	const onSubmit = async (values: z.infer<typeof registrationSchema>) => {
		try {
			// checkc if the user has chosen an acc type
			if (values.accountType === "") {
				toast({
					variant: "destructive",
					title: "Please select an account type",
				});
			} else {
				const userData: UserAccountType = {
					name: `${values.firstname} ${values.lastname}`,
					username: values.username,
					email: values.email,
					password: values.password,
					accountType: values.accountType,
				};
				// create new account for the user
				const newUser: any = await createUserAccount(userData);
				// check if user was created
				if (!newUser?.$id) {
					toast({
						variant: "destructive",
						title:
							"Registration failed, Please check credentials and try again",
					});
					return;
				}

				// sign the user in after creating the user's account
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

				const emailVerification = await verifyEmail();
				console.log(emailVerification);
				if (!emailVerification) {
					toast({
						variant: "destructive",
						title: "Please Enter a valid Email and try again",
					});
				}

				toast({
					title: "Please check your mail to complete registration",
				});
				// dispatch the function to check if the user is registered and signed in,
				// then set the authenticated variable
				dispatch(currentUser());
			}
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Check credentials and try again",
			});
			console.log(error);
		}
	};

	// FUNCTION TO SIGN IN WITH GOOGLE
	const GoogleSignIn = async (currentPage: string) => {
		try {
			// call the api function to sign user in using google
			await SignInWithGoogle(currentPage);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="w-[400px] m-4 flex flex-col items-center justify-between gap-4 rounded-lg bg-white bg-cover shadow-lg px-4 pt-2 dark:bg-doc">
			<div className="flex items-center justify-between w-full mb-8">
				<Logo />
				<h3 className="font-kanit text-darkBlue text-md text-center font-medium">
					Create Account
				</h3>
			</div>
			<div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit, onError)}
						className="-mt-12"
					>
						<div className="flex items-center justify-between gap-4">
							<div className="mt-2">
								<FormField
									control={form.control}
									name="firstname"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-darkBlue">
												First-name
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
							</div>
							<div className="mt-2">
								<FormField
									control={form.control}
									name="lastname"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-darkBlue">Last-name</FormLabel>
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
						</div>
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
							<p className="text-xs text-darkBlue">
								Must be ateast 8 characters
							</p>
						</div>
						<div className="w-full mt-2 flex gap-4 items-center justify-center">
							<FormField
								control={form.control}
								name="accountType"
								render={({ field }) => (
									<FormItem className="flex items-center gap-4">
										<FormControl>
											<RadioGroup
												onValueChange={field.onChange}
												defaultValue={field.value}
												className="flex items-center justify-between"
											>
												<FormItem>
													<FormControl>
														<RadioGroupItem
															value="isClient"
															className="hidden"
														/>
													</FormControl>
													<FormLabel
														className={`${
															field.value === "isClient"
																? "bg-red hover:text-white dark:text-white"
																: "bg-white hover:text-red"
														} font-inter text-xs text-gray-800 px-12 py-2 rounded-md border border-gray-200 cursor-pointer duration-500 hover:border-red`}
													>
														Employer
													</FormLabel>
												</FormItem>
												<FormItem className="flex items-center gap-4">
													<FormControl>
														<RadioGroupItem
															value="isServiceProvider"
															className="hidden"
														/>
													</FormControl>
													<FormLabel
														className={`${
															field.value === "isServiceProvider"
																? "bg-red hover:text-white dark:text-white"
																: "bg-white hover:text-red"
														} font-inter text-xs text-gray-800 px-12 py-2 rounded-md border border-gray-200 cursor-pointer duration-500 hover:border-red`}
													>
														Employee
													</FormLabel>
												</FormItem>
											</RadioGroup>
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
						<div className="flex gap-2 items-center justify-center text-xs mb-2 mt-4">
							<hr className="border border-gray-300 w-1/4" />
							<p className="font-inter text-gray-500 mx-2">Or Register with</p>
							<hr className="border border-gray-300 w-1/4" />
						</div>
					</form>
				</Form>
				<div className="my-2">
					<button
						onClick={() =>
							GoogleSignIn(
								`${window.location.origin}${window.location.pathname}`
							)
						}
						className="w-full mt-4 text-red rounded-full flex items-center justify-center gap-4 text-center font-inter text-sm font-medium duration-500 hover:bg-red hover:text-white"
					>
						<FaGoogle />
						<span>Sign in with Google</span>
					</button>
				</div>

				<div className="flex items-center justify-center gap-2 mt-2">
					<p className="text-sm text-darkBlue font-inter font-semibold">
						Already have an Account?
					</p>
					<Link
						href="/logIn"
						className="flex justify-center font-kanit text-md font-bold text-center text-slate-500 duration-500 hover:text-slate-700"
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
