import styled from 'styled-components';
import {
  customScrollbar,
  flexCenter,
  rem,
  theme,
  containerCenter,
} from '../../index';

export const Container = styled.article`
  ${containerCenter()};
  position: relative;
`;

export const ContainerBackground = styled.section`
  background: url('/assets/background-banner.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  ${containerCenter()};

  padding: 70px 70px 10px 70px;
`;

export const MainBanner = styled.section`
  ${flexCenter()};
  justify-content: space-between;
`;

export const TextContainerMainBanner = styled.div`
  h2 {
    ${flexCenter()};
    justify-content: flex-start;
    font-size: ${rem(80)};
    margin-bottom: 50px;
    font-weight: bold;

    img {
      width: 100px;
      height: auto;
    }
  }

  p {
    max-width: 555px;
    width: 100%;
    margin-bottom: 26px;

    font-family: ${theme.font.main};
    color: ${theme.color.text_description};
    font-size: ${rem(24)};

    line-height: 28px;
  }

  button {
    border: 0;

    width: 142px;
    height: 48px;

    font-family: ${theme.font.main};
    text-transform: uppercase;

    color: #ffffff;
    background: ${theme.color.blue_500};

    padding: 10px;
    border-radius: 5px;

    transition-duration: 300ms;

    &:hover {
      background: ${theme.color.blue_darker};
    }
  }
`;

export const MainBannerImg = styled.div``;

export const DescriptionContainer = styled.section`
  font-family: ${theme.font.secondary};
  ${flexCenter()};
  flex-direction: column;

  padding: 50px 20px;
  h2 {
    color: ${theme.color.blue_darker};
    font-weight: bold;
    font-size: ${rem(32)};
    margin-bottom: 15px;
  }

  h5 {
    font-size: ${rem(32)};
    font-weight: bold;
    margin-bottom: 40px;
  }

  p {
    font-size: ${rem(24)};
    color: #5b5a5a;
    max-width: 900px;
    text-align: center;
  }
`;

export const AdoptContainer = styled.section`
  ${flexCenter()};
  justify-content: space-between;

  padding: 50px 70px;

  background: url('/assets/line.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: ${theme.color.background};

  h2 {
    font-size: ${rem(48)};
    font-weight: bold;
    margin-bottom: 35px;
  }

  p {
    font-size: ${rem(24)};
    font-weight: 400;
    margin-bottom: 15px;
    font-family: ${theme.font.secondary};
    color: #5b5a5a;
  }

  a {
    ${flexCenter()};
    border: 0;

    width: 230px;
    height: 48px;

    font-family: ${theme.font.main};
    text-transform: uppercase;
    text-decoration: none;

    color: #ffffff;
    background: ${theme.color.blue_500};

    padding: 10px;
    border-radius: 5px;

    transition-duration: 300ms;

    &:hover {
      background: ${theme.color.blue_darker};
    }
  }
`;
export const AdoptContainerText = styled.section`
  width: 60%;
`;
export const AdoptContainerImg = styled.section`
  width: 40%;
`;

export const WhatPeopleSay = styled.section`
  ${flexCenter()};
  flex-direction: column;

  padding: 35px 70px;

  h2 {
    font-size: ${rem(32)};
    margin-bottom: 50px;

    strong {
      font-weight: bold;
    }
  }
`;

export const WhatPeopleSayWrapper = styled.div`
  ${flexCenter()};
  justify-content: space-between;

  width: 100%;
`;

export const MadeBy = styled.section`
  background: ${theme.color.background};
  ${flexCenter()};
  flex-direction: column;

  padding: 40px 0;

  h2 {
    font-size: ${rem(32)};
    margin-bottom: 30px;

    span {
      color: red;
    }
  }
`;
export const MadeByWrapper = styled.div`
  width: 100%;

  ${flexCenter()};
  flex-wrap: wrap;
`;
