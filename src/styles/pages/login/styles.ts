import styled from 'styled-components';

import { flexCenter, rem, theme } from '../../index';

export const LoginContainer = styled.div`
  height: 100vh;

  ${flexCenter()};

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
