// layouts
import FirstSection from "@/layout/HomePageLayout/FirstSection";
import Hero from "@/layout/HomePageLayout/Hero";
import SecondSection from "@/layout/HomePageLayout/SecondSection";
import ThirdSection from "@/layout/HomePageLayout/ThirdSection";

export default function Home() {
	return (
		<main className="w-10/12 mx-auto">
			<Hero />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
		</main>
	);
}
