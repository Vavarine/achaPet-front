import styled from 'styled-components';
import { rem, flexCenter, theme } from '../../styles/index';

export const Container = styled.div`
  ${flexCenter()};
  flex-direction: column;
  font-family: ${theme.font.secondary};

  width: 100%;
  max-width: 280px;

  &::before {
    content: '"';
    font-size: ${rem(80)};
    font-weight: bold;
    color: #484747;
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
