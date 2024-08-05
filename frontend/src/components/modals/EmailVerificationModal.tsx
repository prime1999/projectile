"use client";

import { useEffect, useState } from "react";
// next hooks
import { useRouter } from "next/navigation";
// redux state component
import { useDispatch } from "react-redux";
// shadcn components
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { Toaster } from "../ui/toaster";
import { useToast } from "@/components/ui/use-toast";
// icons
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
// redux components
import {
	useRegisterUserMutation,
	useVerifyEmailMutation,
} from "@/redux/slices/UserSlice";
// auth slice components
import { setCredentials } from "@/redux/slices/AuthSlice";

type Props = {
	data: any;
	isOpen: boolean;
	setIsOpen: any;
};

const EmailVerificationModal = ({ data, isOpen, setIsOpen }: Props) => {
	// init the toast hook
	const { toast } = useToast();
	// for the auth slice
	const [register, { isLoading }] = useRegisterUserMutation();
	// state for timer
	const [timer, setTimer] = useState<number>(30);
	const [timeUp, setTimeUp] = useState<boolean>(false);
	const router = useRouter();
	// init the useDispatch hook
	const dispatch = useDispatch();
	const [value, setValue] = useState("");
	// verification email redux fuction
	const [verifyCode, { isLoading: loadingCode }] = useVerifyEmailMutation();

	useEffect(() => {
		if (isOpen) {
			const interval = setInterval(() => {
				setTimer((prevState) => prevState - 1);
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [isOpen]);

	useEffect(() => {
		if (timer === 0) {
			setTimeUp(true);
		}
	}, [timer]);
	const handleSubmit = async () => {
		const userData: {
			username: String;
			email: String;
			password: String;
			userType: String;
			verificationCode: String;
		} = {
			username: data.username,
			email: data.email,
			password: data.password,
			userType: data.accountType,
			verificationCode: value,
		};

		const res = await verifyCode(userData).unwrap();
		console.log(res.status);
		if (res.status) {
			// show an error message
			toast({
				variant: "destructive",
				title: res.message,
			});
		} else {
			dispatch(setCredentials({ ...res }));
			router.push("/dashboard");
			console.log("success");
		}
	};

	const resendCode = async () => {
		console.log(data);
		const userData: {
			username: String;
			email: String;
			password: String;
			userType: String;
		} = {
			username: data.username,
			email: data.email,
			password: data.password,
			userType: data.userType,
		};
		const res = await register(userData).unwrap();
		setTimeUp(false);
		setTimer(30);
		console.log(res);
	};

	return (
		<>
			<Dialog open={isOpen}>
				<DialogContent className="sm:max-w-[425px] font-inter">
					<DialogHeader>
						<DialogTitle className="flex flex-col items-center justify-center gap-2 text-lg text-darkBlue font-semibold">
							<FaEnvelopeCircleCheck className="text-4xl text-darkBlue font-semibold" />
							Please check your mail
						</DialogTitle>
						<p className="text-sm font-medium text-gray-900 text-center">
							We've sent a code to{" "}
							<span className="text-md font-semibold">
								{data && data?.email}
							</span>
						</p>
						<div className="flex flex-col items-center gap-8 justify-center space-y-2">
							<InputOTP
								maxLength={6}
								value={value}
								onChange={(value) => setValue(value)}
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InputOTPGroup>
							</InputOTP>
							<button
								type="submit"
								onClick={handleSubmit}
								className="bg-darkBlue mt-8 text-white text-md font-medium text-clip w-9/12 h-8 duration-500 cursor-pointer hover:bg-cyan-950"
							>
								Verify
							</button>
						</div>
					</DialogHeader>
					<div className="grid gap-4 py-4"></div>

					<div className="flex justify-center items-center text-inter text-sm">
						{timeUp ? (
							<button
								onClick={resendCode}
								className="text-center text-darkBlue font-bold cursor-pointer text-md uppercase duration-500 hover:text-cyan-900"
							>
								Resend
							</button>
						) : (
							<p className="font-medium">Resend code in {timer} seconds</p>
						)}
					</div>
					<button
						onClick={() => setIsOpen(false)}
						className="text-center text-sm text-darkBlue font-semibold font-inter cursor-pointer duration-500 mt-4 hover:text-cyan-900"
					>
						Wrong Mail?
					</button>
				</DialogContent>
			</Dialog>
			<Toaster />
		</>
	);
};

export default EmailVerificationModal;
