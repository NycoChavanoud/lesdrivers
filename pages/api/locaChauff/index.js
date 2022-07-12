import { createFormLocaChauff } from "../../../models/backformLocaChauff";

async function handler(req, res) {
  if (req.method === "POST") {
    console.log("MODEL", req.body);
    const course = await createFormLocaChauff(req.body);
    return res.status(201).send(course);
  }
}

export default handler;
