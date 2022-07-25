const db = require("../lib/prisma");

module.exports.createFormLocaChauff = async ({
  departureAdress,
  arrivalAdress,
  departureOfDate,
  departureOfTime,
  numberOfPassengers,
  vehiculeNeeded,
  numberOfHour,
}) => {
  console.log("VRAI MODEL POUR LOCA");
  return await db.FormLocaChauff.create({
    data: {
      departureAdress,
      arrivalAdress,
      departureOfDate,
      departureOfTime,
      numberOfPassengers,
      vehiculeNeeded,
      numberOfHour,
    },
  });
};
