import Image from "next/image";
// react-icons
import { FaEnvelope } from "react-icons/fa";

const SubscribeSection = () => {
	return (
		<div className="mt-32 w-9/12 mx-auto bg-blue rounded-2xl">
			<Image
				src="/png/pills.png"
				width={180}
				height={180}
				alt="part of the design"
				className="relative top-0 left-0"
			/>
			<div className="flex flex-col items-center justify-center -mt-20 pb-16 px-8">
				<span className="bg-darkBlue font-inter text-white rounded-full py-1 px-2">
					Get Started
				</span>
				<div>
					<h1 className="w-2/3 mx-auto my-8 font-kanit text-3xl text-black text-center font-semibold">
						Subscribe to our Newsletter & Get Company News
					</h1>
					<div className="relative w-[600px] ">
						<input
							type="text"
							placeholder="Enter Email Address"
							className="w-full rounded-full shadow-lg pr-4 pl-12 py-4 focus:outline-none"
						/>
						<FaEnvelope className="absolute top-5 left-5 text-darkBlue" />
						<button className="absolute top-2 right-3 bg-blue text-white rounded-full py-2 px-4 duration-500 hover:bg-darkBlue">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubscribeSection;
