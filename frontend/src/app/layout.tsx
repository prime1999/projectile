import type { Metadata } from "next";
import { Inter, Kanit, Nova_Square } from "next/font/google";
import "./globals.css";

import { Providers } from "@/redux/provider";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const kanit = Kanit({
	subsets: ["latin"],
	weight: "600",
	display: "swap",
	variable: "--font-kanit",
});

const nova = Nova_Square({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-nova",
});

export const metadata: Metadata = {
	title: "Projectile",
	description: "A project and task management system",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Providers>
				<body
					className={`${inter.variable} ${kanit.variable} ${nova.variable}`}
				>
					{children}
				</body>
			</Providers>
		</html>
	);
}
