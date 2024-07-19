import mockup2 from "../assets/images/mockup2.png";
import mockup3 from "../assets/images/mockup3.png";
import mockup4 from "../assets/images/mockup4.png";

function FeatureSection() {
  return (
    <>
      <article className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-4 mx-6 pt-10">
        <section className="flex flex-col justify-center h-80 rounded-lg bg-[#7434db] p-4">
          <h2 className="text-3xl mb-4 text-center">Fonctionnalités</h2>
          <ul className="flex flex-col gap-4">
            <li className="font-bold">
              Feature 1:
              <p className="font-light">Suivi des dépenses en temps réel</p>
            </li>
            <p>
              Enregistrez instantanément chaque dépense et voyez l'impact
              immédiat sur votre budget global.
            </p>
          </ul>
        </section>
        <section className="h-full rounded-lg bg-[#7434db] lg:col-span-2">
          <img src={mockup2} alt="" />
        </section>
      </article>

      <article className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-4 mx-6 py-4">
        <section className="flex flex-col justify-center h-80 rounded-lg bg-[#7434db] p-4 lg:col-span-2">
          <ul className="flex flex-col gap-4">
            <li className="font-bold">
              Feature 2:
              <p className="font-light">Visualisation graphique intuitive</p>
            </li>
            <p>
              Notre outil de visualisation vous permet de voir où va votre
              argent grâce à des graphiques circulaires, des barres et des
              lignes. Comparez vos dépenses sur différentes périodes et
              identifiez les tendances de vos habitudes de consommation.
            </p>
          </ul>
        </section>
        <section className="h-full rounded-lg bg-[#7434db]">
          <img src={mockup3} alt="" />
        </section>
      </article>

      <article className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-4 mx-6 pb-10">
        <section className="flex flex-col justify-center h-80 rounded-lg bg-[#7434db] p-4">
          <ul className="flex flex-col gap-4">
            <li className="font-bold">
              Feature 3:
              <p className="font-light">Rapports financiers détaillés</p>
            </li>
            <p>
              Générez des rapports financiers détaillés en un seul clic. Notre
              application compile automatiquement toutes vos données et crée des
              rapports complets sur vos dépenses, vos économies et vos flux de
              trésorerie.
            </p>
          </ul>
        </section>
        <section className="h-full rounded-lg bg-[#7434db] lg:col-span-2">
          <img src={mockup4} alt="" />
        </section>
      </article>
    </>
  );
}

export default FeatureSection;
