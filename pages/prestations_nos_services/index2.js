import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../../components/Layout";
import style from "../../styles/contact.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import emailPicture from "../../public/images/input_email.png";
import profilePicture from "../../public/images/input_profil.png";
import phonePicture from "../../public/images/input_phone.png";
import adressPicture from "../../public/images/input_adress.png";
import societyPicture from "../../public/images/input_society.png";
const notifyRegisterSuccess = () => toast("Thanks ! You can now log in !");

export default function SignupPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [society, setSociety] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    axios
      .post("/api/users", {
        firstname,
        email,
        lastname,
        message,
        phoneNumber,
      })
      .then(() => router.push("/login"))
      .then(notifyRegisterSuccess)
      .catch((err) => {
        if (err.response.status === 409) setError("This email already exists");
      });
  };

  return (
    <Layout pageTitle="Sign up">
      <Toaster />
      <h1 className={style.mainTitle}>Contact :</h1>
      <form className={style.signUpForm} onSubmit={handleSubmit}>
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
          <label htmlFor="message">
            <Image src={adressPicture} alt="message" />
          </label>
          <input
            type="text"
            id="message"
            data-cy="message"
            value={message}
            minLength="50"
            maxLength="500"
            size="500"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
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
        <p className={style.wrongDatas}>{error}</p>
        <button data-cy="registerBtn" type="submit">
          Envoyer
        </button>
      </form>
    </Layout>
  );
}
