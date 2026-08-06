const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/predict", (req, res) => {
  const { crop, soilMoisture, temperature } = req.body;

  const moisture = Number(soilMoisture);
  const temp = Number(temperature);

  let prediction = "Average yield expected";

  if (moisture > 70 && temp > 25) {
    prediction = "High yield expected 🌾";
  } else if (moisture < 40) {
    prediction = "Low yield - Irrigation needed 💧";
  } else if (temp > 35) {
    prediction = "High heat - Crop protection recommended ☀️";
  }

  res.json({ prediction: prediction });
});

module.exports = app;
