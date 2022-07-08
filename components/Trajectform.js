import styleTransfert from "../styles/TransfertAeroport.module.css";
import imgButt1 from "../public/images/plane.png";
import imgButt2 from "../public/images/airport.png";
import React, { useState } from "react";
import Image from "next/image";
import TrajectFormDetails from "./TrajectFormDetails.js";

export default function Trajectform() {
  const [goAirport, setGoAirport] = useState(false);
  const [leaveAirport, setLeaveAirport] = useState(false);
  const [itenarychoice, setItenarychoice] = useState(true);

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
      </div>
    </div>
  );
}
