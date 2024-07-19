function FAQSection() {
  return (
    <section className="space-y-4 mx-6 p-4 bg-[#7434db] rounded-xl">
      <details
        className="group [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-medium">
            Comment puis-je créer un compte sur ExpOn?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-white">
          Pour créer un compte sur ExpOn, cliquez sur le bouton "Inscription" en
          haut à droite de la page d'accueil. Remplissez le formulaire avec vos
          informations personnelles, choisissez un mot de passe sécurisé et
          cliquez sur "Créer un compte". Vous recevrez un e-mail de confirmation
          pour vérifier votre adresse e-mail.
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-medium">
            Comment ajouter une dépense sur ExpOn?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-white">
          Une fois connecté, accédez à votre tableau de bord et cliquez sur
          "Ajouter une dépense". Remplissez les détails de la dépense, tels que
          la catégorie, le montant et la date. Cliquez sur "Enregistrer" pour
          ajouter la dépense à votre compte.
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-medium">
            Puis-je exporter mes données de dépenses?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-white">
          Oui, ExpOn permet d'exporter vos données de dépenses au format CSV.
          Accédez à votre tableau de bord, cliquez sur "Exporter les données" et
          choisissez le format souhaité. Vous pourrez ensuite télécharger le
          fichier et l'utiliser dans d'autres applications de gestion
          financière.
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-medium">
            Comment puis-je visualiser mes dépenses sous forme de graphiques?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-white">
          ExpOn propose des visualisations graphiques intuitives de vos
          dépenses. Accédez à la section "Visualisation" de votre tableau de
          bord pour voir des graphiques détaillés de vos dépenses par catégorie,
          par mois, et bien plus encore. Vous pouvez personnaliser les
          graphiques selon vos besoins.
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-medium">
            Que faire si j'ai oublié mon mot de passe?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-white">
          Si vous avez oublié votre mot de passe, cliquez sur le lien "Mot de
          passe oublié" sur la page de connexion. Entrez votre adresse e-mail et
          vous recevrez un lien pour réinitialiser votre mot de passe. Suivez
          les instructions dans l'e-mail pour choisir un nouveau mot de passe.
          Ces questions et réponses devraient couvrir les principaux aspects de
          l'utilisation de votre application ExpOn et aider les utilisateurs à
          mieux comprendre son fonctionnement.
        </p>
      </details>
    </section>
  );
}

export default FAQSection;
