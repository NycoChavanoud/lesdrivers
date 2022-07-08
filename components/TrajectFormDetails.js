import styleTransfert from "../styles/TransfertAeroport.module.css";
import React, { useState } from "react";
import axios from "axios";

export default function TrajectFormDetails({
  originAdressDefault = "",
  destinationAdressDefault = "",
}) {
  const [originAdress, setOriginAdress] = useState(originAdressDefault);
  const [destinationAdress, setDestinationAdress] = useState(
    destinationAdressDefault
  );
  const [departureDate, setDepartureDate] = useState("2023-01-01");
  const [departureTime, setDepartureTime] = useState("12:00");
  const [numberPassengers, setNumberPassengers] = useState(1);
  const [numberLuggages, setNumberLuggages] = useState("0 - 5");
  const [vehicule, setVehicule] = useState("berline");
  const [siegeBebe, setSiegeBebe] = useState(false);
  const [rehausseur, setRehausseur] = useState(false);
  const [porteSki, setPorteSki] = useState(false);
  const [flightNumber, setFlightNumber] = useState("");
  const [somethingToSay, setSomethingToSay] = useState("");

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

  const handleCreateItin = (e) => {
    e.preventDefault();
    axios
      .post(`/api/itineraryAirport`, {
        originAdress,
        destinationAdress,
        departureDate,
        departureTime,
        numberPassengers,
        numberLuggages,
        vehicule,
        siegeBebe,
        rehausseur,
        porteSki,
        flightNumber,
        somethingToSay,
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleCreateItin}>
      <div className={styleTransfert.InputDepartLieu}>
        <label className={styleTransfert.label}>Lieu de départ</label>
        {originAdressDefault === "originAdressDefaultAirport" ? (
          <select onChange={(e) => setOriginAdress(e.target.value)}>
            <option defaultValue value="Airport">
              Aéroport Lyon-Saint Exupéry
            </option>
            <option value="Train">Gare Lyon-Saint Exupéry</option>
          </select>
        ) : (
          <input
            type="text"
            placeholder="ex : 14 rue des oliviers, Villeurbanne"
            value={originAdress}
            onChange={(e) => setOriginAdress(e.target.value)}
            required
          />
        )}
      </div>
      <div className={styleTransfert.InputDepartArrive}>
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
            required
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
        <input
          type="number"
          value={numberPassengers}
          onChange={(e) => setNumberPassengers(parseInt(e.target.value, 10))}
        />
      </div>
      <div className={styleTransfert.InputNumberLuggage}>
        <label className={styleTransfert.label}>Nombre de bagages</label>
        <select
          value={numberLuggages}
          onChange={(e) => setNumberLuggages(e.target.value)}
        >
          <option defaultValue value="0 - 5">
            Entre 0 et 5 bagages
          </option>
          <option value="5 - 10">Entre 5 et 10 bagages</option>
          <option value="10 - 15">Entre 10 et 15 bagages</option>
          <option value="15 - 20">Entre 15 et 20 bagages</option>
        </select>
      </div>
      <div className={styleTransfert.InputVehiculeType}>
        <label className={styleTransfert.label}>Type de véhicule</label>
        <select value={vehicule} onChange={(e) => setVehicule(e.target.value)}>
          <option defaultValue value="berline">
            Berline
          </option>
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
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
        />
      </div>
      <div className={styleTransfert.InputSomethingToSay}>
        <label className={styleTransfert.label}>
          Quelque chose à nous spécifier ?
        </label>
        <textarea
          type="text"
          value={somethingToSay}
          onChange={(e) => setSomethingToSay(e.target.value)}
        />
      </div>
      <button className={styleTransfert.buttonValidate}>
        Valider mes informations
      </button>
    </form>
  );
}
