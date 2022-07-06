const db = require("../lib/prisma");

module.exports.createItineraryAirport = async ({ originAdress }) => {
  return await db.ItineraryAirport.create({
    data: { originAdress },
  });
};
