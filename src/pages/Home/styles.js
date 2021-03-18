import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex: 1;
  margin-left: 200px;
  color: white;
  background-color: blue;

  @media screen and (max-width: 450px) {
    margin-left: 0px;
  }
`;
