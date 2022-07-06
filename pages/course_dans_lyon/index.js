import Layout from "../../components/Layout";
import TypeVehiculeCard from "../../components/TypeVehiculeCard";
import styleLocation from "../../styles/LocaAvecChauffeur.module.css";
import React, { useState } from "react";

export default function LocationAvecChauffeur() {
  const [selectedItem, setSelectedItem] = useState("");
  const [buttonHandle, setButtonHandle] = useState(false);

  const handlefunctionButton = () => {
    setButtonHandle(true);
  };

  return (
    <Layout pageTitle="Les Drivers - Location avec chauffeur">
      <div className={styleLocation.containerService}>
        <p className={styleLocation.titlecourse}>
          Course dans Lyon <br />
          <span>et ses alentours</span>
        </p>
        <div className={styleLocation.containerSection}>
          <div className={styleLocation.containerSectionLeftCourse}>
            Laissez vous conduire, de jour comme de nuit en toute sécurité !
          </div>
          <div className={styleLocation.containerSectionRight}>
            <div className={styleLocation.containerForm}>
              <div className={styleLocation.containerInput}>
                <p>Départ</p>
                <input className={styleLocation.inputPlace} />
              </div>
              <div className={styleLocation.containerInput}>
                <p>Arrivée</p>
                <input className={styleLocation.inputPlace} />
              </div>
              <div className={styleLocation.containerInput}>
                <p>Date</p>
                <input type="date" className={styleLocation.inputDate} />
              </div>
              <div className={styleLocation.containerTime}>
                <p>
                  Je souhaite réserver mon chauffeur de{" "}
                  <input
                    id="test"
                    className={styleLocation.inputTime}
                    type="time"
                  />
                  à{" "}
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
