import styled from 'styled-components';

import { customScrollbar, flexCenter, rem, theme } from '../../index';

export const InstitutionalContainer = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-columns: calc(((100vw - 1200px) / 2) + 330px) auto;
  background-color: ${theme.color.background};

  ${customScrollbar()}

  main {
    margin-right: calc((100vw - 1200px) / 2);
    padding: ${rem(42)} ${rem(20)};

    text-align: justify;
  }

  h1 {
    margin-bottom: ${rem(32)};

    color: ${theme.color.red};
    font-size: ${rem(24)};
    font-weight: bold;
  }

  h2 {
    margin-top: ${rem(30)};
    color: ${theme.color.red};
    font-weight: bold;
  }

  p {
    margin: ${rem(16)} 0;
    font-size: ${rem(16)};
    line-height: ${rem(20)};
  }
`;
