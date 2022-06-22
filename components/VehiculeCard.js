import styleVehiculesCard from "../styles/Vehicules.module.css";

export default function VehiculeCard({
  classeImage,
  nomVehicule,
  descriptionVehicule,
  isSelected,
}) {
  return (
    <div
      className={styleVehiculesCard.cardContainer}
      onClick={() => {
        isSelected;
      }}
    >
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
