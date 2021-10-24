import styled from 'styled-components';
import { customScrollbar, flexCenter, rem, theme } from '../../../styles/index';

export const Images = styled.div`
  width: 276px;
  padding: 3px;

  .selectedImageContainer {
    ${flexCenter()}
    border-radius: 8px;
    width: 276px;
    height: 240px;
    overflow: hidden;
    background: linear-gradient(129.16deg, #dddddd 0.65%, #eaeaea 104.09%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &.placeholder {
        height: 60px;
        width: 60px;
      }
    }
  }

  .imagesToSelectContainer {
    width: 276px;
    height: 62px;
    padding-top: 2px;
    display: flex;

    border-radius: 8px;
    column-gap: 3px;

    overflow-x: overlay;

    img {
      height: 100%;
      filter: brightness(0.6);

      cursor: pointer;

      &.selected {
        filter: brightness(1);
      }
    }

    ::-webkit-scrollbar {
      padding: 5px;
      height: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #33333360;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #333333;
    }
    ::-webkit-scrollbar-track {
      padding: 5px;
      background: transparent;
    }
  }
`;
