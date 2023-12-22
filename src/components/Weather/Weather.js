import WeatherForm from "../../WeatherData/WeatherForm";
import WeatherInfo from "../../WeatherData/WeatherInfo";
import SunriseSunset from "../../WeatherData/SunriseSunset";
import WindInfo from "../../WeatherData/WindInfo";
import { useGetData } from "../../getData";
import "./style.css"
export const Weather = () => {
   const weatherData = useGetData();
   if (!weatherData) {
      return <p>Ładowanie danych...</p>;
   }

   const { main, wind, name } = weatherData;

   if (!main) {
      return <p>Brak danych pogodowych</p>;
   }

   const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;
   const { speed, deg, gust } = wind;


   return (

      <div>
         <h2>{name}</h2>
         <p>Temperatura: {temp}°C</p>
         <p>Odczuwalna temperatura: {feels_like}°C</p>
         <p>Temp. min: {temp_min}°C</p>
         <p>Temp. max: {temp_max}°C</p>
         <p>Ciśnienie: {pressure} hPa</p>
         <p>Wilgotność: {humidity}%</p>
         <p>Prędkość wiatru: {speed} m/s</p>
         <p>Kierunek wiatru: {deg}°</p>
         <p>Porywy wiatru: {gust} m/s</p>

      </div>
   );
};