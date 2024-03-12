// next components
import Image from "next/image";
// react-icons
import { AiOutlineTeam, AiTwotonePlayCircle } from "react-icons/ai";

const Hero = () => {
	return (
		<div className="w-full flex flex-col items-center gap-16 py-16 md:flex-row">
			<div className="flex flex-col justify-center w-full lg:w-1/2">
				<h1 className="w-full text-center font-kanit font-semibold text-4xl leading-snug capitalize md:text-left lg:w-[80%]">
					Streamline your workflow with
					<span className="text-darkBlue"> PROJECTILE</span>
				</h1>
				<p className="w-full text-center text-sm font-inter text-gray-400 font-normal mt-4 md:w-2/3 md:text-left">
					Effortlessly manage tasks, teams, and projects with our intuitive
					management app. Simplify your work, amplify your productivity.
				</p>
				<div className="flex flex-col items-center justify-center gap-4 py-8 md:justify-start md:flex-row">
					<button className=" flex items-center gap-2 text-sm font-inter font-medium rounded-3xl bg-darkBlue text-light py-2 px-4 duration-500 hover:bg-blue">
						Hire a team
						<AiOutlineTeam />
					</button>
					<button className=" flex items-center gap-2 text-sm font-inter font-medium rounded-3xl border border-blue text-blue py-2 px-4 duration-500 hover:border-darkBlue hover:text-darkBlue">
						<AiTwotonePlayCircle className="text-xl" />
						Watch video
					</button>
				</div>
				<div className="flex items-center justify-center gap-2 md:justify-start">
					<Image
						src="/png/avatar.png"
						width={60}
						height={60}
						alt="client's pic"
					/>
					<p className="text-sm font-inter text-gray-400 w-2/3 lg:w-1/3">
						"stay on top of your work with zero hassel"
					</p>
				</div>
			</div>
			<div>
				<Image src="/png/lady.png" width={500} height={500} alt="lady" />
			</div>
		</div>
	);
};

export default Hero;
