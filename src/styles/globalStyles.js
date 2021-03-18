import styled, { createGlobalStyle } from 'styled-components';
import bgImageLandscape from '../images/bg-image-landscape.jpg';
import bgImagePortrait from '../images/bg-image-portrait.png';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62,5%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-attachment: fixed;
    background-color: #000;
    background-image: url(${bgImagePortrait});
    background-image: linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0)), url(${bgImagePortrait});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100vw;
  }

  @media screen and (min-width: 768px) {
    body {
      background-attachment: fixed;
      background-color: #000;
      background-image: url(${bgImageLandscape});
      background-image: linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0)), url(${bgImageLandscape});
      background-position: right;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;

export const Main = styled.main`
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  margin: 80px auto;
  width: 70%;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  background-color: #111;

  svg {
    color: white;
    font-size: 36px;
    margin: 24px;
    height: 26px;
    font-weight: 600;
  }

  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: space-between;

    .open-menu,
    .close-menu {
      display: none;
    }
  }
`;
