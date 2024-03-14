import Link from "next/link";
// react-icons
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	const companyInfo: string[] = ["about-us", "career", "we are hiring", "blog"];
	const features: string[] = [
		"business marketing",
		"user analytics",
		"live chat",
		"unlimited support",
	];
	return (
		<>
			<div className="flex flex-col items-start justify-between w-9/12 mx-auto py-16 md:flex-row">
				<div className="text-black dark:text-light">
					<h3 className="font-kanit text-xl font-semibold mb-4">
						Get In Touch
					</h3>
					<p className="font-inter text-sm text-gray-400 mb-4">
						the quick fox jumps over the lazy dog
					</p>
					<div className="flex items-center gap-4 text-xl">
						<FaFacebook className="text-blue cursor-pointer duration-500 hover:text-darkBlue" />
						<FaInstagram className="text-pink-500 cursor-pointer duration-500 hover:text-pink-700" />
						<FaXTwitter className="text-black cursor-pointer duration-500 hover:text-gray-800" />
					</div>
				</div>
				<div className="flex gap-8 items-start justify-between mt-8  md:mt-0 md:gap-12 lg:gap-32">
					<div>
						<h6 className="font-kanit text-black text-xl font-medium mb-4 dark:text-light">
							Company Info
						</h6>
						<ul>
							{companyInfo.map((info) => (
								<li className="font-inter text-sm text-gray-500 capitalize mb-2 duration-500 hover:text-gray-800">
									<Link href="/">{info}</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h6 className="font-kanit text-black text-xl font-medium mb-4 dark:text-light">
							Features
						</h6>
						<ul>
							{features.map((feature) => (
								<li className="font-inter text-sm text-gray-500 capitalize mb-2 duration-500 hover:text-gray-800">
									<Link href="/">{feature}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="my-12">
				<h1 className="text-center text-lg font-kanit font-medium text-black dark:text-light">
					&copy;
					<span className="text-blue uppercase">
						<Link href="/"> Eminence</Link>
					</span>{" "}
					<span>{new Date().getFullYear()}</span>
				</h1>
			</div>
		</>
	);
};

export default Footer;
