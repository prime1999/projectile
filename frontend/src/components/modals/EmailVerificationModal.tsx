"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
// icons
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
// redux slice comp
import { useVerifyEmailMutation } from "@/redux/slices/UserSlice";

type Props = {
	data: any;
	isOpen: boolean;
	setIsOpen: any;
};

const EmailVerificationModal = ({ data, isOpen, setIsOpen }: Props) => {
	const [value, setValue] = useState("");
	// verification email redux fuction
	const [verifyCode, { loading }] = useVerifyEmailMutation();
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
					<DialogFooter></DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default EmailVerificationModal;
