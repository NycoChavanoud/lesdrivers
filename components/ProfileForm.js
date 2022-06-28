import createPersistedState from "use-persisted-state";
import style from "../styles/signup.module.css";
import Image from "next/image";
import emailPicture from "../public/images/input_email.png";
import profilePicture from "../public/images/input_profil.png";
import phonePicture from "../public/images/input_phone.png";
import adressPicture from "../public/images/input_adress.png";
import societyPicture from "../public/images/input_society.png";

export default function ProfilForm({
  firstNameDefault = "",
  lastNameDefault = "",
  emailDefault = "",
  adressDefault = "",
  phoneNumberDefault = "",
  societyDefault = "",
}) {
  const useFirsNameState = createPersistedState("invite_form_firstName");
  const useLastNameState = createPersistedState("invite_form_lastName");
  const useEmailState = createPersistedState("invite_form_email");
  const useAdressState = createPersistedState("invite_form_adress");
  const usePhoneNumberState = createPersistedState("invite_form_phoneNumber");
  const useSocietyState = createPersistedState("invite_form_society");
  const [firstname, setFirstname] = useFirsNameState(firstNameDefault);
  const [lastname, setLastname] = useLastNameState(lastNameDefault);
  const [email, setEmail] = useEmailState(emailDefault);
  const [address, setAddress] = useAdressState(adressDefault);
  const [phoneNumber, setPhoneNumber] = usePhoneNumberState(phoneNumberDefault);
  const [society, setSociety] = useSocietyState(societyDefault);

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
    </form>
  );
}
