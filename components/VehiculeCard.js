import styleVehiculesCard from "../styles/Vehicules.module.css";

export default function VehiculeCard({
  classeImage,
  nomVehicule,
  descriptionVehicule,
  showText,
}) {
  return (
    <div className={styleVehiculesCard.cardContainer} onClick={showText}>
      <div className={styleVehiculesCard.cardHeaderContainer}>
        <div className={classeImage}></div>
        <p className={styleVehiculesCard.cardHeaderContainerp}>{nomVehicule}</p>
      </div>
      <div className={styleVehiculesCard.cardTextContainer}>
        {descriptionVehicule}
      </div>
    </div>
  );
}
