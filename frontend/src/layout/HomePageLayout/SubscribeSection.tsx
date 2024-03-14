import Image from "next/image";
// react-icons
import { FaEnvelope } from "react-icons/fa";

const SubscribeSection = () => {
	return (
		<div className="mt-32 w-full mx-auto bg-blue rounded-2xl md:w-10/1 lg:w-9/12">
			<Image
				src="/png/pills.png"
				width={180}
				height={180}
				alt="part of the design"
				className="relative top-0 left-0"
			/>
			<div className="flex flex-col items-center justify-center mt-4 pb-16 px-8 md:-mt-20">
				<span className="bg-darkBlue font-inter text-white rounded-full py-1 px-2">
					Get Started
				</span>
				<div>
					<h1 className="w-full mx-auto my-8 font-kanit text-xl text-black text-center font-semibold md:text-xl lg:w-2/3 lg:text-3xl">
						Subscribe to our Newsletter & Get Company News
					</h1>
					<div className="relative mx-auto w-72 lg:w-[600px] ">
						<input
							type="text"
							placeholder="Enter Email Address"
							className="w-full rounded-full shadow-lg pr-4 pl-12 py-4 focus:outline-none"
						/>
						<FaEnvelope className="absolute top-5 left-5 text-darkBlue" />
						<button className="bg-cyan-400 text-white rounded-full py-2 px-4 mt-4 w-full duration-500 hover:bg-darkBlue lg:mt-0 lg:w-36 lg:absolute lg:top-2 lg:right-3 lg:bg-blue">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubscribeSection;
