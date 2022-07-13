const db = require("../lib/prisma");

module.exports.createFormCourse = async ({
  departureAdress,
  arrivalAdress,
  departureOfDate,
  departureOfTime,
  numberOfPassengers,
  vehiculeNeeded,
}) => {
  console.log("VRAI MODEL");
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
