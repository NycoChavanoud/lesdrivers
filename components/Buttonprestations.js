import Image from "next/image";
import stylePrestation from "../styles/Prestation.module.css";

export default function blocPrestation({
  icon,
  textePrestation,
  bgPresta,
  titleBlock,
  callToActionTexte,
  bgPrestaWidth,
  bgPrestaHeight,
}) {
  return (
    <div className={stylePrestation.prestationContainerButton}>
      <div className={stylePrestation.headerContainer}>
        <div className={stylePrestation.imageAndTitle}>
          <Image src={icon} alt="Icon section car" width={55} height={45} />
          <p className={stylePrestation.imageAndTitle.p}>{titleBlock}</p>
        </div>
        <div className={stylePrestation.round}></div>
      </div>
      <div className={stylePrestation.bodyPresta}>
        <p className={stylePrestation.texte}>{textePrestation}</p>
        <Image
          className={stylePrestation.ImgagebodyPresta}
          src={bgPresta}
          alt="Picture of the author"
          width={bgPrestaWidth}
          height={bgPrestaHeight}
        />
        <div className={stylePrestation.callToAction}>
          <p className={stylePrestation.callToActionp}>{callToActionTexte}</p>
          <div className={stylePrestation.arrow}></div>
        </div>
      </div>
    </div>
  );
}
