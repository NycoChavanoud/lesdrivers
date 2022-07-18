import Layout from "../../components/Layout";
import TypeVehiculeCard from "../../components/TypeVehiculeCard";
import styleLocation from "../../styles/LocaAvecChauffeur.module.css";
import React, { useState, useRef } from "react";
import axios from "axios";
import ConfirmationLoca from "../../components/ConfirmationLoca.js";
import emailjs from "@emailjs/browser";

export default function LocationAvecChauffeur() {
  const [selectedItem, setSelectedItem] = useState("");
  const [buttonHandle, setButtonHandle] = useState(false);

  const [selectedForfait, setSelectedForfait] = useState("");

  const [passengerName, setPassengerName] = useState("");
  const [passengerFirstname, setPassengerFirstname] = useState("");
  const [passengerMail, setPassengerMail] = useState("");
  const [passengerPhoneNumber, setPassengerPhoneNumber] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(true);
  const [showMain, setShowMain] = useState(true);

  const handlefunctionButton = () => {
    setButtonHandle(true);
  };

  // all behind is useful for fetch data

  const [departureAdress, setDepartureAdress] = useState("");
  const [departureOfDate, setDepartureOfDate] = useState("2022-08-02");
  const [departureOfTime, setDepartureOfTime] = useState("10:00");
  const [numberOfPassengers, setNumberOfPassengers] = useState("0");

  const handleCreateLocaChauff = (e) => {
    e.preventDefault();
    setShowConfirmation();
    setShowMain();
    axios
      .post(`/api/locaChauff`, {
        departureAdress: departureAdress,
        departureOfDate: departureOfDate,
        departureOfTime: departureOfTime,
        numberOfPassengers: parseInt(numberOfPassengers, 10),
        vehiculeNeeded: selectedItem,
        forfait: selectedForfait,
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const form = useRef();

  const sendEmailCourse = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hwrw8hn",
      "template_k8q0koh",
      form.current,
      "AUafpo6N2PVFopqgz"
    );
    //.then(() => router.push("/"));
  };

  return (
    <Layout pageTitle="Les Drivers - Location avec chauffeur">
      <div className={styleLocation.containerService}>
        <p className={styleLocation.titleloc}>
          Location <span>avec chauffeur</span>
        </p>
        <div
          className={
            showMain
              ? styleLocation.containerSectionOn
              : styleLocation.containerSectionOff
          }
        >
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
        <div
          className={
            showConfirmation
              ? styleLocation.containerRecapOff
              : styleLocation.containerRecapOn
          }
        >
          {/*<form ref={form} onSubmit={sendEmailCourse}>
            <div className={styleLocation.containerOldInfo}>
              <h1>Super ! Tout est prêt.</h1>
              <p>Voici le récapitulatif de votre course.</p>
              <div className={styleLocation.buttonContainer}>
                <div className={styleLocation.url1} />
                <div className={styleLocation.ensembleTexte}>
                  <p className={styleLocation.title}>{"Lieu de départ"}</p>
                  <input
                    className={styleLocation.data}
                    placeholder={departureAdress}
                    value={departureAdress}
                    name="dataDepart"
                  />
                </div>
              </div>
              <div className={styleLocation.buttonContainer}>
                <div className={styleLocation.url3} />
                <div className={styleLocation.ensembleTexte}>
                  <p className={styleLocation.title}>{"Date"}</p>
                  <input
                    className={styleLocation.data}
                    placeholder={departureOfDate}
                    value={departureOfDate}
                    name="dataDate"
                  />
                </div>
              </div>
              <div className={styleLocation.buttonContainer}>
                <div className={styleLocation.url4} />
                <div className={styleLocation.ensembleTexte}>
                  <p className={styleLocation.title}>{"Heure"}</p>
                  <input
                    className={styleLocation.data}
                    placeholder={departureOfTime}
                    value={departureOfTime}
                    name="dataTime"
                  />
                </div>
              </div>
              <div className={styleLocation.buttonContainer}>
                <div className={styleLocation.url5} />
                <div className={styleLocation.ensembleTexte}>
                  <p className={styleLocation.title}>{"Véhicule"}</p>
                  <input
                    className={styleLocation.data}
                    placeholder={selectedItem}
                    value={selectedItem}
                    name="dataVehicule"
                  />
                </div>
              </div>
              <div className={styleLocation.buttonContainer}>
                <div className={styleLocation.url6} />
                <div className={styleLocation.ensembleTexte}>
                  <p className={styleLocation.title}>{"Nombre de personne"}</p>
                  <input
                    className={styleLocation.data}
                    placeholder={numberOfPassengers}
                    value={numberOfPassengers}
                    name="dataNbrPeople"
                  />
                </div>
              </div>
              <div className={styleLocation.buttonContainer}>
                <div className={styleLocation.url7} />
                <div className={styleLocation.ensembleTexte}>
                  <p className={styleLocation.title}>{"Forfait"}</p>
                  <input
                    className={styleLocation.data}
                    placeholder={selectedForfait}
                    value={selectedForfait}
                    name="nameData"
                  />
                </div>
              </div>
            </div>
            <div className={styleLocation.containerUserInfo}>
              <h1>Merci de remplir ces dernières informations !</h1>

              <div className={styleLocation.containerInput}>
                <p>Nom</p>
                <input
                  className={styleLocation.inputPlace}
                  type="text"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  name="lastname"
                />
              </div>
              <div className={styleLocation.containerInput}>
                <p>Prénom</p>
                <input
                  className={styleLocation.inputPlace}
                  type="text"
                  value={passengerFirstname}
                  onChange={(e) => setPassengerFirstname(e.target.value)}
                  name="firstname"
                />
              </div>
              <div className={styleLocation.containerInput}>
                <p>Numéro de téléphone</p>
                <input
                  className={styleLocation.inputPlace}
                  type="text"
                  value={passengerPhoneNumber}
                  onChange={(e) => setPassengerPhoneNumber(e.target.value)}
                  name="tel"
                />
              </div>
              <div className={styleLocation.containerInput}>
                <p>Adresse mail</p>
                <input
                  className={styleLocation.inputPlace}
                  type="text"
                  value={passengerMail}
                  onChange={(e) => setPassengerMail(e.target.value)}
                  name="mail"
                />
              </div>
              <div>
                <input
                  className={styleLocation.btnRecap}
                  type="submit"
                  value="Valider mes informations"
                />
              </div>
            </div>
          </form> */}

          {/*Ancient form*/}

          <form ref={form} onSubmit={sendEmailCourse}>
            <ConfirmationLoca
              dataDepart={departureAdress}
              dataDate={departureOfDate}
              dataTime={departureOfTime}
              dataVehicule={selectedItem}
              dataNbrPeople={numberOfPassengers}
              dataForfait={selectedForfait}
            />
            <div className={styleLocation.containerUserInfo}>
              <h1>Merci de remplir ces dernières informations !</h1>

              <div className={styleLocation.containerInput}>
                <p>Nom</p>
                <input
                  className={styleLocation.inputPlace}
                  type="text"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  name="lastname"
                />
              </div>
              <div className={styleLocation.containerInput}>
                <p>Prénom</p>
                <input
                  className={styleLocation.inputPlace}
                  type="text"
                  value={passengerFirstname}
                  onChange={(e) => setPassengerFirstname(e.target.value)}
                  name="firstname"
                />
              </div>
              <div className={styleLocation.containerInput}>
                <p>Numéro de téléphone</p>
                <input
                  className={styleLocation.inputPlace}
                  type="text"
                  value={passengerPhoneNumber}
                  onChange={(e) => setPassengerPhoneNumber(e.target.value)}
                  name="tel"
                />
              </div>
              <div className={styleLocation.containerInput}>
                <p>Adresse mail</p>
                <input
                  className={styleLocation.inputPlace}
                  type="text"
                  value={passengerMail}
                  onChange={(e) => setPassengerMail(e.target.value)}
                  name="mail"
                />
              </div>
              <button
                onClick={sendEmailCourse}
                type="submit"
                className={styleLocation.btnRecap}
              >
                Valider mes informations
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
