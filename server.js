const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let sensorData = {};

app.post("/update", (req, res) => {
  sensorData = req.body;
  res.send("OK");
});

app.get("/data", (req, res) => {
  res.json(sensorData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
