import styled from 'styled-components';

export const StyledFooter = styled.footer`
  align-items: center;
  background-color: #000;
  bottom: 0;
  display: flex;
  justify-content: center;
  margin: 30px auto 0;
  position: fixed;
  width: 100%;
  z-index: 5;

  p {
    color: white;
    font-weight: 600;
    padding: 8px;
  }

  .social-links {
    align-items: center;
    display: flex;
    padding: 10px;

    a {
      align-items: center;
      color: white;
      cursor: pointer;
      display: flex;
      text-decoration: none;
      transition: 0.5s;
    }

    svg {
      color: white;
      font-size: 26px;
      height: 26px;
      margin: 8px;
      transition: 0.3s;
    }

    .github:hover {
      background-color: white;
      border-radius: 50%;
      color: black;
    }

    .linkedin:hover {
      background-color: white;
      border-radius: 3px;
      color: #0077b5;
    }

    .whatsapp {
      align-items: center;
      color: #25d366;
      display: flex;
      font-size: 1rem;
      font-weight: 600;
      position: relative;

      .tooltip {
        background-color: #000;
        border: 3px solid #25d366;
        border-radius: 5px;
        display: none;
        bottom: 120%;
        left: -350%;
        margin-left: 8px;
        padding: 5px 0;
        position: absolute;
        text-align: center;
        width: 180px;

        &::after {
          border-color: #25d366 transparent transparent transparent;
          border-style: solid;
          border-width: 10px;
          content: '';
          margin-left: -26px;
          position: absolute;
          left: 100%;
          top: 100%;
        }
      }

      &:hover {
        svg {
          background-color: #25d366;
          border-radius: 50% 50% 50% 0;
          color: white;
        }
        .tooltip {
          display: block;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .social-links {
      .whatsapp {
        .tooltip {
          left: 100%;
          bottom: 10%;

          &::after {
            border-color: transparent #25d366 transparent transparent;
            margin-top: -10px;
            left: auto;
            right: 100%;
            top: 50%;
          }
        }
      }
    }
  }
`;
