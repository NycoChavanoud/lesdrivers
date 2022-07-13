import { createFormCourse } from "../../../models/backformCourseLyon.js";

async function handler(req, res) {
  if (req.method === "POST") {
    console.log("MODEL", req.body);
    const course = await createFormCourse(req.body);
    return res.status(201).send(course);
  }
}

export default handler;
