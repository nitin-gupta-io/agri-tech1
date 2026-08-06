const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Serve frontend files
app.use(express.static("public"));

app.post("/predict", (req, res) => {
    const { crop, soilMoisture, temperature } = req.body;
    let prediction = "Average yield expected";

    if (soilMoisture > 70 && temperature > 25) {
        prediction = "High yield expected 🌾";
    } else if (soilMoisture < 40) {
        prediction = "Low yield, irrigation needed 💧";
    }

    res.json({ crop, soilMoisture, temperature, prediction });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html"); // ✅ Serve homepage
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
