import styleTransfert from "../styles/TransfertAeroport.module.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import RecapItinerary from "./RecapItinerary";
import styleTarif from "../styles/Tarif.module.css";
import ProfilForm from "./ProfileForm";
import Link from "next/link";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

export default function TrajectFormDetails({
  originAdressDefault = "",
  destinationAdressDefault = "",
}) {
  const [tarifAppear, setTarifAppear] = useState(false);
  const { currentUserProfile } = useContext(CurrentUserContext);
  const tarifSection = useRef();
  const [distance, setDistance] = useState("");
  const aeroportCoordinates = "45.7220,5.0753";

  const goToTarif = () => {
    tarifSection.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const AppearTarif = () => {
    const loadDistance = async () => {
      const response = await axios.get(
        `https://maps.open-street.com/api/route/?origin=${latitude},${longitude}&destination=${aeroportCoordinates}&mode=driving&key=b3a2ba39c14fa86f221d83a472f6b281`
      );
      setDistance(response.data.total_distance);
    };
    loadDistance();
    setTarifAppear(true);
    goToTarif();
  };
  const [originAdress, setOriginAdress] = useState("");
  const [destinationAdress, setDestinationAdress] = useState(
    destinationAdressDefault
  );

  useEffect(() => {
    if (originAdressDefault === "originAdressDefaultAirport") {
      setOriginAdress("Aéroport Lyon-Saint Exupéry");
    }
  }, [originAdressDefault]);

  useEffect(() => {
    if (destinationAdressDefault === "destinationAdressDefaultAirport") {
      setDestinationAdress("Aéroport Lyon-Saint Exupéry");
    }
  }, [destinationAdressDefault]);

  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [numberPassengers, setNumberPassengers] = useState(1);
  const [numberLuggages, setNumberLuggages] = useState("0");
  const [vehicule, setVehicule] = useState("Berline");
  const [siegeBebe, setSiegeBebe] = useState(false);
  const [rehausseur, setRehausseur] = useState(false);
  const [porteSki, setPorteSki] = useState(false);
  const [flightNumber, setFlightNumber] = useState("");
  const [somethingToSay, setSomethingToSay] = useState("");

  let isNumFlightRequired = true;

  const changeRequiredNumFlight = (destination) => {
    if (destination === "Aéroport Lyon-Saint Exupéry") {
      isNumFlightRequired = true;
    } else if (destination === "Gare Lyon-Saint Exupéry") {
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
  const setTextAndOriginAdress = async (address) => {
    setText(address);
    setOriginAdress(address);
    if (text.length > 6) {
      const response = await axios.get(
        `/api/autocomplete/?address=${encodeURIComponent(text)}`
      );
      setSuggestions(response.data.features);
      setLatitude(response.data.features[0].geometry.coordinates[1]);
      setLongitude(response.data.features[0].geometry.coordinates[0]);
    }
  };

  const setTextAndDestinationAdress = async (address) => {
    setText(address);
    setDestinationAdress(address);
    if (text.length > 6) {
      const response = await axios.get(
        `/api/autocomplete/?address=${encodeURIComponent(text)}`
      );
      setSuggestions(response.data.features);
      setLatitude(response.data.features[0].geometry.coordinates[1]);
      setLongitude(response.data.features[0].geometry.coordinates[0]);
    }
  };
  const onSuggestHandler = (text) => {
    setSuggestions([]);
    setText(text);
  };
  let price = Math.round((distance / 1000) * 1.8);

  if (
    parseFloat(departureTime) > parseFloat("21:00") ||
    parseFloat(departureTime) < parseFloat("6:00")
  )
    price = Math.round(price * 1.15);

  if (vehicule === "berline-luxe") price = Math.round((distance / 1000) * 2.2);
  if (vehicule === "mini-van") price = Math.round((distance / 1000) * 2.2);
  if (vehicule === "van") price = Math.round((distance / 1000) * 2.7);
  if (vehicule === "van-luxe") price = Math.round((distance / 1000) * 3.2);

  if (originAdressDefault === "originAdressDefaultAirport") price = price + 5;

  const handleCreateItin = (e) => {
    e.preventDefault();
    AppearTarif();
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleCreateItin}
          className={
            tarifAppear ? styleTransfert.tarifOff : styleTransfert.tarifOn
          }
        >
          <div className={styleTransfert.containerAddress}>
            <div className={styleTransfert.InputDepartLieu}>
              <label className={styleTransfert.label}>Lieu de départ</label>
              {originAdressDefault === "originAdressDefaultAirport" ? (
                <select
                  onChange={(e) => setOriginAdress(e.target.value)}
                  className={styleTransfert.borderRadius}
                >
                  <option defaultValue value="Aéroport Lyon-Saint Exupéry">
                    Aéroport Lyon-Saint Exupéry
                  </option>
                  <option value="Gare Lyon-Saint Exupéry">
                    Gare Lyon-Saint Exupéry
                  </option>
                </select>
              ) : (
                <>
                  <input
                    className={styleTransfert.borderRadius}
                    type="text"
                    placeholder="ex : 14 rue des oliviers Villeurbanne"
                    onChange={(e) => setTextAndOriginAdress(e.target.value)}
                    value={text}
                    required
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
                            onClick={() => onSuggestHandler(i.properties.label)}
                          >
                            {i.properties.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
            <div className={styleTransfert.InputDepartArrive}>
              <label className={styleTransfert.label}>
                Lieu d&apos;arrivée
              </label>
              {destinationAdressDefault ===
              "destinationAdressDefaultAirport" ? (
                <select
                  onChange={(e) => changeDestinationAdress(e.target.value)}
                  className={styleTransfert.borderRadius}
                >
                  <option defaultValue value="Aéroport Lyon-Saint Exupéry">
                    Aéroport Lyon-Saint Exupéry
                  </option>
                  <option value="Gare Lyon-Saint Exupéry">
                    Gare Lyon-Saint Exupéry
                  </option>
                </select>
              ) : (
                <>
                  <input
                    className={styleTransfert.borderRadius}
                    type="text"
                    placeholder="ex : 14 rue des oliviers Villeurbanne"
                    onChange={(e) =>
                      setTextAndDestinationAdress(e.target.value)
                    }
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
                            style={{ marginTop: 12, width: 400 }}
                            onClick={() => onSuggestHandler(i.properties.label)}
                          >
                            {i.properties.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={styleTransfert.timeAndDateContainer}>
            <div className={styleTransfert.InputDepartDate}>
              <label className={styleTransfert.label}>Date de départ</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className={styleTransfert.borderRadius}
              />
            </div>
            <div className={styleTransfert.InputTimeLeave}>
              <label className={styleTransfert.label}>Heure de départ</label>
              <input
                type="time"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                className={styleTransfert.borderRadius}
              />
            </div>
            <div className={styleTransfert.InputVehiculeType}>
              <label className={styleTransfert.label}>Type de véhicule</label>
              <select
                value={vehicule}
                onChange={(e) => setVehicule(e.target.value)}
                className={styleTransfert.borderRadius}
              >
                <option defaultValue value="berline">
                  Berline
                </option>
                <option value="berline-luxe">Berline Luxe</option>
                <option value="mini-van">Mini-van</option>
                <option value="van">Van</option>
                <option value="van-luxe">Van Luxe</option>
              </select>
            </div>
          </div>
          <div className={styleTransfert.PersonLuggagesFlightNumberContainer}>
            <div className={styleTransfert.InputNumberPerson}>
              <label className={styleTransfert.label}>
                Nombre de passagers
              </label>
              <input
                type="number"
                value={numberPassengers}
                onChange={(e) =>
                  setNumberPassengers(parseInt(e.target.value, 10))
                }
                className={styleTransfert.borderRadius}
              />
            </div>
            <div className={styleTransfert.InputNumberLuggage}>
              <label className={styleTransfert.label}>Nombre de bagages</label>
              <select
                value={numberLuggages}
                onChange={(e) => setNumberLuggages(e.target.value)}
                className={styleTransfert.borderRadius}
              >
                <option defaultValue value="0 - 2">
                  Entre 0 et 2 bagages
                </option>
                <option value="2 - 4 ">Entre 2 et 4 bagages</option>
                <option value="4 - 6">Entre 4 et 6 bagages</option>
                <option value="+ de 6">Plus de 6 bagages</option>
              </select>
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
                className={styleTransfert.borderRadius}
              />
            </div>
          </div>

          <div className={styleTransfert.InputEquipments}>
            <label className={styleTransfert.label}>
              Equipements spécifiques :
            </label>
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

          <div className={styleTransfert.InputSomethingToSay}>
            <label className={styleTransfert.label}>
              Quelque chose à nous spécifier ?
            </label>
            <textarea
              type="text"
              value={somethingToSay}
              onChange={(e) => setSomethingToSay(e.target.value)}
              className={styleTransfert.borderRadius}
            />
          </div>
          <button className={styleTransfert.buttonValidate}>
            Valider mes informations
          </button>
        </form>{" "}
      </div>
      <div
        className={
          tarifAppear ? styleTransfert.tarifOn : styleTransfert.tarifOff
        }
      >
        <RecapItinerary
          originAdress={originAdress}
          destinationAdress={destinationAdress}
          departureDate={departureDate}
          departureTime={departureTime}
          numberPassengers={numberPassengers}
          numberLuggages={numberLuggages}
          vehicule={vehicule}
          siegeBebe={siegeBebe}
          rehausseur={rehausseur}
          porteSki={porteSki}
          flightNumber={flightNumber}
          somethingToSay={somethingToSay}
        />
        <button
          type="button"
          onClick={() => setTarifAppear()}
          className={styleTransfert.buttonValidate}
        >
          Modifier
        </button>
        <div className={styleTarif.tarifContainer}>
          <p className={styleTarif.title}>Tarif</p>
          <div className={styleTarif.price}>
            {isNaN(price) ? <span>...</span> : price}€
          </div>
        </div>
        <div className={styleTransfert.profile}>
          {currentUserProfile ? (
            <>
              <h3 className={styleTransfert.titleForm}>
                Vérifier les informations issues de votre compte, puis valider
                pour réserver :
              </h3>
              <ProfilForm
                originAdress={originAdress}
                destinationAdress={destinationAdress}
                departureDate={departureDate}
                departureTime={departureTime}
                numberPassengers={numberPassengers}
                numberLuggages={numberLuggages}
                vehicule={vehicule}
                siegeBebe={siegeBebe}
                rehausseur={rehausseur}
                porteSki={porteSki}
                flightNumber={flightNumber}
                somethingToSay={somethingToSay}
                price={price}
              />
            </>
          ) : (
            <>
              <h3 className={styleTransfert.titleForm}>
                Pour réserver, vous pouvez :{" "}
                <ul>
                  <li>
                    <Link href="/login" passHref>
                      <a>vous connecter</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup" passHref>
                      <a>créer un nouveau compte</a>
                    </Link>
                  </li>
                  <li>... ou renseigner vos informations :</li>
                </ul>
              </h3>
              <ProfilForm
                originAdress={originAdress}
                destinationAdress={destinationAdress}
                departureDate={departureDate}
                departureTime={departureTime}
                numberPassengers={numberPassengers}
                numberLuggages={numberLuggages}
                vehicule={vehicule}
                siegeBebe={siegeBebe}
                rehausseur={rehausseur}
                porteSki={porteSki}
                flightNumber={flightNumber}
                somethingToSay={somethingToSay}
                price={price}
              />
            </>
          )}
        </div>
      </div>
      <span ref={tarifSection} />
      <div />
    </>
  );
}
