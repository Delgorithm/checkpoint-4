import iconStar from "../assets/images/GlowingStar.svg";

function HeroSection() {
  return (
    <section className="mx-4 flex flex-col justify-center items-center ">
      <p className="flex items-center text-xs text-center gap-2 bg-[#7434db] py-1.5 px-4 rounded-lg text-white mt-4">
        Ajoutez vos dépenses en un clic
        <img src={iconStar} alt="Icon étoile" />
      </p>
      <h1 className=" text-center py-6 text-2xl">
        Gérez Vos Dépenses Facilement avec Notre Application
      </h1>
      <div className="h-[300px] w-11/12 bg-[#7434db] rounded-lg" />
    </section>
  );
}

export default HeroSection;
