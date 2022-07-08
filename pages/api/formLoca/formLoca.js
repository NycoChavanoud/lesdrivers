/* eslint-disable no-unused-vars */
import { createBackFormLoca } from "../../../models/backformLocaModel";

async function handler(req, res) {
  if (req.method === "POST") {
    const {
      departureAdress,
      arrivalAdress,
      departureOfDate,
      departureOfTime,
      numberOfPassengers,
    } = req.body;
    const itin = await createBackFormLoca(req.body);
    return res.status(201).send(itin);
  }
}

export default handler;
