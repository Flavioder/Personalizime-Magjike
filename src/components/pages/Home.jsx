import HeroSection from "../home/HeroSection";
import WhyChooseUs from "../home/WhyChooseUs";
import OurCollection from "../home/OurCollection";
import FeaturedProduct from "../home/FeaturedProduct";
import HowItWorks from "../home/HowItWorks";
import Gallery from "../home/Gallery";
import Review from "../home/Review";
import CallToAction from "../home/CallToAction";
import CookiePopUp from "./CookiePopUp";
import ChristmasMarquee from "../home/ChristmasMarquee.jsx";
function Home() {
  return (
    <>
      <HeroSection />
      <ChristmasMarquee />
      <WhyChooseUs />
      <FeaturedProduct />
      <OurCollection />
      <HowItWorks />
      <Gallery />
      <Review />
      <CallToAction />
      <CookiePopUp />
    </>
  );
}
export default Home;
