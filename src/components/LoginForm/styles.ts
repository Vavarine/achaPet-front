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
    }
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.text};
  font-size: ${rem(32)};
  font-weight: 500;

  margin-bottom: 60px;
`;

export const Form = styled.form`
  &::-webkit-validation-bubble-message {
    display: none;
  }
`;

export const LoginWithGoogle = styled.button`
  position: relative;
  height: 43px;
  width: 384px;

  font-size: ${rem(16)};
  ${flexCenter()}

  background: transparent;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 42%);

  transition-duration: 300ms;

  margin-bottom: 50px;
  svg {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    background: #fff;
    box-shadow: 0px 1px 24px 0px rgb(0 0 0 / 42%);
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const lineOr = styled.span`
  height: 1px;
  background-color: #333;
  text-align: center;
  ${flexCenter()}
  width: 100%;
  position: relative;

  margin-bottom: 50px;
  span {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    position: absolute;
    top: -8px;
    padding: 0 10px;
  }
`;

export const LoginWithEmailAndPass = styled.div`
  ${flexCenter()}
  align-items: flex-start;
  flex-direction: column;

  label {
    font-size: ${rem(16)};
    padding: 5px;
  }

  .errorMessage {
    display: none;
  }

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

export const RememberMeAndResetPassword = styled.div`
  ${flexCenter()};
  justify-content: space-between;

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
  justify-content: flex-end;
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

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%auto;
    padding: 10px;

    transition-duration: 200ms;

    &:hover {
      background: ${({ theme }) => theme.color.blue_darker};
    }
  }
`;

export const DontHaveAccount = styled.div`
  ${flexCenter()};
  span {
    font-size: ${rem(14)};
  }

  a {
    display: inline-block;
    margin-left: 5px;
    color: ${({ theme }) => theme.color.blue_500};
  }
`;
