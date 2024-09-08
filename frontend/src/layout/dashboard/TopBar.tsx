"use client";
// redux components
import { useSelector } from "react-redux";
// next components
import Image from "next/image";
// react-icons
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
// shadcn components
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
// react-components
import DarkLightMode from "@/components/CSRC_components/DarkLightMode";

const TopBar = () => {
	const { userInfo } = useSelector((state: any) => state.auth);
	console.log(userInfo);
	return (
		<div className="w-full flex items-center justify-between border-b border-gray-300 p-4 dark:border-darkBorder">
			<h1 className="font-semibold font-nova text-lg">DASHBOARD</h1>
			<div className="flex items-center gap-2">
				<form className="relative">
					<input
						type="text"
						placeholder="Search..."
						className="w-[300px] bg-transparent font-inter text-sm rounded-md px-2 py-2 pl-8 border border-gray-300 focus:outline-none focus:border-1 dark:border-darkBorder"
					/>
					<FaMagnifyingGlass className="absolute top-3 left-2 font-normal" />
				</form>
				<div className="flex items-center gap-2">
					<div className="mx-2">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<FaBell className="text-xl text-black hover:text-blue hover:cursor-pointer dark:text-white dark:hover:text-blue" />
								</TooltipTrigger>
								<TooltipContent className="p-2">
									<p className="text-xs">Notification</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<div className="relative">
						<div className="mx-2 border-2 border-green-500 rounded-full">
							<Image
								src={userInfo?.pic}
								alt="user's pic"
								width={30}
								height={30}
								className="rounded-full"
							/>
						</div>
						<div className="absolute -bottom-1 right-2 w-3 h-3 bg-white rounded-full flex items-center justify-center dark:bg-background">
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
						</div>
					</div>
					<DarkLightMode />
				</div>
			</div>
		</div>
	);
};

export default TopBar;
