import styled, { css } from 'styled-components';

export const StyledNavBar = styled.nav`
  align-items: center;
  background-color: #111;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  padding-top: 60px;
  position: fixed;
  right: 0;
  top: 0;
  transition: 0.5s;
  width: ${(props) => (props.open ? '100%' : '0px')};
  z-index: 1;

  svg {
    color: #9f9b9f;
    cursor: pointer;
    font-size: 36px;
    height: 26px;
    margin: 5px;
    transition: 0.3s;
  }

  a {
    color: #9f9b9f;
    display: block;
    font-size: 25px;
    padding: 8px;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover,
  svg:hover {
    color: #03dd20;
  }

  ${(props) => css`
    a:nth-child(${props.page}) {
      color: #03dd20;
    }
  `}

  .social-links {
    display: flex;
  }

  @media screen and (min-width: 769px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: auto;
    padding: 5px 10px;
    position: initial;
    transition: 0.5s;
    width: 100%;

    a {
      font-size: 1.4rem;
      margin-left: 10px;
      padding-left: 10px;
      text-decoration: none;
      transition: 0.3s;
    }

    .social-links {
      display: flex;
      position: absolute;
      right: 30px;
    }
  }
`;
