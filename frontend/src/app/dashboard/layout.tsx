import SideBar from "@/layout/dashboard/SideBar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="w-full flex dark:bg-darkBg">
			<SideBar />
			{children}
		</main>
	);
};

export default layout;
