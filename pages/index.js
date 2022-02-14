import BundleBox from "../components/BundleBox";
import FeaturedItemSection from "../components/FeaturedItemSection";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";
import HeroSlider from "../components/HeroSlider";
import Navigation from "../components/Navigation";
import Offer from "../components/Offer";

export default function Home() {
	return (
		<div>
			<HeaderTop />
			<Header />
			<Navigation />
			<HeroSlider />
			<FeaturedItemSection />
			<BundleBox />
			<Offer />
		</div>
	);
}
