import Layout from "../../components/Layout.js";
import VehiculeCard from "../../components/VehiculeCard.js";
import styleVehicules from "../../styles/Vehicules.module.css";
import React, { useState } from "react";
import PhoneButton from "../../components/PhoneButton.js";

export default function Vehicules() {
  const [textCallToAction, setTextCallToAction] = useState(true);
  const [textOne, setTextOne] = useState(false);
  const [textTwo, setTextTwo] = useState(false);
  const [textThree, setTextThree] = useState(false);
  const [textFour, setTextFour] = useState(false);

  const showText1 = () => {
    setTextOne(true);
    setTextTwo(false);
    setTextThree(false);
    setTextFour(false);
    setTextCallToAction(false);
  };

  const showText2 = () => {
    setTextOne(false);
    setTextTwo(true);
    setTextThree(false);
    setTextFour(false);
    setTextCallToAction(false);
  };

  const showText3 = () => {
    setTextOne(false);
    setTextTwo(false);
    setTextThree(true);
    setTextFour(false);
    setTextCallToAction(false);
  };

  const showText4 = () => {
    setTextOne(false);
    setTextTwo(false);
    setTextThree(false);
    setTextFour(true);
    setTextCallToAction(false);
  };

  return (
    <Layout pageTitle="vehicules">
      <PhoneButton />
      <div className={styleVehicules.vehiculeContainer}>
        <h3 className={styleVehicules.vehiculetext1}>
          Des véhicules haut de gamme pour <br />
          <span className={styleVehicules.vehiculetext1span}>
            vos transferts à l{"'"}aéroport de Lyon
          </span>
        </h3>
        <div className={styleVehicules.mainCardContainer}>
          <div className={styleVehicules.textDesktopContainer}>
            <div className={styleVehicules.textDesktop}>
              {textCallToAction ? (
                <div className={styleVehicules.wrapperTitle}>
                  <p className={styleVehicules.textDesktopTitle}>
                    Découvrez tous nos modèles
                  </p>
                  <p className={styleVehicules.textDesktopSubTitle}>
                    Plus de détails en cliquant sur le modèle de votre choix !
                  </p>
                </div>
              ) : (
                ""
              )}
              {textOne ? (
                <div>
                  <h1>L{"'"}hybride électrique</h1>
                  <p>
                    Vous serez séduits par le silence et le confort de nos
                    véhicules hybrides électriques.Par exemple en ville des
                    véhicules comme une Toyota Prius + Hybride ou Peugeot 508
                    hybride Break peuvent rouler jusqu’à 50 % du trajet en mode
                    électrique.
                  </p>
                </div>
              ) : (
                ""
              )}
              {textTwo ? (
                <div>
                  <h1>La berline grand tourisme</h1>
                  <p>
                    Nous avons également des berlines grand tourisme type
                    Renault Talisman. Le véhicule haut de gamme de Renault !
                    Vous apprécierez le confort toutes options et son intérieur
                    cuir. Débutez votre voyage de la meilleure des manières ou
                    prenez place à bord après votre vol. Et laissez-vous
                    simplement conduire…
                  </p>
                </div>
              ) : (
                ""
              )}
              {textThree ? (
                <div>
                  <h1>Les vans</h1>
                  <p>
                    Profitez de la location de van avec chauffeur pour voyager
                    sereinement et efficacement en groupe à Lyon et sa région.Au
                    contraire d’une location de véhicule classique, ne vous
                    souciez pas des formalités de prise en charge (Etat des
                    lieux, cautions, assurance) chez nous, tout est inclus dans
                    le prix. En plus, la location de van comprend le service
                    d’un chauffeur professionnel formé et expérimenté.
                  </p>
                </div>
              ) : (
                ""
              )}
              {textFour ? (
                <div>
                  <h1>Les mini-bus</h1>
                  <p>
                    Vous avez besoin de vous déplacer en groupe ? Découvrez
                    notre service de location de mini-bus avec chauffeur !
                    Chaque mini-bus peut acceuillir une vingtaine de personnes
                    assises.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={styleVehicules.vehiculeCardContainer}>
            <VehiculeCard
              classeImage={styleVehicules.img1}
              nomVehicule={"L'hybride électrique"}
              descriptionVehicule={
                " Vous serez séduits par le silence et le confort de nos véhicules hybrides électriques. Par exemple en ville des véhicules comme une Toyota Prius + Hybride ou Peugeot 508 hybride Break peuvent rouler jusqu’à 50 % du trajet en mode électrique."
              }
              showText={showText1}
            />

            <VehiculeCard
              classeImage={styleVehicules.img2}
              nomVehicule={"La berline grand tourisme"}
              descriptionVehicule={
                " Nous avons également des berlines grand tourisme type Renault Talisman. Le véhicule haut de gamme de Renault ! Vous apprécierez le confort toutes options et son intérieur cuir. Débutez votre voyage de la meilleure des manières ou prenez place à bord après votre vol. Et laissez-vous simplement conduire…"
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
