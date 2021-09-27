import styled from 'styled-components';

import { rem, flexCenter, theme } from '../../styles/index';

export const Header = styled.header`
  ${flexCenter()};
  justify-content: space-between;
  flex-direction: column;

  height: 100vh;
  width: 100%;
  padding: 20px 0;
  background-color: ${theme.color.blue_header};

  color: ${({ theme }) => theme.color.white};
`;

export const LogoContainer = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 80px;

  svg {
    height: 80px;
    width: 80px;
    color: ${({ theme }) => theme.color.white};

    margin-bottom: 180px;
  }
`;

export const Logo = styled.h1`
  transform: rotate(0.75turn);
  color: ${theme.color.text};

  font-size: ${rem(62)};
  font-weight: 500;
`;

export const ContainerMenu = styled.section`
  ${flexCenter()};
  width: 64px;
  height: 64px;

  border-radius: 50%;
  background: ${theme.color.text_description};
`;
