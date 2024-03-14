// react-icons
import { FaCheck } from "react-icons/fa6";

const PricingSection = () => {
	const freePlan = [
		{
			availaible: true,
			value: "unlimited product updates",
		},
		{
			availaible: true,
			value: "unlimited product",
		},
		{
			availaible: true,
			value: "unlimited product",
		},
		{
			availaible: false,
			value: "1GB cloud storage",
		},
		{
			availaible: false,
			value: "email and community support",
		},
	];
	const basicPlan = [
		{
			availaible: true,
			value: "unlimited product updates",
		},
		{
			availaible: true,
			value: "unlimited product",
		},
		{
			availaible: true,
			value: "unlimited product",
		},
		{
			availaible: false,
			value: "1GB cloud storage",
		},
		{
			availaible: false,
			value: "email and community support",
		},
	];
	const standardPlan = [
		{
			availaible: true,
			value: "unlimited product updates",
		},
		{
			availaible: true,
			value: "unlimited product",
		},
		{
			availaible: true,
			value: "unlimited product",
		},
		{
			availaible: true,
			value: "1GB cloud storage",
		},
		{
			availaible: true,
			value: "email and community support",
		},
	];
	return (
		<div className="mt-32">
			<h3 className="text-center font-kanit text-semibold text-3xl text-black">
				Our Pricing Plan
			</h3>
			<p className="w-full mx-auto mt-4 text-center font-inter text-gray-400 text-sm md:w-1/2">
				Embrace life's vastness, venture forth, and discover the wonders waiting
				beyond. The world beckons; seize its grand offerings now!
			</p>
			<div className="w-9/12 mx-auto mt-16 md:w-11/12 lg:w-9/12">
				<ul className="grid grid-cols-1 gap-4 font-inter md:grid-cols-3 lg:gap-8">
					<li className="shadow-md p-4 rounded-xl cursor-pointer duration-500 dark:border  dark:border-stroke hover:bg-cyan-50 dark:hover:bg-darkBlue">
						<h6 className="text-black text-sm text-center font-semibold dark:text-light">
							Free Plan
						</h6>
						<p className="text-2xl font-semibold text-black text-center my-4 dark:text-light">
							FREE
						</p>
						<p className="text-center text-sm text-gray-400 mb-4">
							Enjoy Projectile with our free plan
						</p>
						{freePlan.map((char) => (
							<p className="flex items-center gap-2 text-sm mb-4">
								<FaCheck
									className={`${
										char.availaible ? "text-green-400" : "text-gray-300"
									}`}
								/>
								<span>{char.value}</span>
							</p>
						))}
						<div className="flex items-center justify-center">
							<button className="mx-auto text-sm text-light bg-darkBlue rounded-3xl py-1 px-2 duration-500 hover:bg-blue">
								Continue to membership
							</button>
						</div>
					</li>
					<li className="shadow-md p-4 rounded-xl cursor-pointer duration-500 dark:border  dark:border-stroke hover:bg-cyan-50 dark:hover:bg-darkBlue">
						<h6 className="text-black text-sm text-center font-semibold dark:text-light">
							Basic Plan
						</h6>
						<p className="text-2xl font-semibold text-black text-center my-4 dark:text-light">
							$30 <span className="text-sm text-gray-400">/Month</span>
						</p>
						<p className="text-center text-sm text-gray-400 mb-4">
							Slate helps you see how many more days you need...
						</p>
						{basicPlan.map((char) => (
							<p className="flex items-center gap-2 text-sm mb-4">
								<FaCheck
									className={`${
										char.availaible ? "text-green-400" : "text-gray-300"
									}`}
								/>
								<span>{char.value}</span>
							</p>
						))}
						<div className="flex items-center justify-center">
							<button className="mx-auto text-sm text-white bg-green-600 rounded-3xl py-1 px-2 duration-500 hover:bg-green-400">
								Continue to membership
							</button>
						</div>
					</li>
					<li className="shadow-md p-4 rounded-xl cursor-pointer duration-500 dark:border  dark:border-stroke hover:bg-cyan-50 dark:hover:bg-darkBlue">
						<h6 className="text-black text-sm text-center font-semibold dark:text-light">
							Standard Plan
						</h6>
						<p className="text-2xl font-semibold text-black text-center my-4 dark:text-light">
							$70 <span className="text-sm text-gray-400">/Month</span>
						</p>
						<p className="text-center text-sm text-gray-400 mb-4">
							Slate helps you see how many more days you need...
						</p>
						{standardPlan.map((char) => (
							<p className="flex items-center gap-2 text-sm mb-4">
								<FaCheck
									className={`${
										char.availaible ? "text-green-400" : "text-gray-300"
									}`}
								/>
								<span>{char.value}</span>
							</p>
						))}
						<div className="flex items-center justify-center">
							<button className="mx-auto text-sm text-white bg-violet-600 rounded-3xl py-1 px-2 duration-500 hover:bg-violet-400">
								Continue to membership
							</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PricingSection;
