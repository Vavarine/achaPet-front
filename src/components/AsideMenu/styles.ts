import styled from 'styled-components';

import { rem, flexCenter } from '../../styles/index';

export const ContainerAsideMenu = styled.header`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.blue_darker};

  color: ${({ theme }) => theme.color.white};

  svg {
    height: 80px;
    width: 80px;
    color: ${({ theme }) => theme.color.white};
  }
`;
