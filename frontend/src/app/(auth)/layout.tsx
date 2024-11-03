import { ReactNode } from "react";
import { QueryProvider } from "@/lib/react-query/queryProvider";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<QueryProvider>
			<main className="w-full h-screen flex items-center justify-center bg-light dark:bg-dark-100">
				{children}
			</main>
		</QueryProvider>
	);
};

export default layout;
