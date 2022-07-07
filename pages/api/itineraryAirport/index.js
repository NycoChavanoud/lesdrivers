/* eslint-disable no-unused-vars */
import { createItineraryAirport } from "../../../models/itineraryAirport";

async function handler(req, res) {
  if (req.method === "POST") {
    const {
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
    } = req.body;
    const itin = await createItineraryAirport(req.body);
    return res.status(201).send(itin);
  }
}

export default handler;
