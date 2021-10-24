import styled from 'styled-components';
import Modal from 'react-modal';

import { flexCenter, rem, theme } from '../../styles/index';

export const ModalContainer = styled(Modal)`
  z-index: 10000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;

  max-width: 306px;
  max-height: 582px;

  background: #f9f9f9;
  border-radius: 10px;

  padding: 40px;

  overflow: hidden;

  ${flexCenter()};
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: ${rem(18)};
  font-family: ${theme.font.secondary};

  margin-bottom: 40px;
`;

export const ButtonClose = styled.button`
  position: fixed;
  top: 0;
  right: 0;

  background: transparent;
  border: none;

  padding: 10px;
`;

export const ContainerLostorFind = styled.div``;

export const SubTitle = styled.h5`
  font-size: ${rem(12)};
  font-family: ${theme.font.secondary};

  margin-bottom: 5px;
`;

export const ButtonsContainer = styled.div`
  ${flexCenter()};
  border: 1px solid ${theme.color.border_input};

  border-radius: 8px;

  margin-bottom: 30px;
`;

export const ButtonLost = styled.button`
  border: 2px solid ${theme.color.border_input};
  border-right: transparent;
  border-radius: 8px 0px 0 8px;
  background: #fff;
  font-size: ${rem(14)};
  height: 46px;
  width: 50%;

  font-family: ${theme.font.secondary};

  ${flexCenter()}
  transition-duration: 100ms;

  &.active {
    border-radius: 8px;
    background: ${theme.color.background_button};
    border-color: ${theme.color.border_red};
    border-right: 2px solid ${theme.color.border_red};
  }
`;

export const ButtonFind = styled.div`
  border: 2px solid ${theme.color.border_input};
  border-left: 0;
  border-radius: 0 8px 8px 0;
  background: #fff;
  font-size: ${rem(14)};
  height: 46px;
  width: 50%;

  font-family: ${theme.font.secondary};

  ${flexCenter()};

  transition-duration: 100ms;
  &.active {
    border-radius: 8px;
    background: ${theme.color.background_green};
    border: 2px solid ${theme.color.border_green};
    border-left: 2px solid ${theme.color.border_green};
  }
`;

export const FormPet = styled.div``;

export const FormWrapper = styled.div``;

export const Label = styled.label`
  font-size: ${rem(12)};
  font-family: ${theme.font.secondary};

  padding-left: 10px;
  margin-bottom: 5px;

  display: inline-block;
`;

export const Input = styled.input`
  border: 1px solid ${theme.color.border_input};
  width: 100%;
  height: 42px;

  border-radius: 8px;

  margin-bottom: 15px;

  padding: 0 10px 0 15px;

  box-sizing: border-box;

  outline: ${theme.color.border_input};
`;

export const Select = styled.select`
  border: 1px solid ${theme.color.border_input};
  width: 100%;
  height: 42px;

  border-radius: 8px;

  margin-bottom: 10px;

  padding: 0 10px 0 15px;

  box-sizing: border-box;

  outline: ${theme.color.border_input};
`;

export const NextPage = styled.div`
  ${flexCenter()};
  justify-content: space-between;

  margin: 20px 0;
`;

export const ProgressContainer = styled.div`
  ${flexCenter()};
`;

export const ProgressContainerBolls = styled.div`
  ${flexCenter()};

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: ${theme.color.blue_300};
    border-radius: 50%;
  }
`;

export const ProgressContainerLine = styled.div`
  display: inline-block;

  width: 26px;
  height: 2px;

  background: ${theme.color.blue_300};
  margin: 0 2px;
`;

export const buttonNext = styled.button`
  background: ${theme.color.blue_500};
  border-radius: 8px;
  border: 0;
  color: ${theme.color.white};
  height: 27px;
`;
