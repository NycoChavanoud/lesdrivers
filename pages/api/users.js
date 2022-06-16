import {
  createUser,
  validateUser,
  emailAlreadyExists,
} from "../../models/user";

import NextCors from "nextjs-cors";

async function handlePost(req, res) {
  const validationErrors = validateUser(req.body);
  if (validationErrors) return res.status(422).send(validationErrors.details);
  if (await emailAlreadyExists(req.body.email)) return res.status(409).send();
  res.status(201).send(await createUser(req.body));
}

export default async function handler(req, res) {
  if (req.method === "POST") handlePost(req, res);
  else res.status(405).send("method not allowed");
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic
  res.json({ message: "Hello NextJs Cors!" });
}
