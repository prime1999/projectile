import { ReactNode } from "react";
// layouts
import Footer from "@/layout/Footer";
import MobileNav from "@/layout/MobileLayout/MobileNav";
import Navbar from "@/layout/Navbar";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<main>
			<Navbar />
			{children}
			<MobileNav />
			<Footer />
		</main>
	);
};

export default layout;
