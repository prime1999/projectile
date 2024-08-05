import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="w-full h-screen flex items-center justify-center bg-light">
			{children}
		</main>
	);
};

export default layout;
