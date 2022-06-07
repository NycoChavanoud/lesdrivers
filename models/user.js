const db = require("../db");
const argon2 = require("argon2");
const Joi = require("joi");

const hashingOptions = {
  memoryCost: 2 ** 16,
  timeCost: 5,
  type: argon2.argon2id,
};

const hashPassword = (plainPassword) =>
  argon2.hash(plainPassword, hashingOptions);

module.exports.validateUser = (data, forUpdate = false) =>
  Joi.object({
    email: Joi.string()
      .email()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    password: Joi.string()
      .min(8)
      .max(100)
      .presence(forUpdate ? "optional" : "required"),
    firstname: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    lastname: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    address: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "optional"),
    phoneNumber: Joi.string()
      .phoneNumber()
      .max(20)
      .presence(forUpdate ? "optional" : "required"),
  }).validate(data, { abortEarly: false }).error;

module.exports.createUser = async ({
  password,
  firstname,
  email,
  lastname,
  address,
  phoneNumber,
}) => {
  const hashedPassword = await hashPassword(password);
  return db.user.create({
    data: {
      email,
      firstname,
      lastname,
      hashedPassword,
      address,
      phoneNumber,
    },
  });
};

module.exports.emailAlreadyExists = (email) => {
  return db.user.findUnique({ where: { email } }).then((user) => !!user);
};

module.exports.deleteAllUsers = db.user.deleteMany;

module.exports.hashPassword = hashPassword;
