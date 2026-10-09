import { getPredictedAQI } from "./config/api";
import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import AQICard from "./components/AQICard";
import PollutantCard from "./components/PollutantCard";
import AQIChart from "./components/AQIChart";
import Prediction from "./components/Prediction";
import HealthAdvice from "./components/HealthAdvice";
import Footer from "./components/Footer";

function App() {

  const [city, setCity] = useState("Chennai");
  const [aqi, setAqi] = useState(120);
  const [predictedAqi, setPredictedAqi] = useState(null);
  return (
    <div>
      <Navbar />
      <Hero />

      <SearchBar
        setCity={setCity}
        setAqi={setAqi}
      />

      <AQICard
        city={city}
        aqi={aqi}
      />

      <PollutantCard />

      <AQIChart />

      <Prediction />

      <HealthAdvice />

      <Footer />
    </div>
  );
}

export default App;