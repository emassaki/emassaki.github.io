import styled, { createGlobalStyle } from 'styled-components';

import bgImageLandscape from '../images/bg-image-landscape.jpg';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62,5%;
  }

  * {
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-attachment: fixed;
    background-color: #000;
    background-image: url(${bgImageLandscape});
    background-image: linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0)), url(${bgImageLandscape});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100vw;
    height: 100vh;
  }

  @media screen and (min-width: 768px) {
    body {
      background-image: linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0)), url(${bgImageLandscape});
      background-position: right;
      background-size: cover;
    }
  }
`;

export const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 80px;
  margin: 30px auto;
  width: 80%;
`;
