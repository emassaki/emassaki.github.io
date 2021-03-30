import styled from 'styled-components';

export const AboutContent = styled.div`
  h1 {
    font-size: 3rem;
  }

  p {
    line-height: 2;
    margin-top: 30px;
    
    a {
      font-weight: 600;
      color: #2fc18c;
      text-decoration: none;
    }
  }

  @media screen and (min-width: 768px) {
    p {
      line-height: 2;
      margin-top: 30px;
      width: 70%;
    }
  }
`;
