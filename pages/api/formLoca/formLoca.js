import { createFormLoca } from "../../../models/backformLocaModel.js";

async function handler(req, res) {
  if (req.method === "POST") {
    const course = await createFormLoca(req.body);
    return res.status(201).send(course);
  }
}

export default handler;
