"use client";
import { useState } from "react";
// shadcn components
import { Switch } from "@/components/ui/switch";
// react-icons
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const DarkLightMode = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

	// for light/dark mode
	const toggleThemeMode = () => {
		if (document.documentElement.classList.contains("dark")) {
			//remove class=dark in html element
			document.documentElement.classList.remove("dark");
		} else {
			//add class=dark in html element
			document.documentElement.classList.add("dark");
		}
		setIsDarkMode((prevState) => !prevState);
	};
	return (
		<div className="flex items-center gap-2">
			{" "}
			<Switch onClick={toggleThemeMode} />
			<p>{isDarkMode ? <FaMoon /> : <IoSunny />}</p>
		</div>
	);
};

export default DarkLightMode;
