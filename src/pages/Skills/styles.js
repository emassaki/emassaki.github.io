import styled from 'styled-components';

export const SkillsContent = styled.div`
  .wrapper {
    border-left: 1px solid white;
    margin-bottom: 40px;
    padding-left: 10px;
    transition: 0.3s;

    h1 {
      font-size: 2.5rem;
      text-align: center;
    }

    div {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 30px 0;
      padding: 10px 20px;

      h3 {
        margin: 15px 0;
        min-width: 260px;
        transition: 0.5s;
        text-align: center;
        user-select: none;
        width: 40%;
      }

      h3:hover {
        color: #f0860c;
        font-size: 1.5rem;
      }
    }

    p {
      text-align: center;

      a {
        text-decoration: none;
        color: #f0860c;
        font-weight: 600;
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .wrapper {
      h1 {
        text-align: left;
      }

      div {
        justify-content: flex-start;
        width: 640px;

        h3 {
          margin-right: 20px;
          min-width: auto;
          width: 30%;
        }
      }

      p {
        margin-left: 30px;
        text-align: left;

        a {
          text-decoration: none;
          color: #f0860c;
          font-weight: 600;
        }
      }

      &:hover {
        border-left: 3px solid #f0860c;
      }
    }
  }
`;
