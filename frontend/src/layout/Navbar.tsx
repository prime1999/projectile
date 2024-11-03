import Link from "next/link";
import Logo from "@/utils/Logo";
import DarkLightMode from "@/components/CSRC_components/DarkLightMode";

const Navbar = () => {
	return (
		<nav className="sticky top-0 w-full px-4 flex items-center justify-between py-4 backdrop-blur-lg md:px-16 lg:px-24">
			<Logo />
			<div className="hidden lg:flex">
				<ul className="flex gap-8 items-center justify-between font-inter font-medium text-black text-sm dark:text-light">
					<li>
						<Link href="/" className="duration-500 hover:text-blue">
							Home
						</Link>
					</li>
					<li>
						<Link href="/" className="duration-500 hover:text-blue">
							About
						</Link>
					</li>
					<li>
						<Link href="/" className="duration-500 hover:text-blue">
							Features
						</Link>
					</li>
					<li>
						<Link href="/" className="duration-500 hover:text-blue">
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="hidden items-center gap-8 lg:flex">
				<DarkLightMode />
				<Link
					href="/register"
					className="bg-blue-100 text-light text-sm rounded-3xl px-4 py-2 font-inter font-medium duration-500 hover:bg-blue-500"
				>
					Sign Up
				</Link>
			</div>
			<div className="lg:hidden">
				<DarkLightMode />
			</div>
		</nav>
	);
};

export default Navbar;
