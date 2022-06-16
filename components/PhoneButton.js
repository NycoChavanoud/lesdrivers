import stylePhoneSection from "../styles/PhoneSection.module.css";
import React, { useState } from "react";

export default function PhoneButton() {
  const [switchToggled, setSwitchToggled] = useState(false);

  const ToggleSwitch = () => {
    setSwitchToggled(!switchToggled);
  };
  return (
    <div
      className={stylePhoneSection.PhoneSectionContainer}
      onClick={ToggleSwitch}
    >
      <div className={stylePhoneSection.PhoneImage} />
      <p
        className={
          switchToggled
            ? stylePhoneSection.PhoneNumberAppear
            : stylePhoneSection.PhoneNumberNotAppear
        }
      >
        <a href="tel:+33469966080">+33 4 69 96 60 80</a>
      </p>
    </div>
  );
}
