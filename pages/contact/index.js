import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Layout from "../../components/Layout";
import style from "../../styles/contact.module.css";
import profilePicture from "../../public/images/input_profil.png";
import email from "../../public/images/email.png";
import message from "../../public/images/input_email.png";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hwrw8hn",
        "template_oxvhj0n",
        form.current,
        "AUafpo6N2PVFopqgz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout pageTitle="Sign up">
      <h1 className={style.mainTitle}>Contact :</h1>
      <h3 className={style.mainText}>
        Si vous avez des questions, envoyez-nous un message et nous vous
        répondrons dans les plus brefs délais.
      </h3>
      <form ref={form} onSubmit={sendEmail} className={style.signUpForm}>
        <div className={style.inputContainer}>
          <div className={style.inputDiv}>
            <label>
              <Image src={profilePicture} alt="Prénom" />
            </label>
            <input type="text" name="user_name" />
          </div>
          <div className={style.inputDiv}>
            <label>
              <Image src={email} alt="Prénom" />
            </label>
            <input type="email" name="user_email" />
          </div>
          <div className={style.inputDiv2}>
            <label>
              <Image src={message} alt="message" />
            </label>
            <textarea name="message" />
          </div>
          <div className={style.inputBtn}>
            <input type="submit" value="Envoyer" className="btn" />
          </div>
        </div>
      </form>
    </Layout>
  );
}
