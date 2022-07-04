import Layout from "../../components/Layout";
import TypeVehiculeCard from "../../components/TypeVehiculeCard";
import styleLocation from "../../styles/LocaAvecChauffeur.module.css";

export default function LocationAvecChauffeur() {
  return (
    <Layout pageTitle="Les Drivers - Location avec chauffeur">
      <div className={styleLocation.containerService}>
        <p className={styleLocation.title}>
          Location <span>avec chauffeur</span>
        </p>
        <div className={styleLocation.containerSection}>
          <div className={styleLocation.containerSectionLeft}></div>
          <div className={styleLocation.containerSectionRight}>
            <div className={styleLocation.containerForm}>
              <div className={styleLocation.containerInput}>
                <p>
                  Point de <br />
                  rendez-vous
                </p>
                <input></input>
              </div>
              <div className={styleLocation.containerInput}>
                <p>Date</p>
                <input></input>
              </div>
              <div className={styleLocation.containerTime}>
                <p>
                  Je souhaite être pris en charge à partir de<input></input>
                </p>
              </div>
              <div className={styleLocation.containerCatVehicles}>
                <p>Catégorie de véhicule souhaitée</p>
                <div className={styleLocation.containerCardVehicules}>
                  {" "}
                  <TypeVehiculeCard
                    classPicture={styleLocation.vehi1}
                    vehiculeName={"Hybride électrique"}
                  />
                  <TypeVehiculeCard
                    classPicture={styleLocation.vehi2}
                    vehiculeName={"Berline"}
                  />
                  <TypeVehiculeCard
                    classPicture={styleLocation.vehi3}
                    vehiculeName={"Van"}
                  />
                  <TypeVehiculeCard
                    classPicture={styleLocation.vehi4}
                    vehiculeName={"Mini-bus"}
                  />
                </div>
              </div>
              <div className={styleLocation.containerCatVehicles}>
                <p>Catégorie de véhicule souhaitée</p>
                <div className={styleLocation.containerCardVehicules}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
