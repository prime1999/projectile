"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { toggleTheme } from "@/lib/redux/AuthStore";
import { Switch } from "@/components/ui/switch";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { themeToggler } from "@/lib/utils";

const DarkLightMode = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { theme, isAuthenticated } = useSelector((state: any) => state.auth);
	// const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

	// Check localStorage for theme preference on initial load
	// useEffect(() => {
	// 	const storedTheme = localStorage.getItem("theme");
	// 	if (storedTheme === "dark") {
	// 		document.documentElement.classList.add("dark");
	// 		setIsDarkMode(true);
	// 	} else {
	// 		document.documentElement.classList.remove("dark");
	// 		setIsDarkMode(false);
	// 	}
	// }, []);

	// Toggle theme and save to localStorage
	const toggleThemeMode = () => {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			console.log(themeToggler("light", isAuthenticated));
			dispatch(toggleTheme("light"));
			return themeToggler("light", isAuthenticated);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			console.log(themeToggler("dark", isAuthenticated));
			dispatch(toggleTheme("dark"));
			return themeToggler("dark", isAuthenticated);
		}
	};

	return (
		<div
			onClick={toggleThemeMode}
			className="flex items-center gap-2 hover:cursor-pointer"
		>
			<Switch checked={theme === "dark"} />
			<p>{theme === "dark" ? <FaMoon /> : <IoSunny />}</p>
		</div>
	);
};

export default DarkLightMode;
