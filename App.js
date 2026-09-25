import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import AQICard from "./components/AQICard";
//import PollutantCard from "./components/PollutantCard";
import AQIChart from "./components/AQIChart";
import Prediction from "./components/Prediction";
import HealthAdvice from "./components/HealthAdvice";
import Footer from "./components/Footer";

function App() {

  const [city, setCity] = useState("Chennai");

  const [aqi, setAqi] = useState(null);
  const [pollutants, setPollutants]= useState({
    pm25:0,
    pm10:0,
    co:0,
    no2:0,
    o3:0,
    so2:0,
    no:0,
    nh3:0


  });

  return (
    <div>
      <Navbar />
      <Home />

      <SearchBar
        setCity={setCity}
        setAqi={setAqi}
        setPollutants={setPollutants}
      />

      <AQICard
        city={city}
        aqi={aqi}
      />

      <div className="pollutants"> <h2>Air Pollutants</h2> <p>PM2.5 : {pollutants.pm25.toFixed(2)} μg/m³</p> <p>PM10 : {pollutants.pm10.toFixed(2)} μg/m³</p> <p>CO : {pollutants.co.toFixed(2)} μg/m³</p> <p>NO₂ : {pollutants.no2.toFixed(2)} μg/m³</p> <p>O₃ : {pollutants.o3.toFixed(2)} μg/m³</p> <p>SO₂ : {pollutants.so2.toFixed(2)} μg/m³</p> </div>

          <AQIChart />

      <Prediction />

      <HealthAdvice />

      <Footer />
    </div>
  );
}

export default App;