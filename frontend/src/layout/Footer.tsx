// react-icons
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<div className="w-9/12 mx-auto py-16">
			<div className="text-black dark:text-light">
				<h3 className="font-kanit text-xl font-semibold mb-4">Get In Touch</h3>
				<p className="font-inter text-sm text-gray-400 mb-4">
					the quick fox jumps over the lazy dog
				</p>
				<div className="flex items-center gap-4 text-xl">
					<FaFacebook className="text-blue cursor-pointer duration-500 hover:text-darkBlue" />
					<FaInstagram className="text-pink-500 cursor-pointer duration-500 hover:text-pink-700" />
					<FaXTwitter className="text-black cursor-pointer duration-500 hover:text-gray-800" />
				</div>
			</div>
			<div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Footer;
