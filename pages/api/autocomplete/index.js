import axios from "axios";

async function handleGet(req, res) {
  const response = await axios.get(
    `https://api-adresse.data.gouv.fr/search/?q=${req.query.address}&autocomplete=1&limit=10`
  );
  res.send(response.data);
}

export default async function handler(req, res) {
  if (req.method === "GET") handleGet(req, res);
  else res.status(405).send("method not allowed");
}
