import stylePhoneSection from "../styles/PhoneSection.module.css";
import React, { useState } from "react";

export default function PhoneButton() {
  const [switchToggled, setSwitchToggled] = useState(false);

  const ToggleSwitch = () => {
    setSwitchToggled(!switchToggled);
    console.log(switchToggled);
  };
  return (
    <div className={stylePhoneSection.PhoneSectionContainer}>
      <div className={stylePhoneSection.PhoneImage} onClick={ToggleSwitch} />
      <p className={stylePhoneSection.PhoneNumberNotAppear}>
        +33 4 69 96 60 80
      </p>
    </div>
  );
}
