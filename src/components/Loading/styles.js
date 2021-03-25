import styled from 'styled-components';
import { Main } from '../../styles/globalStyles';

export const StyledLoading = styled(Main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1, h2 {
    text-align: center;
    margin: 15px 0;
  }

  .loading {
    border: 8px solid rgba(0,0,0,0);
    border-radius: 50%;
    border-top: 8px solid white;
    border-bottom: 8px solid white;
    width: 70px;
    height: 70px;
    -webkit-animation: spin 1.5s linear infinite; /* Safari */
    animation: spin 1.5s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
