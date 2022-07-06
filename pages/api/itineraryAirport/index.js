import { createItineraryAirport } from "../../../models/itineraryAirport";

async function handler(req, res) {
  if (req.method === "POST") {
    // eslint-disable-next-line no-unused-vars
    const { DepartureDate } = req.body;
    const itin = await createItineraryAirport(req.body);
    return res.status(201).send(itin);
  }
}

export default handler;
