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

  await db.FormLocaChauff.deleteMany();
  await db.FormLocaChauff.create({
    data: {
      departureAdress: "3 rue de la république",
      arrivalAdress: "12 avenue des commissaires",
      departureOfDate: "2022-21-03",
      departureOfTime: "18:30",
      numberOfPassengers: 5,
    },
  });
}

seed();

module.exports = seed;
