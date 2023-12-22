import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "668730bb0fd34e0e2f50c518e7230127";
export const useGetData = () => {
   const [weatherData, setWeatherData] = useState(null);
   useEffect(() => {
      const fetchWeatherData = async () => {
         try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`
            );

            return setWeatherData(response.data);

         } catch (error) {
            console.error("Error fetching weather data: ", error);
         }
      };
      fetchWeatherData();
   }
      , []);
   return weatherData;
}

