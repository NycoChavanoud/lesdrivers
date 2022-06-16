import styleWelcomeSection from "../styles/WelcomeSection.module.css";

export default function WelcomeSection() {
  return (
    <div className={styleWelcomeSection.welcomeContainer}>
      <div className={styleWelcomeSection.welcomeFirstSection}>
        <h1>Les Drivers Airport</h1>
        <div className={styleWelcomeSection.stroke}></div>
        <h1>
          Lyon
          <span className={styleWelcomeSection.spanRed}>Saint Exupéry</span>
        </h1>
      </div>
      <div className={styleWelcomeSection.texteGabriela}>
        Déplacez-vous sur Lyon en toute sérénité
      </div>
      <div className={styleWelcomeSection.blocVoyageAndEndSection}>
        <div className={styleWelcomeSection.blocVoyage}>
          <p>VOTRE VOYAGE A LA CARTE</p>
          <ul>
            <li>Déplacement professionnel</li>
            <li>En escapade sur Lyon</li>
            <li>Rejoindre une station de ski</li>
            <li>Déplacement longue distance</li>
          </ul>
          <p>
            RÉSERVATION IMMEDIATE, POUR DEMAIN <br />
            ... OU DANS 6 MOIS !
          </p>
        </div>
        <div className={styleWelcomeSection.blocEndSection}>
          <p className={styleWelcomeSection.texteGabriela2}>
            à partir de 40€ ttc
          </p>
          <p className={styleWelcomeSection.paiement}>
            Paiement en espèce et carte <br />
            disponible à bord !
          </p>
          <p className={styleWelcomeSection.chauffeur}>
            <span className={styleWelcomeSection.surlignementorange}>
              Un chauffeur{" "}
            </span>
            en bas de chez vous ou au terminal d’arrivées <br />
            <span className={styleWelcomeSection.surlignementrouge}>
              7J/7J – 24h/24h
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
