import iconStar from "../assets/images/GlowingStar.svg";
import mockup from "../assets/images/mockup2.png";
import BtnCTA from "./BtnCTA";

function HeroSection() {
  return (
    <section className="pt-20 mx-4 flex flex-col justify-center items-center ">
      <p className="flex items-center text-xs text-center gap-2 bg-[#7434db] py-1.5 px-4 rounded-lg text-white mt-4 shadow-lg">
        Ajoutez vos dépenses en un clic
        <img src={iconStar} alt="Icon étoile" />
      </p>
      <h1 className="text-center pt-12 text-2xl">
        Gérez Vos Dépenses Facilement avec Notre Application
      </h1>
      <BtnCTA className="mt-10">Commencer</BtnCTA>
      <img
        src={mockup}
        alt="Représentation sur téléphone de l'application"
        className="rounded-3xl mt-10"
      />
    </section>
  );
}

export default HeroSection;
