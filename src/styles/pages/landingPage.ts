import styled from 'styled-components';
import {
  customScrollbar,
  flexCenter,
  rem,
  theme,
  containerCenter,
} from '../index';

export const Container = styled.main``;
export const ContainerBackground = styled.section`
  background: url('/assets/background-banner.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  ${containerCenter()};

  padding: 10px 70px;
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
