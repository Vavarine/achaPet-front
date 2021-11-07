import styled from 'styled-components';
import { flexCenter, rem, theme } from '../../../styles';

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

export const ContainerLostorFind = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

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
