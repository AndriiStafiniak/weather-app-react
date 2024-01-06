import { useGetData } from "../../getData";
import "./style.css"
import { useState } from "react";
export const Weather = () => {
   const [city, setCity] = useState("");
   const [weatherData, setWeatherData] = useState(null)
   const setWeatherDataParam = useGetData(city);


   const handleInputChange = (event) => {
      setCity(event.target.value)
   };
   const handleSubmit = (event) => {
      event.preventDefault();
   }

   return (
      <div style={{ color: "white" }} >
         <form onSubmit={handleSubmit}>
            <input
               onChange={handleInputChange}
               placeholder="wpisz nazwe miasta"
               value={city}
               type="text" />
            <button
               onClick={() => setWeatherData(setWeatherDataParam)}
            >Sprawdz</button>
         </form>
         {weatherData ? (
            <>
               <h2>{weatherData.name}</h2>
               <p>Temperatura: {weatherData.main.temp}°C</p>
               <p>Odczuwalna temperatura: {weatherData.main.feels_like}°C</p>
               <p>Temp. min: {weatherData.main.temp_min}°C</p>
               <p>Temp. max: {weatherData.main.temp_max}°C</p>
               <p>Ciśnienie: {weatherData.main.pressure} hPa</p>
               <p>Wilgotność: {weatherData.main.humidity}%</p>
               <p>Prędkość wiatru: {weatherData.wind.speed} m/s</p>
               <p>Kierunek wiatru: {weatherData.wind.deg}°</p>
               <p>Porywy wiatru: {weatherData.wind.gust} m/s</p>
            </>
         ) : (
            <p>Brak danych pogodowych</p>
         )}
      </div>
   );
};