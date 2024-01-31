import { useState } from "react";
import axios from "axios";
import {
   Button,
   Form,
   Input,
   Wrapper,
   Paragraph,
   StyledSection,
   Title,
   StyleSpan,
} from "./styled";
import { StyledLoader } from "./Loader/styled";


const API_KEY = "668730bb0fd34e0e2f50c518e7230127";
export const Weather = () => {
   const [city, setCity] = useState("");
   const [weatherData, setWeatherData] = useState({
      state: "idle",
      data: null,
   });

   const handleInputChange = (event) => {
      setCity(event.target.value)
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      setWeatherData({
         status: "loading",
         data: null,
      });

      setTimeout(async () => {

         try {
            const cityResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
            const lon = cityResponse.data[0].lon;
            const lat = cityResponse.data[0].lat

            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

            setWeatherData({
               status: "success",
               data: data.data,
            });
         } catch (error) {
            setWeatherData({
               status: "error",
               data: null,
            });
         }
      }, 1000)

   };

   return (
      <Wrapper>
         <Title>Pogoda</Title>
         <StyledSection>
            <Form onSubmit={handleSubmit}>
               <Input
                  value={city}
                  onChange={handleInputChange}
                  placeholder="wpisz nazwe miasta"
                  type="text" />
               <Button type="submit">
                  Sprawdź
               </Button>
            </Form>
         </StyledSection>
         {weatherData.status === "loading" ? (
            <StyledLoader />
         ) : (
            <StyledSection>
               {weatherData.status === "success" && (
                  <>
                     <Paragraph>Name: <StyleSpan>{weatherData.data.name || "Niema danych z jakiegos powodu"}</StyleSpan></Paragraph>
                     <Paragraph>Temperatura: <StyleSpan>{weatherData.data.main.temp || "Niema danych z jakiegos powodu"}°C</StyleSpan></Paragraph>
                     <Paragraph>Temp. min: <StyleSpan>{weatherData.data.main.temp_min}°C</StyleSpan></Paragraph>
                     <Paragraph>Temp. max: <StyleSpan>{weatherData.data.main.temp_max}°C</StyleSpan></Paragraph>
                     <Paragraph>Ciśnienie: <StyleSpan>{weatherData.data.main.pressure || "Niema danych z jakiegos powodu"} hPa</StyleSpan></Paragraph>
                     <Paragraph>Wilgotność: <StyleSpan>{weatherData.data.main.humidity || "Niema danych z jakiegos powodu"}%</StyleSpan></Paragraph>
                     <Paragraph>Prędkość wiatru: <StyleSpan>{weatherData.data.wind.speed || "Niema danych z jakiegos powodu"} m/s</StyleSpan></Paragraph>
                     <Paragraph>Kierunek wiatru: <StyleSpan>{weatherData.data.wind.deg || "Niema danych z jakiegos powodu"}°</StyleSpan></Paragraph>
                     <Paragraph>Porywy wiatru:<StyleSpan>{!weatherData.data.wind.gust ? " Nie występują" : weatherData.data.wind.gust + " m/s"}</StyleSpan></Paragraph>
                  </>
               )}
               {weatherData.status === "error" && (
                  <Paragraph>Błąd podczas pobierania danych</Paragraph>
               )}
            </StyledSection>
         )}
      </Wrapper>
   )
};


