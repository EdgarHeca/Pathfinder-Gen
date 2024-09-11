import express from "express";
import cors from "cors";
import { JSONFilePreset } from "lowdb/node";

const femaleNamesData = { names: [] };
const maleNamesData = { names: [] };
const nonbinNamesData = { names: [] };
const lastNamesData = { last_names: [] };
const levelsData = { levels: [] };
const classesData = { classes: [] };
const ancestriesData = {
  ancestriesComm: [],
  ancestriesUnco: [],
  ancestriesRare: [],
};

const dbFemaleNames = await JSONFilePreset("appdbs/femalenamesdb.json", femaleNamesData);
const dbMaleNames = await JSONFilePreset("appdbs/malenamesdb.json", maleNamesData);
const dbNonbinNames = await JSONFilePreset("appdbs/nonbinnamesdb.json", nonbinNamesData);
const dbLastNames = await JSONFilePreset("appdbs/lastnamesdb.json", lastNamesData);
const dbLevels = await JSONFilePreset("appdbs/levelsdb.json", levelsData);
const dbClasses = await JSONFilePreset("appdbs/classesdb.json", classesData);
const dbAncestries = await JSONFilePreset("appdbs/ancestriesdb.json", ancestriesData);

const app = express();
const port = 3000;

app.use(cors());

app.get("/female-names", (req, res) => {
  const data = dbFemaleNames.data.names;
  return res.json(data);
});

app.get("/male-names", (req, res) => {
  const data = dbMaleNames.data.names;
  return res.json(data);
});

app.get("/nonbin-names", (req, res) => {
  const data = dbNonbinNames.data.names;
  return res.json(data);
});

app.get("/lastnames", (req, res) => {
  const data = dbLastNames.data.last_names;
  return res.json(data);
});

app.get("/levels", (req, res) => {
  const data = dbLevels.data.levels;
  return res.json(data);
});

app.get("/classes", (req, res) => {
  const data = dbClasses.data.classes;
  return res.json(data);
});

app.get("/ancestriescomm", (req, res) => {
  const data = dbAncestries.data.ancestriesComm;
  return res.json(data);
});

app.get("/ancestriesunco", (req, res) => {
  const data = dbAncestries.data.ancestriesUnco;
  return res.json(data);
});

app.get("/ancestriesrare", (req, res) => {
  const data = dbAncestries.data.ancestriesRare;
  return res.json(data);
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
