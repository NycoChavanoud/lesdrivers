import styleTransfert from "../styles/TransfertAeroport.module.css";

export default function TrajectFormDetails({
  originAdress,
  destinationAdress,
  departureDate,
  departureTime,
  numberPassengers,
  numberLuggages,
  vehicule,
  siegeBebe,
  rehausseur,
  porteSki,
  flightNumber,
  somethingToSay,
}) {
  return (
    <div className={styleTransfert.RecapItinerary}>
      <p>
        Départ à {departureTime} le {departureDate}
      </p>
      <p>
        Trajet de {originAdress} à {destinationAdress}
      </p>
      <p>Nombre de passagers : {numberPassengers}</p>
      <p>Nombre de bagages : {numberLuggages}</p>
      <p>Véhicule choisi : {vehicule}</p>
      <p>{siegeBebe ? "Vous avez sélectionné un siège bébé." : ""}</p>
      <p>{rehausseur ? "Vous avez sélectionné un siège rehausseur." : ""}</p>
      <p>{porteSki ? "Vous avez sélectionné un porte-ski." : ""}</p>
      <p>{flightNumber ? `Numéro de vol : ${flightNumber}` : ""}</p>
      <p>
        {somethingToSay
          ? `Vous avez laissé le message suivant : ${somethingToSay}`
          : ""}
      </p>
    </div>
  );
}
