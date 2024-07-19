import mockup2 from "../assets/images/mockup2.png";
import mockup3 from "../assets/images/mockup3.png";
import mockup4 from "../assets/images/mockup4.png";

function FeatureSection() {
  return (
    <>
      <article className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-4 mx-6 pt-10">
        <h2 className="text-3xl mb-4 text-center">Fonctionnalités</h2>
        <section className="flex flex-col justify-center h-80 rounded-lg bg-[#7434db] p-4">
          <ul className="flex flex-col h-full justify-around">
            <li className="font-bold text-2xl text-white">
              Feature 1:
              <p className="font-light text-lg">
                Suivi des dépenses en temps réel
              </p>
            </li>
            <p className="text-gray-300 font-light">
              Enregistrez instantanément chaque dépense et voyez l'impact
              immédiat sur votre budget global. Que ce soit pour les petites ou
              les grandes dépenses, notre système vous offre une vue d'ensemble
              claire et précise. Vous pouvez également classer vos dépenses par
              catégorie pour une analyse plus fine.
            </p>
          </ul>
        </section>
        <section className="h-full rounded-lg bg-[#7434db] lg:col-span-2">
          <img src={mockup2} alt="" className="rounded-xl shadow-2xl" />
        </section>
      </article>

      <article className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-4 mx-6 py-4">
        <section className="flex flex-col justify-center h-80 rounded-lg bg-[#7434db] p-4 lg:col-span-2">
          <ul className="flex flex-col h-full justify-around">
            <li className="font-bold text-2xl text-white">
              Feature 2:
              <p className="font-light text-lg">
                Visualisation graphique intuitive
              </p>
            </li>
            <p className="text-gray-300 font-light">
              Notre outil de visualisation vous permet de voir où va votre
              argent grâce à des graphiques circulaires, des barres et des
              lignes. Comparez vos dépenses sur différentes périodes et
              identifiez les tendances de vos habitudes de consommation.
            </p>
          </ul>
        </section>
        <section className="h-full rounded-lg bg-[#7434db]">
          <img src={mockup3} alt="" className="rounded-xl shadow-2xl" />
        </section>
      </article>

      <article className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-4 mx-6 pb-10">
        <section className="flex flex-col justify-center h-80 rounded-lg bg-[#7434db] p-4">
          <ul className="flex flex-col h-full justify-around">
            <li className="font-bold text-2xl text-white">
              Feature 3:
              <p className="font-light text-lg">
                Rapports financiers détaillés
              </p>
            </li>
            <p className="text-gray-300 font-light">
              Générez des rapports financiers détaillés en un seul clic. Notre
              application compile automatiquement toutes vos données et crée des
              rapports complets sur vos dépenses, vos économies et vos flux de
              trésorerie.
            </p>
          </ul>
        </section>
        <section className="h-full rounded-lg bg-[#7434db] lg:col-span-2">
          <img src={mockup4} alt="" className="rounded-xl shadow-2xl" />
        </section>
      </article>
    </>
  );
}

export default FeatureSection;
