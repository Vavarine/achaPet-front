import styled from 'styled-components';
import Modal from 'react-modal';

import {
  customScrollbar,
  flexCenter,
  rem,
  theme,
  colorShade,
} from '../../styles/index';

export const PetModal = styled(Modal)`
  position: absolute;
  height: 310px;
  width: 670px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;

  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  outline-color: transparent;

  .close {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .info {
    flex-grow: 1;
  }
`;

export const Images = styled.div`
  width: 276px;
  padding: 3px;
`;

export const PetInfo = styled.div`
  padding: 7px 32px 17px 12px;
  display: flex;
  flex-direction: column;

  .infoHeader {
    margin-bottom: 56px;

    display: flex;
    justify-content: space-between;

    .petInfo {
      font-weight: 300px;

      span {
        display: block;
        line-height: 22px;
        margin-bottom: 18px;
      }

      h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 4px;
      }

      p {
        font-size: 16px;
      }
    }

    .locationInfo {
      text-align: right;
      max-width: 60%;

      h3 {
        font-weight: bold;
        font-size: 20px;
        line-height: 22px;

        margin-bottom: 20px;
      }

      p {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }

  .description {
    margin-bottom: auto;

    h3 {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }

  .buttonContainer {
    ${flexCenter()}

    .whatsapp {
      height: 48px;
      padding-bottom: 3px;
      width: 80%;

      border-radius: 8px;
      font-size: 18px;
      color: white;
      text-decoration: none;

      background-color: #50acc3;
      transform: translateX(10px);
      transition: 0.2s;

      ${flexCenter()}

      :hover {
        background-color: ${colorShade('#50ACC3', -10)};
      }
    }
  }
`;
