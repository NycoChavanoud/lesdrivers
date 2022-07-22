import Layout from "../../components/Layout";
import TypeVehiculeCard from "../../components/TypeVehiculeCard";
import styleLocation from "../../styles/LocaAvecChauffeur.module.css";
import React, { useState, useRef } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

import ConfirmationCourse from "../../components/ConfirmationCourse";

export default function LocationAvecChauffeur() {
  const [selectedItem, setSelectedItem] = useState("Berline");
  const [buttonHandle, setButtonHandle] = useState(false);

  const [showSent, setShowSent] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(true);

  const handlefunctionSent = () => {
    setShowSent(true);
    setShowUserInfo(false);
  };

  const handlefunctionButton = () => {
    setButtonHandle(true);
  };

  const router = useRouter();

  const goAccueil = () => {
    router.push("/");
  };
  // all behind is useful for fetch data

  const [departureAdress, setDepartureAdress] = useState("");
  const [arrivalAdress, setArrivalAdress] = useState("");
  const [departureOfDate, setDepartureOfDate] = useState("2022-08-02");
  const [departureOfTime, setDepartureOfTime] = useState("10:00");
  const [numberOfPassengers, setNumberOfPassengers] = useState("0");

  const [passengerName, setPassengerName] = useState("");
  const [passengerFirstname, setPassengerFirstname] = useState("");
  const [passengerMail, setPassengerMail] = useState("");
  const [passengerPhoneNumber, setPassengerPhoneNumber] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(true);
  const [showMain, setShowMain] = useState(true);

  const handleCreateCourse = (e) => {
    e.preventDefault();
    setShowConfirmation();
    setShowMain();
    axios
      .post(`/api/courseLyon`, {
        departureAdress: departureAdress,
        arrivalAdress: arrivalAdress,
        departureOfDate: departureOfDate,
        departureOfTime: departureOfTime,
        numberOfPassengers: parseInt(numberOfPassengers, 10),
        vehiculeNeeded: selectedItem,
      })

      .catch((err) => {
        console.error(err);
      });
  };

  const form = useRef();

  const sendEmailCourse = (e) => {
    console.log("ok");
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
    <Layout pageTitle="Les Drivers - Course dans Lyon">
      <div className={styleLocation.containerService}>
        <p className={styleLocation.titlecourse}>
          Course dans Lyon <br />
          <span>et ses alentours</span>
        </p>
        <div
          className={
            showMain
              ? styleLocation.containerSectionOn
              : styleLocation.containerSectionOff
          }
        >
          <div className={styleLocation.containerSectionLeftCourse}>
            Laissez vous conduire, de jour comme de nuit en toute sécurité !
          </div>
          <div className={styleLocation.containerSectionRight}>
            <form>
              <div className={styleLocation.containerForm}>
                <div className={styleLocation.containerInput}>
                  <p>Départ</p>
                  <input
                    className={styleLocation.inputPlace}
                    type="text"
                    value={departureAdress}
                    onChange={(e) => setDepartureAdress(e.target.value)}
                  />
                </div>
                <div className={styleLocation.containerInput}>
                  <p>Arrivée</p>
                  <input
                    className={styleLocation.inputPlace}
                    type="text"
                    value={arrivalAdress}
                    onChange={(e) => setArrivalAdress(e.target.value)}
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
                    Je souhaite réserver mon chauffeur à{" "}
                    <input
                      className={styleLocation.inputTime}
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
                    <TypeVehiculeCard
                      classPicture={styleLocation.vehi1}
                      vehiculeName={"Hybride électrique"}
                      handlefunction={() =>
                        setSelectedItem("Hybride électrique")
                      }
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
                    Attention ! Merci de prendre en compte la capacité du
                    véhicule suivant le nombre de personnes présente lors du
                    trajet
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
                <div className={styleLocation.containerEndingButton}>
                  <button
                    onClick={
                      (handlefunctionButton,
                      setShowConfirmation,
                      setShowMain,
                      handleCreateCourse)
                    }
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
            </form>
          </div>
        </div>
        <div
          className={
            showConfirmation
              ? styleLocation.containerRecapOff
              : styleLocation.containerRecapOn
          }
        >
          <form
            ref={form}
            onSubmit={sendEmailCourse}
            className={styleLocation.containerRecapOnForm}
          >
            <ConfirmationCourse
              dataDepart={departureAdress}
              dataArrive={arrivalAdress}
              dataDate={departureOfDate}
              dataTime={departureOfTime}
              dataVehicule={selectedItem}
              dataNbrPeople={numberOfPassengers}
            />
            <div className={styleLocation.containerUserInfo}>
              <div
                className={
                  showUserInfo
                    ? styleLocation.containerFormUserInfoOn
                    : styleLocation.containerFormUserInfoOff
                }
              >
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
                  onClick={handlefunctionSent}
                  type="submit"
                  className={styleLocation.btnRecap}
                >
                  Valider mes informations
                </button>
              </div>
              <div
                className={
                  showSent
                    ? styleLocation.alertMessageOn
                    : styleLocation.alertMessageOff
                }
              >
                <div className={styleLocation.send}>
                  <div className={styleLocation.sendImg}></div>
                  <p className={styleLocation.sendtitle}>
                    Votre message à été envoyé !
                  </p>
                  <p className={styleLocation.sendsubtitle}>
                    Notre équipe à bien reçu votre mail et nous nous engageons à
                    vous répondre dans les plus brefs délais !
                  </p>
                  <button
                    className={styleLocation.sendbutton}
                    onClick={goAccueil}
                  >
                    Retour à l{"'"}accueil
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
