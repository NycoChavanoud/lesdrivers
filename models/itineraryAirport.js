const db = require("../lib/prisma");

module.exports.createItineraryAirport = async ({
  originAdress,
  destinationAdress,
}) => {
  return await db.ItineraryAirport.create({
    data: { originAdress, destinationAdress },
  });
};
