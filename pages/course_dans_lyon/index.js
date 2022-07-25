import Layout from "../../components/Layout";
import TypeVehiculeCard from "../../components/TypeVehiculeCard";
import styleLocation from "../../styles/LocaAvecChauffeur.module.css";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

import ConfirmationCourse from "../../components/ConfirmationCourse";

export default function CoursedansLyon() {
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

  const goAccueil = (e) => {
    e.preventDefault();
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
    e.preventDefault();

    emailjs.sendForm(
      "service_hwrw8hn",
      "template_k8q0koh",
      form.current,
      "AUafpo6N2PVFopqgz"
    );
    //.then(() => router.push("/"));
  };

  const [latitudeDepart, setLatitudeDepart] = useState([""]);
  const [longitudeDepart, setLongitudeDepart] = useState([""]);
  const [textDepart, setTextDepart] = useState("");
  const [departSuggestions, setDepartSuggestions] = useState([]);
  const [latitudeArrivee, setLatitudeArrivee] = useState([""]);
  const [longitudeArrivee, setLongitudeArrivee] = useState([""]);
  const [textArrivee, setTextArrivee] = useState("");
  const [arriveeSuggestions, setArriveeSuggestions] = useState([]);
  useEffect(() => {
    const loadAddressDepart = async () => {
      if (textDepart.length > 10) {
        const response = await axios.get(
          `/api/autocomplete/?address=${encodeURIComponent(textDepart)}`
        );
        setDepartSuggestions(response.data.features);
        setLatitudeDepart(response.data.features[0].geometry.coordinates[1]);
        setLongitudeDepart(response.data.features[0].geometry.coordinates[0]);
      }
    };
    loadAddressDepart();
  }, [textDepart, departureAdress]);
  const departureOnSuggestHandler = (textDepart) => {
    setDepartSuggestions([]);
    setTextDepart(textDepart);
  };

  useEffect(() => {
    const loadAddressArrivee = async () => {
      if (textArrivee.length > 10) {
        const response = await axios.get(
          `/api/autocomplete/?address=${encodeURIComponent(textArrivee)}`
        );
        setArriveeSuggestions(response.data.features);
        setLatitudeArrivee(response.data.features[0].geometry.coordinates[1]);
        setLongitudeArrivee(response.data.features[0].geometry.coordinates[0]);
      }
    };
    loadAddressArrivee();
  }, [textArrivee]);
  const arrivalOnSuggestHandler = (textArrivee) => {
    setArriveeSuggestions([]);
    setTextArrivee(textArrivee);
  };

  const [distance, setDistance] = useState("");
  useEffect(() => {
    const loadDistance = async () => {
      const response = await axios.get(
        `https://maps.open-street.com/api/route/?origin=${latitudeDepart},${longitudeDepart}&destination=${latitudeArrivee},${longitudeArrivee}&mode=driving&key=b3a2ba39c14fa86f221d83a472f6b281`
      );
      setDistance(response.data.total_distance);
    };
    loadDistance();
  }, [latitudeDepart, longitudeDepart, latitudeArrivee, longitudeArrivee]);

  let price = Math.round((distance / 1000) * 1.8);

  if (selectedItem === "Hybride électrique")
    price = Math.round((distance / 1000) * 2.7);
  if (selectedItem === "Mini-Bus") price = Math.round((distance / 1000) * 3.2);
  if (selectedItem === "Van") price = Math.round((distance / 1000) * 2.7);
  if (selectedItem === "Berline") price = Math.round((distance / 1000) * 1.8);

  if (
    parseFloat(departureOfTime) > parseFloat("21:00") ||
    parseFloat(departureOfTime) < parseFloat("6:00")
  )
    price = Math.round(price * 1.15);

  const setTextAndDepartureAddress = (address) => {
    setTextDepart(address);
    setDepartureAdress(address);
  };

  const setTextAndArrivalAddress = (address) => {
    setTextArrivee(address);
    setArrivalAdress(address);
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
                    required
                    id="Départ"
                    style={{ marginTop: 6, width: 200 }}
                    className={styleLocation.inputPlace}
                    type="text"
                    value={textDepart}
                    onChange={(e) => setTextAndDepartureAddress(e.target.value)}
                    onBlur={() => {
                      setTimeout(() => {
                        setDepartSuggestions([]);
                      }, 100);
                    }}
                  />
                  <div>
                    {departSuggestions.map((i, index) => {
                      return (
                        <div key={index}>
                          <div
                            type="button"
                            style={{ marginTop: 6, width: 200 }}
                            onClick={() =>
                              departureOnSuggestHandler(i.properties.label)
                            }
                          >
                            {i.properties.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styleLocation.containerInput}>
                  <p>Arrivée</p>
                  <input
                    required
                    id="Arrivée"
                    style={{ marginTop: 6, width: 200 }}
                    className={styleLocation.inputPlace}
                    type="text"
                    value={textArrivee}
                    onChange={(e) => setTextAndArrivalAddress(e.target.value)}
                    onBlur={() => {
                      setTimeout(() => {
                        setArriveeSuggestions([]);
                      }, 100);
                    }}
                  />
                  <div>
                    {arriveeSuggestions.map((i, index) => {
                      return (
                        <div key={index}>
                          <div
                            type="button"
                            style={{ marginTop: 6, width: 200 }}
                            onClick={() =>
                              arrivalOnSuggestHandler(i.properties.label)
                            }
                          >
                            {i.properties.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
                  <div className={styleLocation.containerTime}>
                    <p>
                      Je souhaite réserver mon chauffeur à{" "}
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
                        vehiculeName={"Mini-Bus"}
                        handlefunction={() => setSelectedItem("Mini-Bus")}
                        classContainer={
                          selectedItem === "Mini-Bus"
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
                        required
                        type="number"
                        min="1"
                        max="500"
                        className={styleLocation.inputNbrPeople}
                        value={numberOfPassengers}
                        onChange={(e) => setNumberOfPassengers(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styleLocation.containerEndingButton}>
                    <div className={styleLocation.buttonPrix}>
                      Prix actuel{" "}
                      <div className={styleLocation.buttonPrixData}>
                        {isNaN(price) ? <span>...</span> : price}€
                      </div>
                    </div>
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
