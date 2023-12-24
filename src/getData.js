import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "668730bb0fd34e0e2f50c518e7230127";
export const useGetData = (city) => {
   const [weatherData, setWeatherData] = useState(null);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const cityResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
            const lon = cityResponse.data[0].lon;
            const lat = cityResponse.data[0].lat

            const responseWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
            setWeatherData(responseWeather.data);
         } catch (error) {
            console.error("Error fetching weather data: ", error)
         }
      }
      fetchData();
   }, [city]);
   return weatherData;
};




