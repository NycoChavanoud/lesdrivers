const db = require("../lib/prisma");

module.exports.createFormLocaChauff = async ({
  departureAdress,
  arrivalAdress,
  departureOfDate,
  departureOfTime,
  vehiculeNeeded,
  numberOfPassengers,
  numberOfHour,
  price,
}) => {
  return await db.FormLocaChauff.create({
    data: {
      departureAdress,
      arrivalAdress,
      departureOfDate,
      departureOfTime,
      numberOfPassengers,
      vehiculeNeeded,
      numberOfHour,
      price,
    },
  });
};
