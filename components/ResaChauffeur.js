import ButtNavResa from "./ButtonNavResa";
import HeaderResa from "../styles/ResaChauffeur.module.css";

export default function ResaChauf() {
  return (
    <div className={HeaderResa.resaContainer}>
      <div className={HeaderResa.title}>
        <p className={HeaderResa.resaContainerp}>RESERVER UN CHAUFFEUR</p>
      </div>
      <div className={HeaderResa.buttonsResaChauff}>
        <ButtNavResa
          classe={HeaderResa.url1}
          phrase1="Transfert à l'aéroport Lyon Saint Exupéry"
        />
        <ButtNavResa
          classe={HeaderResa.url2}
          phrase1="Courses dans Lyon et ses alentours"
        />
        <ButtNavResa
          classe={HeaderResa.url3}
          phrase1="Location de véhicule avec chauffeur"
          phrase2="NOUVEAU"
        />
      </div>
    </div>
  );
}
