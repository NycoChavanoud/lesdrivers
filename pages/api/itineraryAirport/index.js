const { createItineraryAirport } = require("../../../models/itineraryAirport");

async function handler(req, res) {
  if (req.method === "POST") {
    const itinerary = await createItineraryAirport(req.body);
    return res.status(201).send(itinerary);
  }
}

export default handler;
