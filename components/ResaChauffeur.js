import ButtNavResa from "./ButtonNavResa";
import HeaderResa from "../styles/ResaChauffeur.module.css";
import { useRouter } from "next/router";

export default function ResaChauf() {
  const router = useRouter();

  const linkToTransfertAirport = () => {
    router.push("/transfert_aeroport");
  };

  const linkToServiceAvcChauff = () => {
    router.push("/location_avec_chauffeur");
  };

  const linkToLocaAvecChauff = () => {
    router.push("/course_dans_lyon");
  };

  return (
    <div className={HeaderResa.resaContainer}>
      <div className={HeaderResa.title}>
        <p className={HeaderResa.resaContainerp}>RÉSERVER UN CHAUFFEUR</p>
      </div>
      <div className={HeaderResa.buttonsResaChauff}>
        <ButtNavResa
          classe={HeaderResa.url1}
          phrase1="Transfert à l'aéroport Lyon Saint Exupéry"
          linkTo={linkToTransfertAirport}
        />
        <ButtNavResa
          classe={HeaderResa.url2}
          phrase1="Courses dans Lyon et ses alentours"
          linkTo={linkToLocaAvecChauff}
        />
        <ButtNavResa
          classe={HeaderResa.url3}
          phrase1="Location de véhicule avec chauffeur"
          phrase2="NOUVEAU"
          linkTo={linkToServiceAvcChauff}
        />
      </div>
    </div>
  );
}
