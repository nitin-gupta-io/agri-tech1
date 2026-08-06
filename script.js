async function getPrediction() {
  const crop = document.getElementById("crop").value;
  const soilMoisture = document.getElementById("soilMoisture").value;
  const temperature = document.getElementById("temperature").value;
  const resultElement = document.getElementById("prediction");

  if (!crop || !soilMoisture || !temperature) {
    resultElement.innerText = "Please fill all fields!";
    return;
  }

  resultElement.innerText = "Predicting... Please wait.";

  try {
    const response = await fetch("/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ crop, soilMoisture, temperature })
    });

    const data = await response.json();
    resultElement.innerText = data.prediction || JSON.stringify(data);
  } catch (error) {
    console.error("Error:", error);
    resultElement.innerText = "Error getting prediction!";
  }
}
