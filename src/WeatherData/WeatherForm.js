import { useState } from "react";
import { useGetData } from "../getData";

const WeatherForm = ({ onSubmit }) => {
   const [city, setCity] = useState("Warszawa");
   const weatherData = useGetData(city);

   const handleInputChange = (e) => {
      setCity(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(city);
   };

   return (
      <form

         className="weather-form" >
         <input
            type="text"
            placeholder="Wprowadź nazwę miasta"
            value={city}
            onChange={handleInputChange}
            className="city-input"
         />
         <button
            onSubmit={handleSubmit}
            className="submit-button">
            Sprawdź
         </button>
      </form>
   );
};

export default WeatherForm;
