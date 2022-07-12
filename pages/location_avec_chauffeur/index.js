import Layout from "../../components/Layout";
import TypeVehiculeCard from "../../components/TypeVehiculeCard";
import styleLocation from "../../styles/LocaAvecChauffeur.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function CourseDansLyon() {
  const [selectedItem, setSelectedItem] = useState("");
  const [buttonHandle, setButtonHandle] = useState(false);

  const [selectedForfait, setSelectedForfait] = useState("");

  const handlefunctionButton = () => {
    setButtonHandle(true);
  };

  // all behind is useful for fetch data

  const [departureAdress, setDepartureAdress] = useState("");
  const [departureOfDate, setDepartureOfDate] = useState("2022-08-02");
  const [departureOfTime, setDepartureOfTime] = useState("10:00");
  const [numberOfPassengers, setNumberOfPassengers] = useState("0");

  const router = useRouter();

  const handleCreateLocaChauff = (e) => {
    e.preventDefault();
    axios
      .post(`/api/locaChauff`, {
        departureAdress: departureAdress,
        departureOfDate: departureOfDate,
        departureOfTime: departureOfTime,
        numberOfPassengers: parseInt(numberOfPassengers, 10),
        vehiculeNeeded: selectedItem,
        forfait: selectedForfait,
      })
      .then(() => router.push("/"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Layout pageTitle="Les Drivers - Course dans Lyon">
      <div className={styleLocation.containerService}>
        <p className={styleLocation.titleloc}>
          Location <span>avec chauffeur</span>
        </p>
        <div className={styleLocation.containerSection}>
          <div className={styleLocation.containerSectionLeftLoca}>
            Nous avons hâte de vous faire découvrir notre belle ville de Lyon !
          </div>
          <div className={styleLocation.containerSectionRight}>
            <div className={styleLocation.containerForm}>
              <div className={styleLocation.containerInput}>
                <p>
                  Point de <br />
                  rendez-vous
                </p>
                <input
                  className={styleLocation.inputPlace}
                  value={departureAdress}
                  onChange={(e) => setDepartureAdress(e.target.value)}
                />
              </div>
              <div className={styleLocation.containerInput}>
                <p>Date</p>
                <input
                  type="date"
                  className={styleLocation.inputDate}
                  value={departureOfDate}
                  onChange={(e) => setDepartureOfDate(e.target.value)}
                />
              </div>
              <div className={styleLocation.containerTime}>
                <p>
                  Je souhaite être pris en charge à <br />
                  partir de{" "}
                  <input
                    className={styleLocation.setDepartureOfDate}
                    type="time"
                    value={departureOfTime}
                    onChange={(e) => setDepartureOfTime(e.target.value)}
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
                    handlefunction={() => setSelectedItem("Hybride électrique")}
                    classContainer={
                      selectedItem === "Hybride électrique"
                        ? styleLocation.active
                        : styleLocation.normal
                    }
                    onChange={(e) => setSelectedItem(e.target.value)}
                  />
                  <TypeVehiculeCard
                    classPicture={styleLocation.vehi2}
                    vehiculeName={"Berline"}
                    handlefunction={() => setSelectedItem("Berline")}
                    classContainer={
                      selectedItem === "Berline"
                        ? styleLocation.active
                        : styleLocation.normal
                    }
                    onChange={(e) => setSelectedItem(e.target.value)}
                  />
                  <TypeVehiculeCard
                    classPicture={styleLocation.vehi3}
                    vehiculeName={"Van"}
                    handlefunction={() => setSelectedItem("Van")}
                    classContainer={
                      selectedItem === "Van"
                        ? styleLocation.active
                        : styleLocation.normal
                    }
                    onChange={(e) => setSelectedItem(e.target.value)}
                  />
                  <TypeVehiculeCard
                    classPicture={styleLocation.vehi4}
                    vehiculeName={"Mini-bus"}
                    handlefunction={() => setSelectedItem("Mini-bus")}
                    classContainer={
                      selectedItem === "Mini-bus"
                        ? styleLocation.active
                        : styleLocation.normal
                    }
                    onChange={(e) => setSelectedItem(e.target.value)}
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
                  <input
                    type="number"
                    min="0"
                    max="500"
                    className={styleLocation.inputNbrPeople}
                    value={numberOfPassengers}
                    onChange={(e) => setNumberOfPassengers(e.target.value)}
                  />
                </div>
              </div>
              <div className={styleLocation.containerForfait}>
                <p className={styleLocation.sectionTitle}>Forfait</p>
                <div className={styleLocation.containerButton}>
                  <button
                    onClick={() => setSelectedForfait("forfait demi-journée")}
                    className={
                      selectedForfait === "forfait demi-journée"
                        ? styleLocation.buttonForfaitActive
                        : styleLocation.buttonForfaitNormal
                    }
                    onChange={(e) => setSelectedForfait(e.target.value)}
                  >
                    Demi-journée
                  </button>
                  <button
                    onClick={() =>
                      setSelectedForfait("forfait journée entière")
                    }
                    className={
                      selectedForfait === "forfait journée entière"
                        ? styleLocation.buttonForfaitActive
                        : styleLocation.buttonForfaitNormal
                    }
                    onChange={(e) => setSelectedForfait(e.target.value)}
                  >
                    Journée entière
                  </button>
                </div>
              </div>
              <div className={styleLocation.containerEndingButton}>
                <button
                  onClick={(handlefunctionButton, handleCreateLocaChauff)}
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
