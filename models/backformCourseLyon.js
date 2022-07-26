const db = require("../lib/prisma");

module.exports.createFormCourse = async ({
  departureAdress,
  arrivalAdress,
  departureOfDate,
  departureOfTime,
  vehiculeNeeded,
  numberOfPassengers,
  price,
}) => {
  return await db.FormCourseLyon.create({
    data: {
      departureAdress,
      arrivalAdress,
      departureOfDate,
      departureOfTime,
      vehiculeNeeded,
      numberOfPassengers,
      price,
    },
  });
};
