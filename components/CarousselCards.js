import Image from "next/image";
import styleCaroussel from "../styles/Caroussel.module.css";

export default function CarousselCards({ ImageAct, CardText1, CardText2 }) {
  return (
    <div className={styleCaroussel.carousselCardContainer}>
      <Image
        src={ImageAct}
        alt="Beaujolais"
        width={150}
        height={250}
        quality={100}
      />
      <div className={styleCaroussel.carousselCardText}>
        <div className={styleCaroussel.carousselCardText1}>{CardText1}</div>
        <div className={styleCaroussel.carousselCardText2}>{CardText2}</div>
      </div>
      <div className={styleCaroussel.carousselCardCallToAction}>
        <p>Lire la suite</p>
        <div className={styleCaroussel.carousselCardArrowCallToAction} />
      </div>
    </div>
  );
}
