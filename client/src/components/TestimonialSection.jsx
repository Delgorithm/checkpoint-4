import people1 from "../assets/images/people1.webp";
import people2 from "../assets/images/people2.webp";
import people3 from "../assets/images/people3.webp";
import people4 from "../assets/images/people4.webp";
import people5 from "../assets/images/people5.webp";
import people6 from "../assets/images/people6.webp";

function TestimonialSection() {
  return (
    <section className="mx-6">
      <section className="flex items-stretch gap-4 py-6 my-5">
        <img
          src={people1}
          alt="Marc Leblanc"
          className="aspect-square w-20 rounded-lg object-cover"
        />

        <section>
          <h3 className="text-lg/tight font-medium text-gray-900">
            Marc Leblanc
          </h3>

          <p className="mt-0.5 text-gray-700">
            "Grâce à cette application, je peux suivre mes dépenses en temps
            réel et rester dans mon budget."
          </p>
        </section>
      </section>

      <section className="flex items-stretch gap-4 py-6 my-5">
        <section>
          <h3 className="text-lg/tight font-medium text-gray-900">
            Sophie Lanoir
          </h3>

          <p className="mt-0.5 text-gray-700">
            "Les notifications de dépassement de budget sont super utiles pour
            garder le contrôle de mes finances."
          </p>
        </section>

        <img
          src={people2}
          alt="Sophie Martin"
          className="aspect-square w-20 rounded-lg object-cover"
        />
      </section>

      <section className="flex items-stretch gap-4 py-6 my-5">
        <img
          src={people3}
          alt="Julien Dubois"
          className="aspect-square w-20 rounded-lg object-cover"
        />

        <section>
          <h3 className="text-lg/tight font-medium text-gray-900">
            Julienne Larousse
          </h3>

          <p className="mt-0.5 text-gray-700">
            "L'interface utilisateur est très conviviale et intuitive. J'ai pu
            commencer à utiliser l'application immédiatement."
          </p>
        </section>
      </section>

      <section className="flex items-stretch gap-4 py-6 my-5">
        <section>
          <h3 className="text-lg/tight font-medium text-gray-900">
            Hugo Lefevre
          </h3>

          <p className="mt-0.5 text-gray-700">
            "Les rapports financiers détaillés m'ont aidée à mieux comprendre
            mes habitudes de dépenses et à économiser plus."
          </p>
        </section>

        <img
          src={people4}
          alt="Claire Lefevre"
          className="aspect-square w-20 rounded-lg object-cover"
        />
      </section>

      <section className="flex items-stretch gap-4 py-6 my-5">
        <img
          src={people5}
          alt="Lucas Moreau"
          className="aspect-square w-20 rounded-lg object-cover"
        />

        <section>
          <h3 className="text-lg/tight font-medium text-gray-900">
            Manon Moreau
          </h3>

          <p className="mt-0.5 text-gray-700">
            "Je me sens beaucoup plus en sécurité en sachant que mes données
            financières sont bien protégées."
          </p>
        </section>
      </section>

      <section className="flex items-stretch gap-4 py-6 my-5">
        <section>
          <h3 className="text-lg/tight font-medium text-gray-900">
            David Deltoïde
          </h3>

          <p className="mt-0.5 text-gray-700">
            "Grâce à cette application, je peux suivre mes dépenses en temps
            réel et rester dans mon budget."
          </p>
        </section>

        <img
          src={people6}
          alt="David Deltoide"
          className="aspect-square w-20 rounded-lg object-cover"
        />
      </section>
    </section>
  );
}

export default TestimonialSection;
