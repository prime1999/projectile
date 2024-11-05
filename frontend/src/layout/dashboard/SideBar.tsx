"use client";

import { useEffect, useRef } from "react";
// next
import Image from "next/image";
import Link from "next/link";
// redux
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { currentUser } from "@/lib/redux/AuthStore";
// shadcn components
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
// react-icons
import { MdDashboard, MdPeople, MdSettings } from "react-icons/md";
import { FaFileLines } from "react-icons/fa6";
import { IoCalendarSharp, IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

const SideBar = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { isAuthenticated } = useSelector((state) => (state as any).auth);
	const hasDispatched = useRef(false);

	useEffect(() => {
		if (!hasDispatched.current && isAuthenticated === false) {
			try {
				dispatch(currentUser());
				console.log("User check dispatched");
				// Set flag to true after first dispatch
				hasDispatched.current = true;
			} catch (error) {
				console.error(error);
			}
		}
	}, [isAuthenticated]);

	return (
		<div className="relative h-screen w-[70px] flex flex-col px-6 pb-8 pt-4 border-r border-gray-300 dark:bg-background dark:text-white  dark:border-darkBorder">
			<Link className="flex items-end mb-8" href="/">
				<Image
					src="/png/logo-light.png"
					width={30}
					height={30}
					alt="Projectile's logo"
					className="dark:hidden"
				/>
				<Image
					src="/png/logo-dark.png"
					width={30}
					height={30}
					alt="Projectile's logo"
					className="hidden dark:flex"
				/>
			</Link>
			<div className="my-2">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<MdDashboard className="text-xl text-black hover:text-blue hover:cursor-pointer dark:text-white dark:hover:text-blue" />
						</TooltipTrigger>
						<TooltipContent className="p-2">
							<p className="text-xs">Dashboard</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<div className="my-2">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<FaFileLines className="text-xl text-black hover:text-blue hover:cursor-pointer dark:text-white dark:hover:text-blue" />
						</TooltipTrigger>
						<TooltipContent className="p-2">
							<p className="text-xs">Projects</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<div className="my-2">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<IoCalendarSharp className="text-xl text-black hover:text-blue hover:cursor-pointer dark:text-white dark:hover:text-blue" />
						</TooltipTrigger>
						<TooltipContent className="p-2">
							<p className="text-xs">Calendar</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<hr className="my-4 border-gray-400 dark:border-darkBorder" />
			<div className="my-2">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<MdPeople className="text-xl text-black hover:text-blue hover:cursor-pointer dark:text-white dark:hover:text-blue" />
						</TooltipTrigger>
						<TooltipContent className="p-2">
							<p className="text-xs">Teams</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<div className="my-2">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<IoChatbubbleEllipsesSharp className="text-xl text-black hover:text-blue hover:cursor-pointer dark:text-white dark:hover:text-blue" />
						</TooltipTrigger>
						<TooltipContent className="p-2">
							<p className="text-xs">Message</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<div className="absolute bottom-4">
				<div className="my-2">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<MdSettings className="text-xl text-black hover:text-blue hover:cursor-pointer dark:text-white dark:hover:text-blue" />
							</TooltipTrigger>
							<TooltipContent className="p-2">
								<p className="text-xs">Settings</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
				<hr className="my-4 border-gray-400 dark:border-darkBorder" />
				<div className="my-2">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<AiOutlineLogout className="text-xl font-semibold text-black hover:text-blue hover:cursor-pointer dark:text-white dark:hover:text-blue" />
							</TooltipTrigger>
							<TooltipContent className="p-2">
								<p className="text-xs">Log-out</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
