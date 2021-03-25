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
  z-index: 999;

  svg {
    color: white;
    cursor: pointer;
    font-size: 36px;
    height: 26px;
    margin: 5px;
    transition: 0.3s;
  }

  .page-links {
    display: flex;
    align-items: center;
    flex-direction: column;

    a {
      color: white;
      display: block;
      font-size: 25px;
      padding: 8px;
      text-decoration: none;
      transition: 0.5s;
    }
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
    margin: 20px;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: auto;
    padding: 5px 10px;
    position: initial;
    margin: auto;
    transition: 0.5s;
    width: 80%;

    .page-links {
      display: flex;
      flex-direction: row;

      a {
        font-size: 1.4rem;
        margin-right: 10px;
        text-decoration: none;
        transition: 0.3s;
      }
    }

    .social-links {
      display: flex;
      margin-right: 50px;

      a {
        margin: 5px;
        padding: 0;

        svg {
          margin: 0;
        }
      }
    }
  }
`;
