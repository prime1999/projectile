// ThemeProvider.tsx
"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ThemeProvider() {
	const { theme } = useSelector((state: any) => state.auth);
	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		console.log(theme);
	}, [theme]);

	return null;
}
