// layouts
import FirstSection from "@/layout/HomePageLayout/FirstSection";
import Hero from "@/layout/HomePageLayout/Hero";
import SecondSection from "@/layout/HomePageLayout/SecondSection";
import ThirdSection from "@/layout/HomePageLayout/ThirdSection";
import PricingSection from "@/layout/HomePageLayout/PricingSection";
import SubscribeSection from "@/layout/HomePageLayout/SubscribeSection";

export default function Home() {
	return (
		<main className="w-10/12 mx-auto mb-16">
			<Hero />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<PricingSection />
			<SubscribeSection />
		</main>
	);
}
