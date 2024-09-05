import express from "express";
import cors from "cors";
import { JSONFilePreset } from "lowdb/node";

const defaultData = {
  names: [],
  last_names: [],
  levels: [],
  classes: [],
  ancestriesComm: [],
  ancestriesUnco: [],
  ancestriesRare: [],
};
const db = await JSONFilePreset("db.json", defaultData);

const app = express();
const port = 3000;

app.use(cors());

await db.write();

app.get("/names", (req, res) => {
  const data = db.data.names;
  return res.json(data);
});

app.get("/lastnames", (req, res) => {
  const data = db.data.last_names;
  return res.json(data);
});

app.get("/levels", (req, res) => {
  const data = db.data.levels;
  return res.json(data);
});

app.get("/classes", (req, res) => {
  const data = db.data.classes;
  return res.json(data);
});

app.get("/ancestriescomm", (req, res) => {
  const data = db.data.ancestriesComm;
  return res.json(data);
});

app.get("/ancestriesunco", (req, res) => {
  const data = db.data.ancestriesUnco;
  return res.json(data);
});

app.get("/ancestriesrare", (req, res) => {
  const data = db.data.ancestriesRare;
  return res.json(data);
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
