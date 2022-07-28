import Layout from "../../components/Layout";
import TypeVehiculeCard from "../../components/TypeVehiculeCard";
import styleLocation from "../../styles/LocaAvecChauffeur.module.css";
import React, { useState, useRef } from "react";
import axios from "axios";
import ConfirmationLoca from "../../components/ConfirmationLoca.js";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import PhoneButton from "../../components/PhoneButton.js";

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

  const goAccueil = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const [departureAdress, setDepartureAdress] = useState("");
  const [departureOfDate, setDepartureOfDate] = useState("2022-08-02");
  const [departureOfTime, setDepartureOfTime] = useState("10:00");
  const [numberOfPassengers, setNumberOfPassengers] = useState(0);
  let [hourNumber, setHourNumber] = useState("1");

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
        numberOfHour: parseInt(hourNumber, 10),
        price: parseInt(price, 10),
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
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_FORM_RESERVATIONS,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
  };

  const [suggestions, setSuggestions] = useState([]);
  const onSuggestHandler = async (departureAdress) => {
    setDepartureAdress(departureAdress);
    setSuggestions([]);
  };

  const setTextOriginAdress = async (address) => {
    if (departureAdress.length > 6) {
      const response = await axios.get(
        `/api/autocomplete/?address=${encodeURIComponent(departureAdress)}`
      );
      setDepartureAdress(address);
      setSuggestions(response.data.features);
    }
  };

  return (
    <Layout pageTitle="Les Drivers - Location avec chauffeur">
      <PhoneButton />
      <div className={styleLocation.containerService}>
        <p className={styleLocation.titleloc}>
          Location de véhicule <span>avec chauffeur</span>
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
                <p className={styleLocation.titleInput}>
                  Point de <br />
                  rendez-vous
                </p>
                <div className={styleLocation.containerInputLoca}>
                  <input
                    required
                    type="text"
                    onChange={(e) => setTextOriginAdress(e.target.value)}
                    value={departureAdress}
                    className={styleLocation.inputDepart}
                    onBlur={() => {
                      setTimeout(() => {
                        setSuggestions([]);
                      }, 100);
                    }}
                  />
                  <div>
                    {suggestions.map((i, index) => {
                      return (
                        <div key={index}>
                          <div
                            type="button"
                            className={styleLocation.inputDepartSuggestion}
                            onClick={() => onSuggestHandler(i.properties.label)}
                          >
                            {i.properties.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={styleLocation.containerInput}>
                <p className={styleLocation.titleInput}>Date</p>
                <input
                  required
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
                    required
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
                  {" "}
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
                      required
                      type="number"
                      min="0"
                      max="500"
                      className={styleLocation.inputNbrPeople}
                      value={numberOfPassengers}
                      onChange={(e) => setNumberOfPassengers(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styleLocation.containerHours}>
                  <p className={styleLocation.sectionTitle}>
                    Nombre d{"'"}heures désirées
                  </p>
                  <div className={styleLocation.containerButtonHours}>
                    <div className={styleLocation.imageHours}></div>
                    <input
                      required
                      type="number"
                      min="1"
                      max="10"
                      value={hourNumber}
                      onChange={(e) => setHourNumber(e.target.value)}
                      className={styleLocation.inputHourNumber}
                    />
                  </div>
                </div>
                <div className={styleLocation.containerEndingButton}>
                  <div className={styleLocation.buttonPrix}>
                    Prix actuel{" "}
                    <div name="price" className={styleLocation.buttonPrixData}>
                      {price}€
                    </div>
                  </div>
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
              dataForfait={hourNumber}
              dataPrix={price}
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

                <div className={styleLocation.containerInputUserInfo}>
                  <p>Nom</p>
                  <input
                    className={styleLocation.inputPlace}
                    type="text"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    name="lastname"
                  />
                </div>
                <div className={styleLocation.containerInputUserInfo}>
                  <p>Prénom</p>
                  <input
                    className={styleLocation.inputPlace}
                    type="text"
                    value={passengerFirstname}
                    onChange={(e) => setPassengerFirstname(e.target.value)}
                    name="firstname"
                  />
                </div>
                <div className={styleLocation.containerInputUserInfo}>
                  <p>Numéro de téléphone</p>
                  <input
                    className={styleLocation.inputPlace}
                    type="text"
                    value={passengerPhoneNumber}
                    onChange={(e) => setPassengerPhoneNumber(e.target.value)}
                    name="tel"
                  />
                </div>
                <div className={styleLocation.containerInputUserInfo}>
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
