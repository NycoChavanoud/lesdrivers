import styleLocation from "../styles/LocaAvecChauffeur.module.css";
import ButtonConfirmationCourseAndLoca from "./ButtonConfirmationCourseAndLoca";

export default function ConfirmationCourseAndLoca({
  dataDepart,
  dataDate,
  dataTime,
  dataVehicule,
  dataNbrPeople,
  dataForfait,
}) {
  return (
    <div className={styleLocation.mainContainer}>
      <div className={styleLocation.containerSectionLeft}>
        <h1>Super ! Tout est prêt.</h1>
        <p>Voici le récapitulatif de votre course.</p>
        <div className={styleLocation.ensembleButton}>
          <ButtonConfirmationCourseAndLoca
            logo={styleLocation.url1}
            title={"Lieu de départ"}
            data={dataDepart}
          />
          <ButtonConfirmationCourseAndLoca
            logo={styleLocation.url3}
            title={"Date"}
            data={dataDate}
          />

          <ButtonConfirmationCourseAndLoca
            logo={styleLocation.url4}
            title={"Heure"}
            data={dataTime}
          />

          <ButtonConfirmationCourseAndLoca
            logo={styleLocation.url5}
            title={"Véhicule"}
            data={dataVehicule}
          />

          <ButtonConfirmationCourseAndLoca
            logo={styleLocation.url6}
            title={"Nombre de personne"}
            data={dataNbrPeople}
          />

          <ButtonConfirmationCourseAndLoca
            logo={styleLocation.url7}
            title={"Forfait"}
            data={dataForfait}
          />
        </div>
      </div>
      <div className={styleLocation.containerSectionRight}></div>
    </div>
  );
}
