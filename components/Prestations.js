import stylePrestation from "../styles/Prestation.module.css";
import ButtPresta from "./Buttonprestations";
import icon1 from "../public/images/car.png";
import icon2 from "../public/images/ourvocation.png";
import icon3 from "../public/images/ourservices.png";
import icon4 from "../public/images/traject.png";
import ourVehicles from "../public/images/allcars.png";
import serviceVocation from "../public/images/serviceVocation.png";
import diffVocation from "../public/images/lyon.png";
import map from "../public/images/maplyon.png";

import { useRouter } from "next/router";

export default function Prestation() {
  const router = useRouter();
  return (
    <div className={stylePrestation.prestationContainer}>
      <div className={stylePrestation.title}>
        <h1 className={stylePrestation.prestationh1}>Nos prestations</h1>
      </div>
      <div className={stylePrestation.ButtPrestaWrapper}>
        <div onClick={() => router.push("/vehicules")}>
          <ButtPresta
            icon={icon1}
            textePrestation={
              "Notre parc voiture est composé de berlines standards ou de luxes, de minis-vans, de vans et de minibus"
            }
            titleBlock={"Nos véhicules"}
            bgPrestaWidth={200}
            bgPrestaHeight={100}
            callToActionTexte={"DÉCOUVREZ NOS VÉHICULES"}
            bgPresta={ourVehicles}
          />
        </div>

        <ButtPresta
          icon={icon2}
          titleBlock={"Le service comme vocation"}
          bgPrestaWidth={200}
          bgPrestaHeight={130}
          callToActionTexte={"NOS ENGAGEMENTS ET NOS VALEURS"}
          bgPresta={serviceVocation}
        />
        <ButtPresta
          icon={icon3}
          titleBlock={"Nos différents services"}
          textePrestation={
            "Nous proposons différents services comme les transports jusqu’à l’aéroport de Lyon Saint-Exupéry ou encore des circuits dans Lyon et ses alentours."
          }
          bgPrestaWidth={200}
          bgPrestaHeight={130}
          callToActionTexte={"ACCÉDEZ A NOS DIFFÉRENTS SERVICES"}
          bgPresta={diffVocation}
        />
        <ButtPresta
          icon={icon4}
          titleBlock={"Combien ça coûte ?"}
          textePrestation={
            "Estimer et réserver votre chauffeur suivant votre zone géographique et votre région."
          }
          bgPrestaWidth={200}
          bgPrestaHeight={130}
          callToActionTexte={"ESTIMER VOTRE TRAJET"}
          bgPresta={map}
        />
      </div>
    </div>
  );
}
