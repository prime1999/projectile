"use client";
import { useState, useEffect } from "react";
// next components
import Link from "next/link";
// react icons
import { FaHome, FaBookOpen } from "react-icons/fa";
import { MdOutlineFeaturedPlayList, MdAccountCircle } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const MobileNav = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		let scrollTimer: any;

		const handleScroll = () => {
			setIsVisible(!isScrolling);
			setIsScrolling(true);

			clearTimeout(scrollTimer);

			scrollTimer = setTimeout(() => {
				setIsScrolling(false);
			}, 300);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(scrollTimer);
		};
	}, []);
	return (
		<nav
			style={{
				position: "fixed",
				bottom: "10px",
				left: 0,

				transition: "bottom 0.3s ease-in-out",
			}}
			className={`duration-400 w-full ${
				isScrolling ? "hidden" : "flex"
			} lg:hidden`}
		>
			<div className="w-11/12 mx-auto rounded-lg backdrop-blur-xl shadow-md text-center p-4">
				<ul className="flex gap-6 items-center justify-center md:gap-[10%]">
					<li className="font-inter">
						<Link
							className="flex flex-col items-center justify-center text-blue duration-500 hover:text-cyan-900 dark:text-light hover:dark:text-blue"
							href="/"
						>
							<FaHome className="text-2xl" />
							<p className="text-xs">Home</p>
						</Link>
					</li>

					<li className="text-md font-inter">
						<Link
							className="flex flex-col items-center justify-center text-blue duration-500 hover:text-cyan-900 dark:text-light hover:dark:text-blue"
							href="/"
						>
							<MdOutlineFeaturedPlayList className="text-2xl" />
							<p className="text-xs">Features</p>
						</Link>
					</li>
					<li className="text-md font-inter">
						<Link
							className="flex flex-col items-center justify-center text-blue duration-500 hover:text-cyan-900 dark:text-light hover:dark:text-blue"
							href="/"
						>
							<RiContactsFill className="text-2xl" />
							<p className="text-xs">Contact</p>
						</Link>
					</li>
					<li className="text-md font-inter">
						<Link
							className="flex flex-col items-center justify-center text-blue duration-500 hover:text-cyan-900 dark:text-light hover:dark:text-blue"
							href="/"
						>
							<MdAccountCircle className="text-2xl" />
							<p className="text-xs">Sign-up</p>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default MobileNav;
