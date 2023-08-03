import React, { useState } from "react";

const WeatherForm = ({ onSubmit }) => {
   const [city, setCity] = useState("");

   const handleInputChange = (e) => {
      setCity(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(city);
   };

   return (
      <form className="weather-form" onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Wprowadź nazwę miasta"
            value={city}
            onChange={handleInputChange}
            className="city-input"
         />
         <button type="submit" className="submit-button">
            Sprawdź
         </button>
      </form>
   );
};

export default WeatherForm;
