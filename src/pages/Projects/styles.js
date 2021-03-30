import styled from 'styled-components';

export const ProjectMain = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
  padding: 60px 30px;

  .title {
    font-size: 2.5rem;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .title {
      margin-bottom: 50px;
    }
  }
`;

export const ProjectContent = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .carousel {
    padding-bottom: 50px;
  }

  .carousel-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .image-container {
      width: 100%;
    }

    .text-container {
      line-height: 1.5;
      margin: 30px 0;
      padding: 0 30px;

      p {
        margin: 30px 0;
      }

      .project-links {
        a {
          background-color: rgba(255, 255, 255, 0.4);
          border: 2px solid white;
          border-radius: 5px;
          color: white;
          display: inline-block;
          font-weight: 600;
          height: 100%;
          margin: 5px 10px;
          padding: 5px 20px;
          text-decoration: none;
          transition: 0.3s;

          &:hover {
            background-color: white;
            color: #f0860c;
          }
        }
      }
    }
  }

  .arrows {
    background-color: rgba(0, 0, 0, 0.5);
    border: 2px solid white;
    border-radius: 50%;
    color: white;
    display: none;
    cursor: pointer;
    height: 30px;
    position: absolute;
    top: calc(50% - 15px);
    transition: 0.3s;
    width: 30px;
    z-index: 2;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  .indicator {
    background: #fff;
    border-radius: 4px;
    display: inline-block;
    height: 8px;
    margin: 0 4px;
    width: 40px;
  }

  .selected-indicator {
    background: #f0860c;
  }

  @media screen and (min-width: 768px) {
    .carousel-container {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 0 auto;
      padding: 0 60px;

      .image-container {
        min-width: 690px;
        width: 50%;
      }

      .text-container {
        line-height: 1.5;
        margin: 30px 0;
        min-width: 690px;
        padding: 0 30px;
        width: 50%;

        h2 {
          margin-bottom: 20px;
        }

        p {
          padding: 0 50px;
        }
      }
    }

    .arrows {
      display: initial;
    }
  }
`;
