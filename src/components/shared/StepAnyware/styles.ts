import styled, { css } from 'styled-components';
import { flexCenter, theme } from '../../../styles';

export const NextPage = styled.div`
  ${flexCenter()};
  justify-content: space-between;

  margin: 20px 0 0;
  width: 100%;
  height: 27px;
`;

export const ProgressContainer = styled.div`
  ${flexCenter()};
`;

export const ProgressContainerBolls = styled.div<{ active: boolean }>`
  ${flexCenter()};

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid ${theme.color.blue_300};
    border-radius: 50%;

    ${props =>
      props.active &&
      css`
        background: ${theme.color.blue_300};
      `};
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

  transition-duration: 300ms;
`;

export const buttonStepBack = styled.button`
  background: transparent;
  border-radius: 8px;
  border: 0;
  color: ${theme.color.red};
  height: 27px;
`;
