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

  // all behind is useful for fetch data

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
    console.log("c'est envoyé");
  };

  const [latitude, setLatitude] = useState([""]);
  const [longitude, setLongitude] = useState([""]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadAddress = async () => {
      if (text.length > 6) {
        const response = await axios.get(
          `/api/autocomplete/?address=${encodeURIComponent(text)}`
        );
        setSuggestions(response.data.features);
        setLatitude(response.data.features[0].geometry.coordinates[1]);
        setLongitude(response.data.features[0].geometry.coordinates[0]);
      }
    };
    loadAddress();
  }, [text]);
  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
    setLatitude([""]);
    setLongitude([""]);
  };

  const [distance, setDistance] = useState("");
  const aeroportCoordinates = "45.7220,5.0753";
  useEffect(() => {
    const loadDistance = async () => {
      const response = await axios.get(
        `https://maps.open-street.com/api/route/?origin=${latitude},${longitude}&destination=${aeroportCoordinates}&mode=driving&key=b3a2ba39c14fa86f221d83a472f6b281`
      );
      setDistance(response.data.total_distance);
    };
    loadDistance();
  }, [latitude, longitude]);

  let price = Math.round((distance / 1000) * 1.8);

  if (
    parseFloat(departureOfTime) > parseFloat("21:00") ||
    parseFloat(departureOfTime) < parseFloat("6:00")
  )
    price = Math.round(price * 1.15);

  // if (vehicule === "berline-luxe") price = Math.round((distance / 1000) * 2.2);
  // if (vehicule === "mini-van") price = Math.round((distance / 1000) * 2.2);
  // if (vehicule === "van") price = Math.round((distance / 1000) * 2.7);
  // if (vehicule === "van-luxe") price = Math.round((distance / 1000) * 3.2);

  const setTextAndDepartureAddress = (address) => {
    setText(address);
    setDepartureAdress(address);
  };

  const setTextAndArrivalAddress = (address) => {
    setText(address);
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
                      className={styleLocation.inputPlace}
                      type="text"
                      value={text}
                      onChange={(e) =>
                        setTextAndDepartureAddress(e.target.value)
                      }
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
                              style={{ marginTop: 12, width: 400 }}
                              onClick={() =>
                                onSuggestHandler(i.properties.label)
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
                      className={styleLocation.inputPlace}
                      type="text"
                      value={text}
                      onChange={(e) => setTextAndArrivalAddress(e.target.value)}
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
                              style={{ marginTop: 12, width: 400 }}
                              onClick={() =>
                                onSuggestHandler(i.properties.label)
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
                        (handlefunctionButton, fetchData, handleCreateCourse)
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
        </div>
      </Layout>
      <div>{price}</div>
    </>
  );
}
