// react-icons
import { FaEnvelope } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { HiMiniArrowPath } from "react-icons/hi2";
import { FaMagnifyingGlass } from "react-icons/fa6";

const FirstSection = () => {
	return (
		<div>
			<h1 className="font-kanit text-3xl font-semibold text-black text-center dark:text-light">
				Key Features
			</h1>
			<p className="font-inter text-gray-300 text-sm text-center w-full mx-auto mt-2 md:w-1/2">
				Embrace life's vastness, venture forth, and discover the wonders waiting
				beyond. The world beckons; seize its grand offerings now!
			</p>
			<div className="mt-8">
				<ul className="grid grid-cols-2 gap-4 font-inter text-black md:grid-cols-4">
					<li className="flex flex-col items-center justify-center text-center">
						<FaEnvelope className="bg-orange-200 w-8 h-8 p-2 text-md text-orange-500 rounded-sm" />
						<h6 className="text-md font-semibold mt-4 dark:text-light">
							Task Management
						</h6>
						<p className="text-sm text-gray-400 mt-2">
							Organize and track your task with ease.
						</p>
					</li>
					<li className="flex flex-col items-center justify-center text-center">
						<MdAnalytics className="bg-green-200 w-8 h-8 p-2 text-md text-green-500 rounded-sm" />
						<h6 className="text-md font-semibold mt-4 dark:text-light">
							Team Collaboration
						</h6>
						<p className="text-sm text-gray-400 mt-2">
							Efficiently collaborate and communicate with your team.
						</p>
					</li>
					<li className="flex flex-col items-center justify-center text-center">
						<HiMiniArrowPath className="bg-violet-200 w-8 h-8 p-2 text-md text-violet-500 rounded-sm" />
						<h6 className="text-md font-semibold mt-4 dark:text-light">
							Project Tracking
						</h6>
						<p className="text-sm text-gray-400 mt-2">
							Monitor project progress and milestones.
						</p>
					</li>
					<li className="flex flex-col items-center justify-center text-center">
						<FaMagnifyingGlass className="bg-indigo-200 w-8 h-8 p-2 text-md text-indigo-500 rounded-sm" />
						<h6 className="text-md font-semibold mt-4 dark:text-light">
							Report and Analytics
						</h6>
						<p className="text-sm text-gray-400 mt-2">
							Access insightful data for informed decisions.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default FirstSection;
