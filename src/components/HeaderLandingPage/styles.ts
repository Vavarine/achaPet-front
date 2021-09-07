import styled from 'styled-components';

import { rem, flexCenter } from '../../styles/index';

export const ContainerHeader = styled.header`
  color: ${({ theme }) => theme.color.link};

  ${flexCenter()}
  justify-content: space-between;

  width: 100%;
  max-width: 1200px;

  margin: 0px auto 0;

  position: absolute;
  top: 20px;
  left: 0;
`;

export const LinkHome = styled.a`
  ${flexCenter()};
  font-size: ${rem(32)};
  font-weight: bold;
  cursor: pointer;

  img {
    width: 42px;
  }
`;

export const LinksNavigation = styled.nav`
  ${flexCenter()}
  font-size: ${rem(24)};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.link};

    margin-right: 50px;
    padding: 10px;
    border-radius: 5px;

    transition-duration: 300ms;

    &:hover {
      color: ${({ theme }) => theme.color.blue_500};
    }

    &:last-child {
      margin: 0;
      background: ${({ theme }) => theme.color.blue_500};
      color: #fff;
      text-transform: uppercase;
      transition-duration: 500ms;

      &:hover {
        background: ${({ theme }) => theme.color.blue_darker};
      }
    }
  }
`;
