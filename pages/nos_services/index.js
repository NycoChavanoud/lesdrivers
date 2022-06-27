import Layout from "../../components/Layout";
import ServicesCard from "../../components/ServicesCard.js";
import styleService from "../../styles/Services.module.css";
import React, { useState } from "react";

export default function NosServices() {
  const [serviceOne, setServiceOne] = useState(false);

  const showService1 = () => {
    setServiceOne(true);
  };

  return (
    <Layout pageTitle="Les Drivers - Nos Services">
      <div className={styleService.containerService}>
        <p className={styleService.title}>
          Nos différents <span>services</span>
        </p>
        <div className={styleService.cardWrapperandtext}>
          <div className={styleService.cardWrapper}>
            <ServicesCard
              titreService1={"Transfert à l’aéroport"}
              titreService2={"Lyon Saint-Exupéry"}
              contenuService={
                "Quand il est question de se rendre à l’aéroport de Saint-Exupéry ou d’en revenir en pleine nuit, les moyens de transport disponibles se font beaucoup plus rares. C’est pourquoi les chauffeurs Drivers Airport sont à votre disposition dès votre sortie des terminaux."
              }
              style={styleService.containerCardService1}
              showService={showService1}
            />
            <ServicesCard
              titreService1={"Course dans Lyon "}
              titreService2={"et ses alentours"}
              contenuService={
                "Déplacez-vous dans Lyon et ses alentours à bord de véhicules prestige et des chauffeurs tous professionnels qui travaillent selon nos standards de qualité : Tenue en costume et sens du service."
              }
              style={styleService.containerCardService2}
            />
            <ServicesCard
              titreService1={"Location de véhicule "}
              titreService2={" avec chauffeur"}
              contenuService={
                "Les drivers sont heureux de vous présenter le prolongement de leur expérience transfert aéroport avec la location de véhicule avec chauffeur, Les drivers deviennent un peu les « drive heures » ! L’idée est de disposer de votre berline ou van avec chauffeur selon le temps et l’itinéraire que vous avez choisi …"
              }
              style={styleService.containerCardService3}
            />
            <ServicesCard
              titreService1={"Location de vans "}
              contenuService={
                "La location de van avec chauffeur est le moyen pour votre groupe de voyager sereinement et efficacement à Lyon et sa région. Au contraire d’une location de véhicule classique, ne vous souciez pas des formalités de prise en charge (Etat des lieux, cautions, assurance) chez nous, tout est inclus dans le prix . En plus, la location de van comprend le service d’un chauffeur professionnel formé et expérimenté. Nos chauffeurs en plus de vous conduire, apprécient l’échange et le service qu’ils apportent au quotidien. Bref, que ce soit pour une visite touristique de Lyon, un transfert en van pour l’aéroport St Exupéry ou un salon à Eurexpo, choisissez notre formule location van à Lyon !"
              }
              style={styleService.containerCardService4}
            />
          </div>
          <div className={styleService.testService}>
            {serviceOne ? (
              <div>
                <h1>service 1</h1>
                <p>description service 1</p>
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
