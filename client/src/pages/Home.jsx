import HeroSection from "../components/HeroSection";
import NavbarHome from "../components/NavbarHome";

function Home() {
  return (
    <section className="overflow-hidden">
      <NavbarHome />
      <HeroSection />
    </section>
  );
}

export default Home;
