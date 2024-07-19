import { useEffect } from "react";
import FAQSection from "../components/FAQSection";
import FeatureSection from "../components/FeatureSection";
import FootSection from "../components/FootSection";
import HeroSection from "../components/HeroSection";
import NavbarHome from "../components/NavbarHome";
import TestimonialSection from "../components/TestimonialSection";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavbarHome />
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <FAQSection />
      <FootSection />
    </>
  );
}

export default Home;
