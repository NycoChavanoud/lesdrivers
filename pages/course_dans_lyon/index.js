import Layout from "../../components/Layout";
import TypeVehiculeCard from "../../components/TypeVehiculeCard";
import styleLocation from "../../styles/LocaAvecChauffeur.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function LocationAvecChauffeur() {
  const [selectedItem, setSelectedItem] = useState("Berline");
  const [buttonHandle, setButtonHandle] = useState(false);
  const handlefunctionButton = () => {
    setButtonHandle(true);
  };

  const [departureAdress, setDepartureAdress] = useState("");
  const [arrivalAdress, setArrivalAdress] = useState("");
  const [departureOfDate, setDepartureOfDate] = useState("2022-08-02");
  const [departureOfTime, setDepartureOfTime] = useState("10:00");
  const [numberOfPassengers, setNumberOfPassengers] = useState("0");

  const router = useRouter();

  const handleCreateCourse = (e) => {
    e.preventDefault();
    axios
      .post(`/api/courseLyon`, {
        departureAdress: departureAdress,
        arrivalAdress: arrivalAdress,
        departureOfDate: departureOfDate,
        departureOfTime: departureOfTime,
        numberOfPassengers: parseInt(numberOfPassengers, 10),
        vehiculeNeeded: selectedItem,
      })
      .then(() => router.push("/"))
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchData = (e) => {
    e.preventDefault();
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
      if (textDepart.length > 6) {
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
      if (textArrivee.length > 6) {
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
    <>
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
              <form>
                <div className={styleLocation.containerForm}>
                  <div className={styleLocation.containerInput}>
                    <p>Départ</p>
                    <input
                      id="Départ"
                      style={{ marginTop: 6, width: 200 }}
                      className={styleLocation.inputPlace}
                      type="text"
                      value={textDepart}
                      onChange={(e) =>
                        setTextAndDepartureAddress(e.target.value)
                      }
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
                        (handlefunctionButton, fetchData, handleCreateCourse)
                      }
                      className={
                        buttonHandle
                          ? styleLocation.buttonActive
                          : styleLocation.buttonNormal
                      }
                    >
                      Réserver{" "}
                      <div>{isNaN(price) ? <span>...</span> : price}€</div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
