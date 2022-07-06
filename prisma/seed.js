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

  await db.itineraryAirport.deleteMany();
  await db.itineraryAirport.create({
    data: {
      originAdress: "Departure place sample, injected by the seed file",
      // destinationAdress: "destination form seed",
    },
  });
}

seed();

module.exports = seed;
