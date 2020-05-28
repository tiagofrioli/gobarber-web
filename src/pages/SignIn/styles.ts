import styled from 'styled-components';
import { shade } from 'polished';
import backImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;

  form {
    margin: 30px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 20px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    display: flex;
    align-items: center;
    transition: background-color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backImg}) no-repeat center;
  background-size: cover;
`;
