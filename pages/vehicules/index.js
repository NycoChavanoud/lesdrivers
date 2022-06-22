import Layout from "../../components/Layout.js";
import VehiculeCard from "../../components/VehiculeCard.js";
import styleVehicules from "../../styles/Vehicules.module.css";
import React, { useState } from "react";

export default function Vehicules() {
  const [textOne, setTextOne] = useState(false);
  const [textTwo, setTextTwo] = useState(false);
  const [textThree, setTextThree] = useState(false);
  const [textFour, setTextFour] = useState(false);

  const showText1 = () => {
    setTextOne(!textOne);
  };

  const showText2 = () => {
    setTextTwo(!textTwo);
  };

  const showText3 = () => {
    setTextThree(!textThree);
  };

  const showText4 = () => {
    setTextFour(!textFour);
  };

  return (
    <Layout pageTitle="vehicules">
      <div className={styleVehicules.vehiculeContainer}>
        <h3 className={styleVehicules.vehiculetext1}>
          Des véhicules haut de gamme pour <br />
          <span className={styleVehicules.vehiculetext1span}>
            vos transferts à l{"'"}aéroport de Lyon
          </span>
        </h3>
        <div className={styleVehicules.mainCardContainer}>
          <div className={styleVehicules.textDesktopContainer}>
            {textOne ? <p>texte 1</p> : ""}
            {textTwo ? <p>texte 2</p> : ""}
            {textThree ? <p>texte 3</p> : ""}
            {textFour ? <p>texte 4</p> : ""}
          </div>
          <div className={styleVehicules.vehiculeCardContainer}>
            <VehiculeCard
              classeImage={styleVehicules.img1}
              nomVehicule={"L'hybride électrique"}
              descriptionVehicule={
                " Vous serez séduits par le silence et le confort de nos véhicules hybrides électriques. En ville ces véhicules peuvent rouler jusqu’à 50 % du trajet en mode électrique. Exemple pour une Toyota Prius + Hybride ou Peugeot 508 hybride Break"
              }
              showText={showText1}
            />

            <VehiculeCard
              classeImage={styleVehicules.img2}
              nomVehicule={"La berline grand tourisme"}
              descriptionVehicule={
                " Nous avons également des berlines grand tourisme type Renault TALISMAN. Le véhicule haut de gamme de RENAULT ! Vous apprécierez le confort toutes options et son intérieur cuir. Débutez votre voyage de la meilleure des manières ou prenez place à bord après votre vol. Et laissez-vous simplement conduire…"
              }
              showText={showText2}
            />

            <VehiculeCard
              classeImage={styleVehicules.img3}
              nomVehicule={"Les vans"}
              descriptionVehicule={
                " Profitez de la location de van avec chauffeur pour voyager sereinement et efficacement en groupe à Lyon et sa région.Au contraire d’une location de véhicule classique, ne vous souciez pas des formalités de prise en charge (Etat des lieux, cautions, assurance) chez nous, tout est inclus dans le prix. En plus, la location de van comprend le service d’un chauffeur professionnel formé et expérimenté.  "
              }
              showText={showText3}
            />

            <VehiculeCard
              classeImage={styleVehicules.img4}
              nomVehicule={"Les mini-bus"}
              descriptionVehicule={
                " Vous avez besoin de vous déplacer en groupe ? Découvrez notre service de location de mini-bus ! Chaque mini-bus peut acceuillir une douzaine de personnes assises.  "
              }
              showText={showText4}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
