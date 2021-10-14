import styled from 'styled-components';
import { rem, flexCenter, theme } from '../../styles/index';

export const Container = styled.div`
  ${flexCenter()};
  justify-content: space-between;
  flex-direction: column;
  font-family: ${theme.font.secondary};

  width: 100%;
  max-width: 280px;
  padding: 50px 10px;

  box-shadow: 1px 10px 11px -1px rgb(0 0 0 / 59%);

  position: relative;

  &::before {
    content: '"';
    font-size: ${rem(80)};
    font-weight: bold;
    color: #828282;

    position: absolute;
    top: 10px;
    left: 5px;
  }
  &::after {
    content: '"';
    font-size: ${rem(80)};
    font-weight: bold;
    color: #828282;

    position: absolute;
    bottom: -10px;
    right: 5px;
  }
`;
export const Text = styled.div`
  color: #828282;
  font-size: ${rem(18)};
  text-align: center;

  margin-bottom: 10px;
`;
export const Author = styled.div`
  font-size: ${rem(24)};
  color: #484747;
`;
export const Data = styled.div`
  font-size: ${rem(12)};
  color: #484747;
`;
