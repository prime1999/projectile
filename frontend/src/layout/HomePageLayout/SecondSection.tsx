import Image from "next/image";

const SecondSection = () => {
	return (
		<div className="flex flex-col items-center gap-16 mt-32 md:flex-row">
			<div className="w-full text-black md:w-1/2">
				<h3 className="w-full font-kanit text-3xl font-semibold dark:text-light md:w-2/3">
					We take the work off your hands.
				</h3>
				<p className="text-sm font-inter text-gray-400 mt-4">
					Embrace life's vastness, venture forth, and discover the wonders
					waiting beyond. The world beckons; seize its grand offerings now!
				</p>
				<p className="text-sm font-inter text-gray-400 mt-4">
					Embrace life's vastness, venture forth, and discover the wonders
					waiting beyond. The world beckons; seize its grand offerings now!
				</p>
			</div>
			<div className="flex items-center gap-4">
				<Image
					src="/png/rectangle-41.png"
					width={150}
					height={150}
					alt="task manager's image"
				/>
				<div>
					<Image
						src="/png/rectangle-42.png"
						width={150}
						height={150}
						alt="task manager's image"
					/>
					<Image
						src="/jpg/rectangle-43.jpg"
						width={200}
						height={200}
						alt="task manager's image"
						className="rounded-xl shadow-lg"
					/>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
