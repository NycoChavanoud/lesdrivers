import styleLocation from "../styles/LocaAvecChauffeur.module.css";
import ButtonConfirmationCourseAndLoca from "./ButtonConfirmationCourseAndLoca";

export default function ConfirmationCourseAndLoca({
  dataDepart,
  dataArrive,
  dataDate,
  dataTime,
  dataVehicule,
  dataNbrPeople,
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
            logo={styleLocation.url2}
            title={"Lieu d'arrivée"}
            data={dataArrive}
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
        </div>
      </div>
      <div className={styleLocation.containerSectionRight}></div>
    </div>
  );
}
