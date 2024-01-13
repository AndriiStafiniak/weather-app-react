import { createGlobalStyle } from "styled-components";

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
  background-image: url(../public/backround.avif);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  background-repeat: no-repeat;
}
`;