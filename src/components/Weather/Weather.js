import { GetData } from "../../getData";
import { useState } from "react";
import {
   Button,
   Form,
   Input,
   Wrapper,
   Paragraph,
   StyledSection,
   Title,
} from "./styled";
// import { StyledLoader } from "./Loader/styled";

const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);

export const Weather = () => {
   const [city, setCity] = useState("");
   const [weatherData, setWeatherData] = useState(null);


   const handleInputChange = (event) => {
      setCity(event.target.value)
   };
   const handleSubmit = (event) => {
      event.preventDefault();
      setWeatherData = GetData(city);
   };
   console.log(setWeatherData)


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
               <Button>
                  Sprawdź
               </Button>
            </Form>
         </StyledSection>

         {/* {
            // setWeatherDataParam.status === "loading"
               // ?
               // (<StyledLoader />)
               <p>Ladowanie danych</p>
               :
               <StyledSection>
                  <Paragraph>{!weatherData.name ? "" : weatherData.name}</Paragraph>
                  <Paragraph>Temperatura: {kelvinToCelsius(weatherData.main.temp)}°C</Paragraph>
                  <Paragraph>Temp. min: {kelvinToCelsius(weatherData.main.temp_min)}°C</Paragraph>
                  <Paragraph>Temp. max: {kelvinToCelsius(weatherData.main.temp_max)}°C</Paragraph>
                  <Paragraph>Ciśnienie: {weatherData.main.pressure} hPa</Paragraph>
                  <Paragraph>Wilgotność: {weatherData.main.humidity}%</Paragraph>
                  <Paragraph>Prędkość wiatru: {weatherData.wind.speed} m/s</Paragraph>
                  <Paragraph>Kierunek wiatru: {weatherData.wind.deg}°</Paragraph>
                  <Paragraph>Porywy wiatru:
                     {!weatherData.wind.gust
                        ? "Nie występują"
                        : weatherData.wind.gust + " m/s"}</Paragraph>
               </StyledSection>
         } */}


      </Wrapper >
   );
};