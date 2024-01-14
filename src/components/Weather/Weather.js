import { useGetData } from "../../getData";
import { useState } from "react";
import { Button, Form, Input, Wrapper, Paragraph } from "./styled";

const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);

export const Weather = () => {
   const [city, setCity] = useState("");
   const [weatherData, setWeatherData] = useState(null)
   const setWeatherDataParam = useGetData(city);


   const handleInputChange = (event) => {
      setCity(event.target.value)
   };
   const handleSubmit = (event) => {
      event.preventDefault();
   };
   const handleWeatherData = () => setWeatherData(setWeatherDataParam);

   return (
      <Wrapper>
         <Form onSubmit={handleSubmit}>
            <Input
               onChange={handleInputChange}
               placeholder="wpisz nazwe miasta"
               value={city}
               type="text" />
            <Button
               onClick={handleWeatherData}>
               Sprawdz
            </Button>
         </Form>
         {weatherData ? (
            <>
               <Paragraph>{weatherData.name}</Paragraph>
               <Paragraph>Temperatura: {kelvinToCelsius(weatherData.main.temp)}°C</Paragraph>
               <Paragraph>Temp. min: {kelvinToCelsius(weatherData.main.temp_min)}°C</Paragraph>
               <Paragraph>Temp. max: {kelvinToCelsius(weatherData.main.temp_max)}°C</Paragraph>
               <Paragraph>Ciśnienie: {weatherData.main.pressure} hPa</Paragraph>
               <Paragraph>Wilgotność: {weatherData.main.humidity}%</Paragraph>
               <Paragraph>Prędkość wiatru: {weatherData.wind.speed} m/s</Paragraph>
               <Paragraph>Kierunek wiatru: {weatherData.wind.deg}°</Paragraph>
               <Paragraph>Porywy wiatru: {!weatherData.wind.gust ? "Nie występują" : weatherData.wind.gust + " m/s"}</Paragraph>
            </>
         ) : (
            <Paragraph>Brak danych pogodowych</Paragraph>
         )}
      </Wrapper>
   );
};