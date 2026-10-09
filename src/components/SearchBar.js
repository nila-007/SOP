import { useState } from "react";
import axios from "axios";
import { API_KEY } from "../config/api";

function SearchBar({ setCity, setAqi }) {

  const [input, setInput] = useState("");

  const handleSearch = async () => {

    if (!input) {
      alert("Enter a city name");
      return;
    }

    try {

      // Step 1: Get latitude and longitude
      const geoResponse = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${API_KEY}`
      );

      if (geoResponse.data.length === 0) {
        alert("City not found");
        return;
      }

      const { lat, lon, name } = geoResponse.data[0];

      // Step 2: Get AQI
      const airResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      const aqi = airResponse.data.list[0].main.aqi;

      // Convert OpenWeather AQI scale (1–5) to a simple value
      const aqiValue = {
        1: 40,
        2: 80,
        3: 120,
        4: 170,
        5: 250
      };

      setCity(name);
      setAqi(aqiValue[aqi]);

    } catch (error) {
  console.log(error);

  if (error.response) {
    console.log(error.response.data);
    alert("Error: " + JSON.stringify(error.response.data));
  } else {
    alert(error.message);
  }
}

  };

  return (
    <div className="search">

      <input
        type="text"
        placeholder="Enter City"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;