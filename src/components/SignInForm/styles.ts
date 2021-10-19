import styled from 'styled-components';

import { rem, flexCenter } from '../../styles/index';

export const ContainerLogin = styled.div`
  width: 45%;
  ${flexCenter()};
  justify-content: space-between;
  flex-direction: column;

  padding: 90px 100px 30px;

  height: 100vh;

  background: ${({ theme }) => theme.color.background};

  @media (max-width: 1024px) {
    width: 100%;
    padding: 40px;

    form {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    }
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.text};
  font-size: ${rem(32)};
  font-weight: 500;

  margin-bottom: 60px;
`;

export const LoginWithEmailAndPass = styled.div`
  ${flexCenter()}
  align-items: flex-start;
  flex-direction: column;

  width: 348px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  label {
    font-size: ${rem(16)};
    padding: 5px;
  }

  .errorMessage {
    display: none;
  }

  #name,
  #email,
  #password {
    width: 100%;
    height: 42px;
    padding: 5px 5px 5px 20px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.text};

    margin-bottom: 25px;
    background: transparent;

    &.error {
      border: 1px solid ${({ theme }) => theme.color.red};

      ~ .errorMessage {
        display: inline-block;
        font-size: 12px;
        color: ${({ theme }) => theme.color.red};
        transform: translateY(-20px);
      }
    }
  }
`;

export const AcceptTerms = styled.div`
  ${flexCenter()};
  justify-content: flex-start;

  margin-bottom: 60px;
  width: 100%;
  div {
    display: flex;
    align-items: center;
  }

  label {
    font-family: 'Roboto', sans-serif;
    font-size: ${rem(13)};
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-size: ${rem(13)};
    color: ${({ theme }) => theme.color.blue_500};
  }
`;

export const SubmitButton = styled.div`
  ${flexCenter()};
  width: 100%;

  button {
    background: ${({ theme }) => theme.color.blue_500};
    width: 185px;
    height: 42px;
    border: 0;
    border-radius: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: ${rem(20)};
    color: #fff;

    ${flexCenter()};
    width: 100%;
    padding: 10px;

    transition-duration: 200ms;

    &:hover {
      background: ${({ theme }) => theme.color.blue_darker};
    }
  }
`;

export const IHaveAccount = styled.div`
  ${flexCenter()};
  span {
    font-size: ${rem(14)};
  }

  a {
    color: ${({ theme }) => theme.color.blue_500};
  }
`;
