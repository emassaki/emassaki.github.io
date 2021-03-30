import styled from 'styled-components';

export const MainHeader = styled.header`
  background-color: #000;

  .header-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 80%;
    padding: 5px 20px;

    p {
      color: white;
      font-weight: 600;
      display: block;
      font-size: 25px;
    }

    svg {
      color: white;
      font-size: 36px;
      font-weight: 600;
      height: 26px;
      margin: 24px 0;
    }
  }

  @media screen and (min-width: 768px) {
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: space-between;
    position: initial;

    .header-mobile, .close-menu { 
      display: none;
    }
  }
`;
