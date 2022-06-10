import styleCaroussel from "../styles/Caroussel.module.css";
import CarousselCards from "./CarousselCards";
import beaujolais from "../public/images/vignes.png";
import salon from "../public/images/salon.png";
import crew from "../public/images/crew.png";

export default function Caroussel() {
  return (
    <div className={styleCaroussel.carousselContainer}>
      <h1 className={styleCaroussel.carousselh1}>Actualités</h1>
      <div className={styleCaroussel.carousselOver}>
        <CarousselCards
          ImageAct={beaujolais}
          CardText1={"Foire au vin du Beaujolais !"}
          CardText2={"Samedi 21 mai 2022"}
        />
        <CarousselCards
          ImageAct={salon}
          CardText1={"Salon automobile de Lyon 2022"}
          CardText2={"Samedi 18 juin 2022"}
        />
        <CarousselCards
          ImageAct={crew}
          CardText1={"Les Drivers s’agrandissent !"}
        />
      </div>
    </div>
  );
}
