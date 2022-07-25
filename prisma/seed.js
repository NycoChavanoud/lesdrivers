const { hashPassword } = require("../models/user");
const db = require("../lib/prisma");

async function seed() {
  const hashedPassword = await hashPassword("superpassword");
  await db.user.deleteMany();
  await db.user.create({
    data: {
      email: "dave.lopper@gmail.com",
      firstname: "Dave",
      lastname: "Lopper",
      hashedPassword: hashedPassword,
      phoneNumber: "0769422558",
      address: "7 turtle road",
      society: "Credit Ecolo",
    },
  });

  await db.FormCourseLyon.deleteMany();
  await db.FormCourseLyon.create({
    data: {
      departureAdress: "3 rue de la république",
      arrivalAdress: "12 avenue des commissaires",
      departureOfDate: "2022-01-01",
      departureOfTime: "18:30",
      numberOfPassengers: 5,
      vehiculeNeeded: "Berline",
    },
  });

  await db.FormLocaChauff.deleteMany();
  await db.FormLocaChauff.create({
    data: {
      departureAdress: "3 rue de la république",
      departureOfDate: "2022-01-01",
      departureOfTime: "18:30",
      numberOfPassengers: 5,
      vehiculeNeeded: "Berline",
      numberOfHour: "3",
    },
  });

  await db.itineraryAirport.deleteMany();
  await db.itineraryAirport.create({
    data: {
      originAdress: "originAdress sample from the seed",
      destinationAdress: "destinationSample from the seed",
      departureDate: "2022-01-01",
      departureTime: "19:05",
      numberPassengers: 2,
      numberLuggages: "0-5",
      vehicule: "berline",
      siegeBebe: false,
      rehausseur: true,
      porteSki: false,
      flightNumber: "195-Easyjet",
      somethingToSay: "je suis très pressé",
    },
  });
}

seed();

module.exports = seed;
