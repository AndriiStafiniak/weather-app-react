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
  font-family: 'Roboto Mono', monospace;
  background-image: url(${background});
  background-size: cover;
  position: relative;
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
}
`;