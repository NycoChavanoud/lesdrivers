import styleTransfert from "../styles/TransfertAeroport.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TrajectFormDetails({
  originAdressDefault = "",
  destinationAdressDefault = "",
}) {
  const [originAdress, setOriginAdress] = useState(originAdressDefault);
  const [destinationAdress, setDestinationAdress] = useState(
    destinationAdressDefault
  );
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [numberPassengers, setNumberPassengers] = useState("0");
  const [numberLuggages, setNumberLuggages] = useState("0");
  const [vehicule, setVehicule] = useState("");
  const [siegeBebe, setSiegeBebe] = useState(false);
  const [rehausseur, setRehausseur] = useState(false);
  const [porteSki, setPorteSki] = useState(false);

  let isNumFlightRequired = true;

  const changeRequiredNumFlight = (destination) => {
    if (destination === "Airport") {
      isNumFlightRequired = true;
    } else if (destination === "Train") {
      isNumFlightRequired = false;
    }
  };

  const changeDestinationAdress = (newDestination) => {
    setDestinationAdress(newDestination);
    changeRequiredNumFlight(newDestination);
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
  console.log(latitude);
  console.log(longitude);
  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
    setLatitude([""]);
    setLongitude([""]);
  };

  console.log(suggestions);
  console.log(originAdress);

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
  console.log(distance);

  let price = Math.round((distance / 1000) * 1.8);

  if (departureTime > "21:00" || departureTime < "6:00")
    price = Math.round(price * 1.15);

  return (
    <>
      <div className={styleTransfert.InputDeparturePlace}>
        <label className={styleTransfert.label}>Lieu de départ</label>
        {originAdressDefault === "originAdressDefaultAirport" ? (
          <select onChange={(e) => setOriginAdress(e.target.value)}>
            <option defaultValue value="Airport">
              Aéroport Lyon-Saint Exupéry
            </option>
            <option value="Train">Gare Lyon-Saint Exupéry</option>
          </select>
        ) : (
          <div className="container">
            <input
              className={styleTransfert.InputDepartDate}
              style={{ marginTop: 10, width: 400 }}
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
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
                      className="col-md-12 input"
                      style={{ marginTop: 12, width: 400 }}
                      onClick={() => onSuggestHandler(i.properties.label)}
                    >
                      {i.properties.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className={styleTransfert.InputArrivalPlace}>
        <label className={styleTransfert.label}>Lieu d&apos;arrivée</label>
        {destinationAdressDefault === "destinationAdressDefaultAirport" ? (
          <select onChange={(e) => changeDestinationAdress(e.target.value)}>
            <option defaultValue value="Airport">
              Aéroport Lyon-Saint Exupéry
            </option>
            <option value="Train">Gare Lyon-Saint Exupéry</option>
          </select>
        ) : (
          <input
            type="text"
            placeholder="ex : 14 rue des oliviers, Villeurbanne"
            value={destinationAdress}
            onChange={(e) => setDestinationAdress(e.target.value)}
          />
        )}
      </div>

      <div className={styleTransfert.InputDepartDate}>
        <label className={styleTransfert.label}>Date de départ</label>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <div className={styleTransfert.InputTimeLeave}>
        <label className={styleTransfert.label}>Heure de départ</label>
        <input
          type="time"
          value={departureTime}
          onChange={(e) => setDepartureTime(e.target.value)}
        />
      </div>
      <div className={styleTransfert.InputNumberPerson}>
        <label className={styleTransfert.label}>Nombre de passagers</label>
        <select
          value={numberPassengers}
          onChange={(e) => setNumberPassengers(e.target.value)}
        >
          <option defaultValue value="0">
            -
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="NR">Plus de 10 personnes</option>
        </select>
      </div>
      <div className={styleTransfert.InputNumberLuggage}>
        <label className={styleTransfert.label}>Nombre de bagages</label>
        <select
          value={numberLuggages}
          onChange={(e) => setNumberLuggages(e.target.value)}
        >
          <option defaultValue value="0">
            -
          </option>
          <option value="0 - 2">Entre 0 et 2 bagages</option>
          <option value="2 - 4">Entre 2 et 4 bagages</option>
          <option value="4 - 6">Entre 4 et 6 bagages</option>
          <option value="+ de 6">Plus de 6 bagages</option>
        </select>
      </div>
      <div className={styleTransfert.InputVehiculeType}>
        <label className={styleTransfert.label}>Type de véhicule</label>
        <select value={vehicule} onChange={(e) => setVehicule(e.target.value)}>
          <option defaultValue value="">
            -
          </option>
          <option value="berline">Berline</option>
          <option value="van">Van</option>
          <option value="mini-van">Mini-van</option>
          <option value="car">Car</option>
        </select>
      </div>
      <div className={styleTransfert.InputEquipments}>
        <label className={styleTransfert.label}>Equipements spécifiques</label>
        <div className={styleTransfert.FormInput}>
          <input
            type="checkbox"
            id="siegeBebe"
            checked={siegeBebe}
            onChange={(e) => setSiegeBebe(e.target.checked)}
          />
          <label htmlFor="siegeBebe">Siège bébé</label>
        </div>
        <div className={styleTransfert.FormInput}>
          <input
            type="checkbox"
            id="rehausseur"
            checked={rehausseur}
            onChange={(e) => setRehausseur(e.target.checked)}
          />
          <label htmlFor="rehausseur">Réhausseur</label>
        </div>
        <div className={styleTransfert.FormInput}>
          <input
            type="checkbox"
            id="porteSki"
            checked={porteSki}
            onChange={(e) => setPorteSki(e.target.checked)}
          />
          <label htmlFor="porteSki">Porte-skis</label>
        </div>
      </div>
      <div className={styleTransfert.InputFlightNumber}>
        <label className={styleTransfert.label}>
          N° Vol (obligatoire pour l&rsquo;aéroport)
        </label>
        <input
          type="text"
          placeholder="ex : KE453JR"
          id="numFlight"
          required={isNumFlightRequired}
        />
      </div>
      <div className={styleTransfert.InputSomethingToSay}>
        <label className={styleTransfert.label}>
          Quelque chose à nous spécifier ?
        </label>
        <textarea type="text" />
      </div>
      <div>{price}</div>
    </>
  );
}
