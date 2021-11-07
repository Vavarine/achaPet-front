import { flexCenter, theme } from './../../styles/index';
import styled from 'styled-components';

export const Footer = styled.footer`
  height: 70px;
  background: ${theme.color.text};

  ${flexCenter()};

  color: ${theme.color.white};
  font-family: ${theme.font.main};
`;
