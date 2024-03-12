import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<>
			<Link className="flex items-end" href="/">
				<Image
					src="/png/logo-light.png"
					width={30}
					height={30}
					alt="Projectile's logo"
					className="dark:hidden"
				/>
				<Image
					src="/png/logo-dark.png"
					width={30}
					height={30}
					alt="Projectile's logo"
					className="hidden dark:flex"
				/>
				<h1 className="font-nova text-lg font-medium text-blue">
					Projectile<span className="text-4xl text-darkGreen">.</span>
				</h1>
			</Link>
		</>
	);
};

export default Logo;
