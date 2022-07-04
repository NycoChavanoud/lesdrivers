import styleLocation from "../styles/LocaAvecChauffeur.module.css";

export default function TypeVehiculeCard({ classPicture, vehiculeName }) {
  return (
    <div className={styleLocation.cardContainer}>
      <div className={classPicture} />
      <p className={styleLocation.textVehicule}>{vehiculeName}</p>
    </div>
  );
}
