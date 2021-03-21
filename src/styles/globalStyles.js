import styled, { createGlobalStyle } from 'styled-components';

import bgImageLandscape from '../images/bg-image-landscape.jpg';
// import bgImagePortrait from '../images/bg-image-portrait.png';

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
  }

  @media screen and (min-width: 769px) {
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
  margin: 60px auto;
  width: 80%;
`;

export const MainHeader = styled.header`
  background-color: #000;
  display: flex;
  justify-content: flex-end;

  svg {
    color: white;
    font-size: 36px;
    font-weight: 600;
    height: 26px;
    margin: 24px;
  }

  @media screen and (min-width: 769px) {
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: space-between;

    .close-menu,
    .open-menu {
      display: none;
    }
  }
`;
