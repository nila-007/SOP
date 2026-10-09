
export const API_KEY = "2e90cd5adb19e8c53950e0bd305d2bfb";
export async function getPredictedAQI(pollutants) {
  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "PM2.5": pollutants.pm25,
      "PM10": pollutants.pm10,
      "NO": pollutants.no,
      "NO2": pollutants.no2,
      "NH3": pollutants.nh3,
      "CO": pollutants.co,
      "SO2": pollutants.so2,
      "O3": pollutants.o3
    })
  });

  if (!response.ok) {
    throw new Error("Prediction request failed");
  }

  const data = await response.json();

  return data.predicted_aqi;
}