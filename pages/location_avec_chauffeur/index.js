import Layout from "../../components/Layout";
import TypeVehiculeCard from "../../components/TypeVehiculeCard";
import styleLocation from "../../styles/LocaAvecChauffeur.module.css";
import React, { useState } from "react";

export default function LocationAvecChauffeur() {
  const [selectedItem, setSelectedItem] = useState("");
  const [buttonHandle, setButtonHandle] = useState(false);

  const [selectedForfait, setSelectedForfait] = useState("");

  const handlefunctionButton = () => {
    setButtonHandle(true);
  };

  return (
    <Layout pageTitle="Les Drivers - Location avec chauffeur">
      <div className={styleLocation.containerService}>
        <p className={styleLocation.title}>
          Location <span>avec chauffeur</span>
        </p>
        <div className={styleLocation.containerSection}>
          <div className={styleLocation.containerSectionLeft}>
            Nous avons hâte de vous faire découvrir notre belle ville de Lyon !
          </div>
          <div className={styleLocation.containerSectionRight}>
            <div className={styleLocation.containerForm}>
              <div className={styleLocation.containerInput}>
                <p>
                  Point de <br />
                  rendez-vous
                </p>
                <input className={styleLocation.inputPlace} />
              </div>
              <div className={styleLocation.containerInput}>
                <p>Date</p>
                <input type="date" className={styleLocation.inputDate} />
              </div>
              <div className={styleLocation.containerTime}>
                <p>
                  Je souhaite être pris en charge à <br />
                  partir de{" "}
                  <input
                    id="test"
                    className={styleLocation.inputTime}
                    type="time"
                  />
                </p>
              </div>
              <div className={styleLocation.containerCatVehicles}>
                <p className={styleLocation.sectionTitle}>
                  Catégorie de véhicule souhaitée
                </p>
                <div className={styleLocation.containerCardVehicules}>
                  {" "}
                  <TypeVehiculeCard
                    classPicture={styleLocation.vehi1}
                    vehiculeName={"Hybride électrique"}
                    handlefunction={() => setSelectedItem("vehicule1")}
                    classContainer={
                      selectedItem === "vehicule1"
                        ? styleLocation.active
                        : styleLocation.normal
                    }
                  />
                  <TypeVehiculeCard
                    classPicture={styleLocation.vehi2}
                    vehiculeName={"Berline"}
                    handlefunction={() => setSelectedItem("vehicule2")}
                    classContainer={
                      selectedItem === "vehicule2"
                        ? styleLocation.active
                        : styleLocation.normal
                    }
                  />
                  <TypeVehiculeCard
                    classPicture={styleLocation.vehi3}
                    vehiculeName={"Van"}
                    handlefunction={() => setSelectedItem("vehicule3")}
                    classContainer={
                      selectedItem === "vehicule3"
                        ? styleLocation.active
                        : styleLocation.normal
                    }
                  />
                  <TypeVehiculeCard
                    classPicture={styleLocation.vehi4}
                    vehiculeName={"Mini-bus"}
                    handlefunction={() => setSelectedItem("vehicule4")}
                    classContainer={
                      selectedItem === "vehicule4"
                        ? styleLocation.active
                        : styleLocation.normal
                    }
                  />
                </div>
              </div>
              <div className={styleLocation.containerNumberPeople}>
                <p className={styleLocation.sectionTitle}>
                  Nombre de personnes
                </p>
                <p>
                  Attention ! Merci de prendre en compte la capacité du véhicule
                  suivant le nombre de personnes présente lors du trajet
                </p>
                <div className={styleLocation.containerImageAndInput}>
                  <div className={styleLocation.nbrPeople} />
                  <select className={styleLocation.inputNbrPeople}>
                    <option selected value="base">
                      -
                    </option>
                    <option value="unePersonne">1</option>
                    <option value="deuxPersonnes">2</option>
                    <option value="troisPersonnes">3</option>
                    <option value="quatrePersonne">4</option>
                    <option value="cinqPersonnes">5</option>
                    <option value="sixPersonnes">6</option>
                    <option value="septPersonnes">7</option>
                    <option value="huitPersonnes">8</option>
                    <option value="neufPersonnes">9</option>
                    <option value="dixPersonnes">10</option>
                  </select>
                </div>
              </div>
              <div className={styleLocation.containerForfait}>
                <p className={styleLocation.sectionTitle}>Forfait</p>
                <div className={styleLocation.containerButton}>
                  <button
                    onClick={() => setSelectedForfait("forfait1")}
                    className={
                      selectedForfait === "forfait1"
                        ? styleLocation.buttonForfaitActive
                        : styleLocation.buttonForfaitNormal
                    }
                  >
                    Demi-journée
                  </button>
                  <button
                    onClick={() => setSelectedForfait("forfait2")}
                    className={
                      selectedForfait === "forfait2"
                        ? styleLocation.buttonForfaitActive
                        : styleLocation.buttonForfaitNormal
                    }
                  >
                    Journée entière
                  </button>
                </div>
              </div>
              <div className={styleLocation.containerEndingButton}>
                <button
                  onClick={handlefunctionButton}
                  className={
                    buttonHandle
                      ? styleLocation.buttonActive
                      : styleLocation.buttonNormal
                  }
                >
                  Réserver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
