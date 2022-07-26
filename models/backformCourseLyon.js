const db = require("../lib/prisma");

module.exports.createFormCourse = async ({
  departureAdress,
  arrivalAdress,
  departureOfDate,
  departureOfTime,
  numberOfPassengers,
  vehiculeNeeded,
}) => {
  return await db.FormCourseLyon.create({
    data: {
      departureAdress,
      arrivalAdress,
      departureOfDate,
      departureOfTime,
      numberOfPassengers,
      vehiculeNeeded,
    },
  });
};
