import styleLocation from "../styles/LocaAvecChauffeur.module.css";

export default function TypeVehiculeCard({
  classPicture,
  vehiculeName,
  handlefunction,
  classContainer,
}) {
  return (
    <div className={classContainer} onClick={handlefunction}>
      <div className={classPicture} />
      <p className={styleLocation.textVehicule}>{vehiculeName}</p>
    </div>
  );
}
