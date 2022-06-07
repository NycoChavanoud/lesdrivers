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
    },
  });
}

seed();

module.exports = seed;
