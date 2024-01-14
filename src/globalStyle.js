import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpeg"


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-image: url(${background});
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
}
`;