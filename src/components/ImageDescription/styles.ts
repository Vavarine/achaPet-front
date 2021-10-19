import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { rem, flexCenter } from '../../styles/index';

interface props {
  sizeFont: string;
  weightFont: string;
}

export const Container = styled.div`
  background: ${({ theme }) => theme.color.blue_300};
  display: flex;
  justify-content: flex-end;
  width: 60%;
  height: 100vh;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  /* max-width: 700px; */
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.text};
  font-weight: bold;
  font-size: 4rem;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    font-size: ${rem(32)};
  }
`;

export const ContainerDescrition = styled.div`
  display: flex;

  > div {
    flex: 1;
  }
`;

export const DescritionTitle = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-weight: 500;
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: ${rem(18)};
  }
`;

export const Descrition = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-weight: 500;
  font-size: 2.25rem;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 0.87rem;
  }
`;

export const MoreLink = styled.a`
  color: ${({ theme }) => theme.color.blue_darker};
  font-size: 1rem;
  text-decoration: underline;

  cursor: pointer;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LogoImage = styled.img`
  min-width: 250px;
  height: 250px;

  @media (max-width: 1024px) {
    display: none;
  }
`;
