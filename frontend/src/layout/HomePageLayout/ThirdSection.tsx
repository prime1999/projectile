// next comonent
import Image from "next/image";

const ThirdSection = () => {
	return (
		<div className="flex flex-col-reverse items-center justify-between mt-32 lg:flex-row">
			<Image
				src="/png/frame.png"
				width={400}
				height={400}
				alt="mobile phone image"
				className="mt-16 lg:mt-0"
			/>
			<div className="flex flex-col items-center justify-center mx-auto">
				<h3 className="text-3xl text-center font-kanit font-semibold text-black w-full md:w-2/3 dark:text-light">
					Optimize Your Management Processes Today!
				</h3>
				<p className="text-center text-gray-400 text-sm font-inter mt-8 w-full md:w-2/3">
					Try ManageEase now and experience streamlined management like never
					before.
				</p>
				<div className="flex flex-col items-center justify-between gap-4 w-full mt-16 md:w-[60%] md:mx-auto lg:w-[70%] lg:flex-row">
					<div className="flex gap-2 items-center justify-between border border-gray-400 rounded-xl p-4 w-[70%] cursor-pointer duration-500 hover:bg-gray-100 dark:hover:bg-transparent dark:border-stroke lg:w-1/2 lg:p-2">
						<Image
							src="/png/Vector.png"
							width={30}
							height={30}
							alt="apple logo"
						/>
						<div>
							<h6 className="text-sm font-inter font-semibold">
								Download here on the
							</h6>
							<p className="text-gray-600">App Store</p>
						</div>
					</div>
					<div className="flex gap-2 items-center justify-between border border-gray-400 rounded-xl p-4 w-[70%] cursor-pointer duration-500 hover:bg-gray-100 dark:border-stroke lg:w-1/2 lg:p-2">
						<Image
							src="/png/play.png"
							width={30}
							height={30}
							alt="apple logo"
						/>
						<div>
							<h6 className="text-sm font-inter font-semibold">
								Download here on the
							</h6>
							<p className="text-gray-600">Google Play</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdSection;
