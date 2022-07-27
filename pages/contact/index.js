import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Layout from "../../components/Layout";
import style from "../../styles/contact.module.css";
import profilePicture from "../../public/images/input_profil.png";
import email from "../../public/images/email.png";
import message from "../../public/images/input_email.png";
import PhoneButton from "../../components/PhoneButton.js";

export default function ContactUs() {
  const form = useRef();

  const [formIsSent, setFormIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => setFormIsSent(true));
  };
  return (
    <Layout pageTitle="Contact">
      <PhoneButton />
      <div className={formIsSent ? style.mainFormContactOff : ""}>
        <h1 className={style.mainTitle}>Contact :</h1>
        <h3 className={style.mainText}>
          Si vous avez des questions, envoyez-nous un message et nous vous
          répondrons dans les plus brefs délais.
        </h3>
        <form ref={form} onSubmit={sendEmail} className={style.signUpForm}>
          <div className={style.inputContainer}>
            <div className={style.inputDiv}>
              <label>
                <Image src={profilePicture} alt="Nom" />
              </label>
              <input type="text" name="user_name" placeholder="Nom" required />
            </div>
            <div className={style.inputDiv}>
              <label>
                <Image src={email} alt="Email" />
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
            </div>
            <div className={style.inputDiv2}>
              <label>
                <Image src={message} alt="message" />
              </label>
              <textarea name="message" required placeholder="Votre message" />
            </div>
            <div className={style.inputBtn}>
              <input type="submit" value="Envoyer" className="btn" />
            </div>
          </div>
        </form>
      </div>
      <div className={formIsSent ? "" : style.mainFormContactOff}>
        <h1 className={style.mainTitle}>Message envoyé !</h1>
        <h3 className={style.mainText}>
          Merci pour votre message, nous vous répondrons dans les plus brefs
          délais.
        </h3>
      </div>
    </Layout>
  );
}
