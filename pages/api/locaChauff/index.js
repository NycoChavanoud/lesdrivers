import { createFormLocaChauff } from "../../../models/backformLocaChauff";

async function handler(req, res) {
  if (req.method === "POST") {
    const course = await createFormLocaChauff(req.body);
    return res.status(201).send(course);
  }
}

export default handler;
