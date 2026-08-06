document.getElementById("predictForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const crop = document.getElementById("crop").value;
    const soilMoisture = document.getElementById("soilMoisture").value;
    const temperature = document.getElementById("temperature").value;

    const response = await fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ crop, soilMoisture, temperature })
    });

    const data = await response.json();
    document.getElementById("prediction").innerText = 
        `Crop: ${data.crop}\nSoil Moisture: ${data.soilMoisture}%\nTemperature: ${data.temperature}°C\nPrediction: ${data.prediction}`;
});
