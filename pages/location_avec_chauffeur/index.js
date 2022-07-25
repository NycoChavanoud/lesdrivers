import Layout from "../../components/Layout";
import TypeVehiculeCard from "../../components/TypeVehiculeCard";
import styleLocation from "../../styles/LocaAvecChauffeur.module.css";
import React, { useState, useRef } from "react";
import axios from "axios";
import ConfirmationLoca from "../../components/ConfirmationLoca.js";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import Autocompletion from "../../components/Autocompletion";

export default function LocationAvecChauffeur() {
  const [selectedItem, setSelectedItem] = useState("Berline");
  const [buttonHandle, setButtonHandle] = useState(false);

  const [passengerName, setPassengerName] = useState("");
  const [passengerFirstname, setPassengerFirstname] = useState("");
  const [passengerMail, setPassengerMail] = useState("");
  const [passengerPhoneNumber, setPassengerPhoneNumber] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(true);
  const [showMain, setShowMain] = useState(true);
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
  const [departureOfDate, setDepartureOfDate] = useState("2022-08-02");
  const [departureOfTime, setDepartureOfTime] = useState("10:00");
  const [numberOfPassengers, setNumberOfPassengers] = useState(0);
  let [hourNumber, setHourNumber] = useState("1");

  console.log(numberOfPassengers);

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
        numberOfHour: hourNumber,
      })
      .catch((err) => {
        console.error(err);
      });
  };
  let price = Math.round(hourNumber * 55);

  if (selectedItem === "Berline") price = Math.round(hourNumber * 55);

  if (selectedItem === "Hybride électrique")
    price = Math.round(hourNumber * 65);
  if (selectedItem === "Mini-bus") price = Math.round(hourNumber * 100);
  if (selectedItem === "Van") price = Math.round(hourNumber * 75);

  const form = useRef();

  const sendEmailLoca = (e) => {
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
                <Autocompletion
                  type="input"
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
                <div className={styleLocation.containerForfait}>
                  <p className={styleLocation.sectionTitle}>
                    Forfait horaire souhaité
                  </p>
                  <div className={styleLocation.containerButton}>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={hourNumber}
                      onChange={(e) => setHourNumber(e.target.value)}
                    />
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
                    Réserver <div>{price}€</div>
                  </button>
                </div>
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
          <form
            ref={form}
            onSubmit={sendEmailLoca}
            className={styleLocation.containerRecapOnForm}
          >
            <ConfirmationLoca
              dataDepart={departureAdress}
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
