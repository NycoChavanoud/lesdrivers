const db = require("../lib/prisma");

module.exports.createFormLoca = async ({
  departureAdress,
  arrivalAdress,
  departureOfDate,
  departureOfTime,
  numberOfPassengers,
}) => {
  return await db.FormLocaChauff.create({
    data: {
      departureAdress,
      arrivalAdress,
      departureOfDate,
      departureOfTime,
      numberOfPassengers,
    },
  });
};
