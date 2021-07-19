import styled from 'styled-components';

import { rem, theme } from '../index';

export const MenuContainer = styled.div`
  height: 100vh;

  h1 {
    margin-bottom: ${rem(1)};

    font-size: ${rem(36)};
    color: ${theme.color.red};
  }
`;
