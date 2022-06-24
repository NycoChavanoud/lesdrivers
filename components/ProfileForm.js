import { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { passwordStrength } from "check-password-strength";
// import Layout from "../../components/Layout";
import style from "../styles/signup.module.css";
// import { useRouter } from "next/router";
import Image from "next/image";
import emailPicture from "../public/images/input_email.png";
import profilePicture from "../public/images/input_profil.png";
import phonePicture from "../public/images/input_phone.png";
import adressPicture from "../public/images/input_adress.png";
import societyPicture from "../public/images/input_society.png";
// import passwordPicture from "../public/images/input_password.png";
// const notifyRegisterSuccess = () => toast("Thanks ! You can now log in !");

export default function ProfilForm({
  firstNameDefault,
  lastnameDefault,
  emailDefault,
  adressDefault,
  phoneNumberDefault,
  societyDefault,
}) {
  const [firstname, setFirstname] = useState(firstNameDefault);
  const [lastname, setLastname] = useState(lastnameDefault);
  const [email, setEmail] = useState(emailDefault);
  //   const [password, setPassword] = useState("");
  //   const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [address, setAddress] = useState(adressDefault);
  const [phoneNumber, setPhoneNumber] = useState(phoneNumberDefault);
  const [society, setSociety] = useState(societyDefault);
  //   const router = useRouter();

  return (
    <form className={style.signUpForm}>
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
          type="text"
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

      {/* <div className={style.inputDivWith2InputsContainer}>
        <div className={style.inputDivWith2Inputs}>
          <label htmlFor="password">
            <Image src={passwordPicture} alt="Password" />
          </label>
          <input
            required
            type="password"
            id="password"
            data-cy="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={style.border} />
        <div className={style.inputDivWith2Inputs}>
          <label htmlFor="passwordConfirmation"></label>
          <input
            required
            type="password"
            id="passwordConfirmation"
            data-cy="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Confirmation du mot de passe"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
      </div> */}
    </form>
  );
}
