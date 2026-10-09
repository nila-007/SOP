function AQICard({ city, aqi }) {
  return (
    <div className="card">
      <h2>{city}</h2>

      <h1>{aqi}</h1>

      <h3>
        {aqi <= 50
          ? "🟢 Good"
          : aqi <= 100
          ? "🟡 Moderate"
          : aqi <= 150
          ? "🟠 Unhealthy for Sensitive Groups"
          : "🔴 Unhealthy"}
      </h3>
    </div>
  );
}

export default AQICard;