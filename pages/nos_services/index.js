import Layout from "../../components/Layout";
import ServicesCard from "../../components/ServicesCard.js";
import styleService from "../../styles/Services.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function NosServices() {
  const [serviceOne, setServiceOne] = useState(false);
  const [serviceTwo, setServiceTwo] = useState(false);
  const [serviceThree, setServiceThree] = useState(false);
  const [serviceFour, setServiceFour] = useState(false);
  const [serviceBase, setServiceBase] = useState(true);

  const showService1 = () => {
    setServiceOne(true);
    setServiceTwo(false);
    setServiceThree(false);
    setServiceFour(false);
    setServiceBase(false);
  };
  const showService2 = () => {
    setServiceOne(false);
    setServiceTwo(true);
    setServiceThree(false);
    setServiceFour(false);
    setServiceBase(false);
  };
  const showService3 = () => {
    setServiceOne(false);
    setServiceTwo(false);
    setServiceThree(true);
    setServiceFour(false);
    setServiceBase(false);
  };
  const showService4 = () => {
    setServiceOne(false);
    setServiceTwo(false);
    setServiceThree(false);
    setServiceFour(true);
    setServiceBase(false);
  };

  const router = useRouter();

  const linkToService1 = () => {
    router.push("/transfert_aeroport");
  };

  const linkToService2 = () => {
    router.push("/transfert_aeroport");
  };

  return (
    <Layout pageTitle="Les Drivers - Nos Services">
      <div className={styleService.containerService}>
        <p className={styleService.title}>
          Nos différents <span>services</span>
        </p>
        <div className={styleService.cardWrapperandtext}>
          <div className={styleService.cardWrapper}>
            <div className={styleService.linkMobile}>
              <ServicesCard
                titreService1={"Transfert à l’aéroport"}
                titreService2={"Lyon Saint-Exupéry"}
                contenuService={
                  "Quand il est question de se rendre à l’aéroport de Saint-Exupéry ou d’en revenir en pleine nuit, les moyens de transport disponibles se font beaucoup plus rares. C’est pourquoi les chauffeurs Drivers Airport sont à votre disposition dès votre sortie des terminaux."
                }
                style={styleService.containerCardService1}
                showService={showService1}
                linkTo={linkToService1}
                backgroundDesktopMobile={styleService.titleService1}
              />
            </div>

            <ServicesCard
              titreService1={"Course dans Lyon "}
              titreService2={"et ses alentours"}
              contenuService={
                "Déplacez-vous dans Lyon et ses alentours à bord de véhicules prestige et des chauffeurs tous professionnels qui travaillent selon nos standards de qualité : Tenue en costume et sens du service."
              }
              style={styleService.containerCardService2}
              showService={showService2}
              linkTo={linkToService2}
              backgroundDesktopMobile={styleService.titleService2}
            />
            <ServicesCard
              titreService1={"Location de véhicule "}
              titreService2={" avec chauffeur"}
              contenuService={
                "Les drivers sont heureux de vous présenter le prolongement de leur expérience transfert aéroport avec la location de véhicule avec chauffeur, Les drivers deviennent un peu les « drive heures » ! L’idée est de disposer de votre berline ou van avec chauffeur selon le temps et l’itinéraire que vous avez choisi …"
              }
              style={styleService.containerCardService3}
              showService={showService3}
              backgroundDesktopMobile={styleService.titleService3}
            />
            <ServicesCard
              titreService1={"Location de vans "}
              contenuService={
                "La location de van avec chauffeur est le moyen pour votre groupe de voyager sereinement et efficacement à Lyon et sa région. Au contraire d’une location de véhicule classique, ne vous souciez pas des formalités de prise en charge (Etat des lieux, cautions, assurance) chez nous, tout est inclus dans le prix . En plus, la location de van comprend le service d’un chauffeur professionnel formé et expérimenté. Nos chauffeurs en plus de vous conduire, apprécient l’échange et le service qu’ils apportent au quotidien. Bref, que ce soit pour une visite touristique de Lyon, un transfert en van pour l’aéroport St Exupéry ou un salon à Eurexpo, choisissez notre formule location van à Lyon !"
              }
              style={styleService.containerCardService4}
              showService={showService4}
              backgroundDesktopMobile={styleService.titleService4}
            />
          </div>
          <div
            className={
              serviceBase
                ? styleService.serviceContainerOff
                : styleService.serviceContainer
            }
          >
            {serviceBase ? (
              <div>
                <div className={styleService.backgroundCardBase}>
                  <h1>Découvrez tous nos services !</h1>
                </div>
              </div>
            ) : (
              ""
            )}
            {serviceOne ? (
              <div>
                <div className={styleService.backgroundCard1}>
                  <h1>Transfert à l’aéroport.</h1>
                </div>
                <div>
                  <p className={styleService.textService}>
                    Quand il est question de se rendre à l’aéroport de
                    Saint-Exupéry ou d’en revenir en pleine nuit, les moyens de
                    transport disponibles se font beaucoup plus rares. C’est
                    pourquoi les chauffeurs Drivers Airport sont à votre
                    disposition dès votre sortie des terminaux.
                  </p>
                  <button
                    className={styleService.buttService}
                    onClick={() => router.push("/transfert_aeroport")}
                  >
                    Accéder au service
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
            {serviceTwo ? (
              <div>
                <div className={styleService.backgroundCard2}>
                  <h1>Course dans Lyon.</h1>
                </div>
                <div>
                  <p className={styleService.textService}>
                    Déplacez-vous dans Lyon et ses alentours à bord de véhicules
                    prestige et des chauffeurs tous professionnels qui
                    travaillent selon nos standards de qualité : Tenue en
                    costume et sens du service.
                  </p>
                  <button
                    className={styleService.buttService}
                    onClick={() => router.push("/course_dans_lyon")}
                  >
                    Accéder au service
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
            {serviceThree ? (
              <div>
                <div className={styleService.backgroundCard3}>
                  <h1>Location de véhicule avec chauffeur.</h1>
                </div>
                <div>
                  <p className={styleService.textService}>
                    Les drivers sont heureux de vous présenter le prolongement
                    de leur expérience transfert aéroport avec la location de
                    véhicule avec chauffeur, Les drivers deviennent un peu les «
                    drive heures » ! L’idée est de disposer de votre berline ou
                    van avec chauffeur selon le temps et l’itinéraire que vous
                    avez choisi …
                  </p>
                  <button
                    className={styleService.buttService}
                    onClick={() => router.push("/location_avec_chauffeur")}
                  >
                    Accéder au service
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
            {serviceFour ? (
              <div>
                <div className={styleService.backgroundCard4}>
                  <h1>Location de vans.</h1>
                </div>
                <div>
                  <p className={styleService.textService}>
                    La location de van avec chauffeur est le moyen pour votre
                    groupe de voyager sereinement et efficacement à Lyon et sa
                    région. Au contraire d’une location de véhicule classique,
                    ne vous souciez pas des formalités de prise en charge (Etat
                    des lieux, cautions, assurance) chez nous, tout est inclus
                    dans le prix . En plus, la location de van comprend le
                    service d’un chauffeur professionnel formé et expérimenté.
                    Nos chauffeurs en plus de vous conduire, apprécient
                    l’échange et le service qu’ils apportent au quotidien. Bref,
                    que ce soit pour une visite touristique de Lyon, un
                    transfert en van pour l’aéroport St Exupéry ou un salon à
                    Eurexpo, choisissez notre formule location van à Lyon !
                  </p>
                  <button
                    className={styleService.buttService}
                    onClick={() => router.push("location_avec_chauffeur")}
                  >
                    Accéder au service
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
