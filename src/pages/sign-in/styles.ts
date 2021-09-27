import styled from 'styled-components';

import { flexCenter, rem, theme } from '../../styles/index';

export const SignInContainer = styled.div`
  height: 100vh;
  flex-direction: column;

  ${flexCenter()};

  h1 {
    margin-bottom: ${rem(1)};
    color: ${theme.color.red};
  }
`;
