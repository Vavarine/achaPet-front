import styled from 'styled-components';
import { customScrollbar, flexCenter, rem, theme } from '../../../styles/index';

export const Images = styled.div`
  width: 276px;
  padding: 3px;

  .selectedImageContainer {
    img {
      width: 276px;
      height: 240px;
      border-radius: 8px;
      object-fit: cover;
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
