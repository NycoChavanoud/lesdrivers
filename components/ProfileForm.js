import styleTransfert from "../styles/TransfertAeroport.module.css";
import style from "../styles/signup.module.css";
import Image from "next/image";
import emailPicture from "../public/images/input_email.png";
import profilePicture from "../public/images/input_profil.png";
import phonePicture from "../public/images/input_phone.png";
import adressPicture from "../public/images/input_adress.png";
import societyPicture from "../public/images/input_society.png";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useState } from "react";

export default function ProfilForm({
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
  price,
}) {
  const router = useRouter();
  const { currentUserProfile } = useContext(CurrentUserContext);

  const [isResaSent, setIsResaSent] = useState(false);

  const [firstname, setFirstname] = useState(
    currentUserProfile?.firstname || ""
  );
  const [lastname, setLastname] = useState(currentUserProfile?.lastname || "");
  const [email, setEmail] = useState(currentUserProfile?.email || "");
  const [address, setAddress] = useState(currentUserProfile?.address || "");
  const [phoneNumber, setPhoneNumber] = useState(
    currentUserProfile?.phoneNumber || ""
  );
  const [society, setSociety] = useState(currentUserProfile?.society || "");

  const templateParams = {
    dataDepartCourse: originAdress,
    dataArriveCourse: destinationAdress,
    dataDateCourse: departureDate,
    dataTimeCourse: departureTime,
    dataNbrPeopleCourse: numberPassengers,
    numberLuggages: numberLuggages,
    dataVehiculeCourse: vehicule,
    siegeBebe: siegeBebe,
    rehausseur: rehausseur,
    porteSki: porteSki,
    flightNumber: flightNumber,
    somethingToSay: somethingToSay,
    price: price,
    firstname: firstname,
    lastname: lastname,
    tel: phoneNumber,
    mail: email,
    postalAdressClient: address,
    societyClient: society,
  };

  const sendReservation = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_FORM_RESERVATIONS,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        function (response) {
          console.log("EMAILJS SUCCESS", response.status, response.text);
          setIsResaSent(true);
          setTimeout(() => {
            router.push("/");
          }, 2000);
        },
        function (error) {
          console.log("EMAILJS FAILED...", error);
        }
      );
  };
  return (
    <form className={style.signUpForm} onSubmit={sendReservation}>
      <div className={style.inputDivWith2InputsContainer}>
        <div className={style.inputDivWith2Inputs}>
          <label htmlFor="firstname">
            <Image src={profilePicture} alt="Prénom" />
          </label>
          <input
            required
            type="text"
            id="firstname"
            data-cy="firstname"
            value={firstname}
            placeholder="Prénom (*)"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className={style.border} />
        <div className={style.inputDivWith2Inputs}>
          <label htmlFor="lastname"></label>
          <input
            required
            type="text"
            id="lastname"
            data-cy="lastname"
            value={lastname}
            placeholder="Nom (*)"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
      </div>
      <div className={style.inputDiv}>
        <label htmlFor="email">
          <Image src={emailPicture} alt="Email" />
        </label>
        <input
          required
          type="email"
          id="email"
          data-cy="email"
          value={email}
          placeholder="Email (*)"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={style.inputDiv}>
        <label htmlFor="phoneNumber">
          <Image src={phonePicture} alt="Phone number" />
        </label>
        <input
          required
          type="tel"
          id="phoneNumber"
          data-cy="phoneNumber"
          value={phoneNumber}
          placeholder="Numéro de téléphone (*)"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className={style.inputDiv}>
        <label htmlFor="address">
          <Image src={adressPicture} alt="Phone number" />
        </label>
        <input
          type="text"
          id="address"
          data-cy="address"
          value={address}
          placeholder="Adresse"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className={style.inputDiv}>
        <label htmlFor="society">
          <Image src={societyPicture} alt="Society" />
        </label>
        <input
          type="text"
          id="society"
          data-cy="society"
          value={society}
          placeholder="Société"
          onChange={(e) => setSociety(e.target.value)}
        />
      </div>
      <button className={styleTransfert.buttonValidate}>Réserver</button>
      <div
        className={
          isResaSent ? styleTransfert.tarifOn : styleTransfert.tarifOff
        }
      >
        Merci, votre réservation a bien été envoyée aux Drivers !
      </div>
    </form>
  );
}
