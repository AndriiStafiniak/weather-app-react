import React, { useState } from "react";
import axios from "axios";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";
import SunriseSunset from "./components/SunriseSunset";
import WindInfo from "./components/WindInfo";
import "./App.css";
const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "668730bb0fd34e0e2f50c518e7230127"


  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pl`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  return (
    <div className="weather-app container">
      <h1>Pogoda</h1>
      <WeatherForm onSubmit={fetchWeatherData} />
      {weatherData && (
        <div>
          <WeatherInfo weatherData={weatherData} />
          <SunriseSunset
            sunrise={weatherData.sys.sunrise}
            sunset={weatherData.sys.sunset}
          />
          <WindInfo windSpeed={weatherData.wind.speed} />
          <p>Data: {new Date().toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

