const WeatherInfo = ({ weatherData }) => {
   return (
      <div className="weather-info">
         <h2 className="city-name">{weatherData.name}</h2>
         <p className="temperature">Temperatura: {weatherData.main} °C</p>
         <p className="weather-description">
            Pogoda: {weatherData.weather}
         </p>
      </div>
   );
};

export default WeatherInfo;
