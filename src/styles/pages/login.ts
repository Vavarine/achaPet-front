import styled from 'styled-components';

import { flexCenter, rem, theme } from '../index';

export const LoginContainer = styled.div`
  height: 100vh;
  flex-direction: column;

  ${flexCenter()};

  h1 {
    margin-bottom: ${rem(1)};
    color: ${theme.color.red};
  }
`;
