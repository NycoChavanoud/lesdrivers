const db = require("../lib/prisma");

module.exports.createItineraryAirport = async ({
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
}) => {
  return await db.ItineraryAirport.create({
    data: {
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
    },
  });
};
