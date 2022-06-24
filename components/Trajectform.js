import styleTransfert from "../styles/TransfertAeroport.module.css";
import styleTarif from "../styles/Tarif.module.css";
import imgButt1 from "../public/images/plane.png";
import imgButt2 from "../public/images/airport.png";
import React, { useState, useRef } from "react";
import Image from "next/image";
import ProfilForm from "./ProfileForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";
import Link from "next/link";

export default function Trajectform() {
  const [tarifAppear, setTarifAppear] = useState(false);
  const [goAirport, setGoAirport] = useState(false);
  const [leaveAirport, setLeaveAirport] = useState(false);
  const [itenarychoice, setItenarychoice] = useState(true);
  const { currentUserProfile } = useContext(CurrentUserContext);

  const tarifSection = useRef();

  const goToTarif = () => {
    tarifSection.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const AppearTarif = () => {
    setTarifAppear(true);
    goToTarif();
  };

  const ToggleButton = () => {
    itenarychoice ? setItenarychoice(false) : setItenarychoice(true);
  };

  const AppearGoAirport = () => {
    goAirport ? setGoAirport(false) : setGoAirport(true);
    ToggleButton();
  };

  const AppearLeaveAirport = () => {
    leaveAirport ? setLeaveAirport(false) : setLeaveAirport(true);
    ToggleButton();
  };
  return (
    <div className={styleTransfert.trajectFormContainer}>
      <h3 className={styleTransfert.titleForm}>Votre trajet</h3>
      {/* Ensemble button */}
      <div className={styleTransfert.buttonContainer}>
        <div
          className={
            itenarychoice ? styleTransfert.buttonOn : styleTransfert.buttonOff
          }
        >
          <div className={styleTransfert.ButtForm} onClick={AppearGoAirport}>
            <p className={styleTransfert.titleButton}>
              Je vais à l{"'"}aéroport
            </p>
            <Image
              src={imgButt1}
              alt="Picture of the author"
              width={60}
              height={40}
            />
          </div>
          <div className={styleTransfert.ButtForm} onClick={AppearLeaveAirport}>
            <p className={styleTransfert.titleButton}>
              Je pars de l{"'"}aéroport
            </p>
            <Image
              src={imgButt2}
              alt="Picture of the author"
              width={60}
              height={40}
            />
          </div>
        </div>
      </div>
      {/* Go Airport*/}
      <div
        className={
          goAirport ? styleTransfert.goAirportOn : styleTransfert.goAirportOff
        }
      >
        <div className={styleTransfert.InputDepartLieu}>
          <label className={styleTransfert.label}>Lieu de départ</label>
          <input
            type="text"
            placeholder="ex : 14 rue des oliviers, Villeurbanne"
          ></input>
        </div>
        <div className={styleTransfert.InputDepartArrive}>
          <label className={styleTransfert.label}>Lieu d{"'"}arrivée</label>
          <select>
            <option defaultValue value="aeroport">
              Aéroport Lyon-Saint Exupéry
            </option>
            <option value="gare">Gare Lyon-Saint Exupéry</option>
          </select>
        </div>
        <div className={styleTransfert.InputDepartDate}>
          <label className={styleTransfert.label}>Date de départ</label>
          <input type="date" placeholder="ex : jj/mm/aaaa"></input>
        </div>
        <div className={styleTransfert.InputTimeLeave}>
          <label className={styleTransfert.label}>Heure de départ</label>
          <input type="time" placeholder="ex : 14h40"></input>
        </div>
        <div className={styleTransfert.InputNumberPerson}>
          <label className={styleTransfert.label}>Nombre de personnes</label>
          <select>
            <option defaultValue value="nothing">
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
          <select>
            <option defaultValue value="nothing">
              -
            </option>
            <option value="0 - 5">Entre 0 et 5 bagages</option>
            <option value="5 - 10">Entre 5 et 10 bagages</option>
            <option value="10 - 15">Entre 10 et 15 bagages</option>
            <option value="15 - 20">Entre 15 et 20 bagages</option>
          </select>
        </div>
        <div className={styleTransfert.InputVehiculeType}>
          <label className={styleTransfert.label}>Type de véhicule</label>
          <select>
            <option defaultValue value="nothing">
              -
            </option>
            <option value="berline">Berline</option>
            <option value="van">Van</option>
            <option value="mini-van">Mini-van</option>
            <option value="car">Car</option>
          </select>
        </div>
        <div className={styleTransfert.InputEquipments}>
          <label className={styleTransfert.label}>
            Equipements spécifiques
          </label>
          <div className={styleTransfert.FormInput}>
            <input type="checkbox" />
            <label>Siège bébé</label>
          </div>
          <div className={styleTransfert.FormInput}>
            <input type="checkbox" />
            <label>Réhausseur</label>
          </div>
          <div className={styleTransfert.FormInput}>
            <input type="checkbox" />
            <label>Porte-skis</label>
          </div>
        </div>
        <div className={styleTransfert.InputFlightNumber}>
          <label className={styleTransfert.label}>N° Vol (obligatoire)</label>
          <input type="text" placeholder="ex : KE453JR" required></input>
        </div>
        <div className={styleTransfert.InputSomethingToSay}>
          <label className={styleTransfert.label}>
            Quelque chose à nous spécifier ?
          </label>
          <textarea type="text" />
        </div>
        <button className={styleTransfert.buttonValidate} onClick={AppearTarif}>
          Valider mes informations
        </button>

        <div
          className={
            tarifAppear ? styleTransfert.tarifOn : styleTransfert.tarifOff
          }
        >
          <div className={styleTarif.tarifContainer}>
            <p className={styleTarif.title}>TARIF</p>
            <div className={styleTarif.stroke} />
            <div className={styleTarif.yellowRound} />
            <div className={styleTarif.price}>30 €</div>
          </div>
          <div className={styleTransfert.profile}>
            {currentUserProfile ? (
              <>
                <h3 className={styleTransfert.titleForm}>
                  Vérifier les informations issues de votre compte, puis valider
                  pour réserver :
                </h3>
                <ProfilForm
                  firstNameDefault={currentUserProfile.firstname}
                  lastnameDefault={currentUserProfile.lastname}
                  emailDefault={currentUserProfile.email}
                  phoneNumberDefault={currentUserProfile.phoneNumber}
                  adressDefault={currentUserProfile.address}
                  societyDefault={currentUserProfile.society}
                />
              </>
            ) : (
              <>
                <h3 className={styleTransfert.titleForm}>
                  Pour réserver, vous pouvez vous{" "}
                  <Link href="/login" passHref>
                    connecter à un compte existant
                  </Link>
                  , créer un nouveau compte, ou directement renseigner les
                  informations suivantes:
                </h3>
                <h1>Se connecter</h1>
                <button type="button"></button>
                <h1>Voulez-vous créer un compte ?</h1>
                <button type="button">
                  <Link href="/signup" passHref>
                    S&rsquo;inscrire
                  </Link>
                </button>
                <h1>Continuer sans compte</h1>
                <ProfilForm />
              </>
            )}
            <button className={styleTarif.buttonResa}>Réserver</button>
          </div>
        </div>
      </div>
      {/* Leave Airport*/}
      <div
        className={
          leaveAirport
            ? styleTransfert.leaveAirportOn
            : styleTransfert.leaveAirportOff
        }
      >
        <div className={styleTransfert.InputDepartDate}>
          <label className={styleTransfert.label}>Date de départ</label>
          <input type="text" placeholder="ex : jj/mm/aaaa"></input>
        </div>
        <div className={styleTransfert.InputDepartLieu}>
          <label className={styleTransfert.label}>Lieu de départ</label>
          <select>
            <option defaultValue value="aeroport">
              Aéroport Lyon-Saint Exupéry
            </option>
            <option value="gare">Gare Lyon-Saint Exupéry</option>
          </select>
        </div>
        <div className={styleTransfert.InputDepartArrive}>
          <label className={styleTransfert.label}>Lieu d{"'"}arrivée</label>
          <input
            type="text"
            placeholder="ex : 14 rue des oliviers, Villeurbanne"
          ></input>
        </div>
        <div className={styleTransfert.InputTimeLeave}>
          <label className={styleTransfert.label}>Heure de départ</label>
          <input type="text" placeholder="ex : 14h40"></input>
        </div>
        <div className={styleTransfert.InputNumberPerson}>
          <label className={styleTransfert.label}>Nombre de personnes</label>
          <select>
            <option defaultValue value="nothing">
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
          <select>
            <option defaultValue value="nothing">
              -
            </option>
            <option value="0 - 5">Entre 0 et 5 bagages</option>
            <option value="5 - 10">Entre 5 et 10 bagages</option>
            <option value="10 - 15">Entre 10 et 15 bagages</option>
            <option value="15 - 20">Entre 15 et 20 bagages</option>
          </select>
        </div>
        <div className={styleTransfert.InputVehiculeType}>
          <label className={styleTransfert.label}>Type de véhicule</label>
          <select>
            <option defaultValue value="nothing">
              -
            </option>
            <option value="berline">Berline</option>
            <option value="van">Van</option>
            <option value="mini-van">Mini-van</option>
            <option value="car">Car</option>
          </select>
        </div>
        <div className={styleTransfert.InputEquipments}>
          <label className={styleTransfert.label}>
            Equipements spécifiques
          </label>
          <div className={styleTransfert.FormInput}>
            <input type="checkbox" />
            <label>Siège bébé</label>
          </div>
          <div className={styleTransfert.FormInput}>
            <input type="checkbox" />
            <label>Réhausseur</label>
          </div>
          <div className={styleTransfert.FormInput}>
            <input type="checkbox" />
            <label>Porte-skis</label>
          </div>
        </div>
        <div className={styleTransfert.InputFlightNumber}>
          <label className={styleTransfert.label}>N° Vol (obligatoire)</label>
          <input type="text" placeholder="ex : KE453JR" required></input>
        </div>
        <div className={styleTransfert.InputSomethingToSay}>
          <label className={styleTransfert.label}>
            Quelque chose à nous spécifier ?
          </label>
          <textarea type="text" />
        </div>
        <button className={styleTransfert.buttonValidate} onClick={AppearTarif}>
          Valider mes informations
        </button>
        <div
          className={
            tarifAppear ? styleTransfert.tarifOn : styleTransfert.tarifOff
          }
        >
          <div className={styleTarif.tarifContainer}>
            <p className={styleTarif.title}>TARIF</p>
            <div className={styleTarif.stroke} />
            <div className={styleTarif.yellowRound} />
            <div className={styleTarif.price}>30 €</div>
            <button className={styleTarif.buttonResa}>Réserver</button>
          </div>
        </div>
      </div>
      <span ref={tarifSection} />
    </div>
  );
}
