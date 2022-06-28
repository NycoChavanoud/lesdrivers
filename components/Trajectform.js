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
import TrajectFormDetails from "./TrajectFormDetails.js";

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
    setItenarychoice(!itenarychoice);
  };

  const AppearGoAirport = () => {
    setGoAirport(!goAirport);
    ToggleButton();
  };

  const AppearLeaveAirport = () => {
    setLeaveAirport(!leaveAirport);
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
        <TrajectFormDetails destinationAdressDefault="destinationAdressDefaultAirport" />
        <button className={styleTransfert.buttonValidate} onClick={AppearTarif}>
          Valider mes informations
        </button>
      </div>

      {/* Leave Airport*/}
      <div
        className={
          leaveAirport
            ? styleTransfert.leaveAirportOn
            : styleTransfert.leaveAirportOff
        }
      >
        <TrajectFormDetails originAdressDefault="originAdressDefaultAirport" />
        <button className={styleTransfert.buttonValidate} onClick={AppearTarif}>
          Valider mes informations
        </button>
      </div>

      <div
        className={
          tarifAppear ? styleTransfert.tarifOn : styleTransfert.tarifOff
        }
      >
        <div className={styleTarif.tarifContainer}>
          <p className={styleTarif.title}>TARIF</p>
          <div className={styleTarif.stroke} />
          {/* <div className={styleTarif.yellowRound} /> */}
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
                lastNameDefault={currentUserProfile.lastname}
                emailDefault={currentUserProfile.email}
                phoneNumberDefault={currentUserProfile.phoneNumber}
                adressDefault={currentUserProfile.address}
                societyDefault={currentUserProfile.society}
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
              <ProfilForm />
            </>
          )}
          <button className={styleTransfert.buttonValidate}>Réserver</button>
        </div>
      </div>
      <span ref={tarifSection} />
    </div>
  );
}
