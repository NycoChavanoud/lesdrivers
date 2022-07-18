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
          <form>
            <ButtonConfirmationCourseAndLoca
              logo={styleLocation.url1}
              title={"Lieu de départ"}
              data={dataDepart}
              nameData={dataDepart}
            />
            <ButtonConfirmationCourseAndLoca
              logo={styleLocation.url2}
              title={"Lieu d'arrivée"}
              data={dataArrive}
              nameData={dataArrive}
            />
            <ButtonConfirmationCourseAndLoca
              logo={styleLocation.url3}
              title={"Date"}
              data={dataDate}
              nameData={dataDate}
            />

            <ButtonConfirmationCourseAndLoca
              logo={styleLocation.url4}
              title={"Heure"}
              data={dataTime}
              nameData={dataTime}
            />

            <ButtonConfirmationCourseAndLoca
              logo={styleLocation.url5}
              title={"Véhicule"}
              data={dataVehicule}
              nameData={dataVehicule}
            />

            <ButtonConfirmationCourseAndLoca
              logo={styleLocation.url6}
              title={"Nombre de personne"}
              data={dataNbrPeople}
              nameData={dataNbrPeople}
            />
          </form>
        </div>
      </div>

      <div className={styleLocation.containerSectionRight}></div>
    </div>
  );
}
