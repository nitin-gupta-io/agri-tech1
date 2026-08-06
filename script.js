document.getElementById("predictForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const crop = document.getElementById("crop").value;
  const soilMoisture = document.getElementById("soilMoisture").value;
  const temperature = document.getElementById("temperature").value;

  const resultDiv = document.getElementById("prediction") || document.getElementById("result");

  try {
    if (resultDiv) {
      resultDiv.innerText = "Predicting... Please wait.";
    }

    const response = await fetch("/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ crop, soilMoisture, temperature })
    });

    const data = await response.json();

    if (resultDiv) {
      resultDiv.innerText = data.prediction || JSON.stringify(data);
    }
  } catch (error) {
    console.error("Error:", error);
    if (resultDiv) {
      resultDiv.innerText = "Error getting prediction!";
    }
  }
});
