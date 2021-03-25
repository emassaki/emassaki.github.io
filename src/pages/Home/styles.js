import styled from 'styled-components';

export const HomeContent = styled.div`
  h1 {
    font-size: 3rem;
    margin: 20px 0;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.75rem;
  }

  .link-buttons {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    a {
      text-align: center;
      border-radius: 8px;
      border: 2px solid white;
      background-color: rgba(255, 255, 255, 0.2);
      text-decoration: none;
      color: white;
      padding: 10px;
      margin: 5px;
      transition: 0.3s;
    }

    a:hover {
      border-color: #03dd20;
      color: #03dd20;
    }
  }

  @media screen and (min-width: 768px) {
    .link-buttons {
      flex-direction: row;
    }
  }
`;
