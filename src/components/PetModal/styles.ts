import styled from 'styled-components';
import Modal from 'react-modal';

import { customScrollbar, flexCenter, rem, theme } from '../../styles/index';

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
  padding: 7px 30px 17px 10px;
  display: flex;
  flex-direction: column;

  .infoHeader {
    display: flex;
    justify-content: space-between;

    .petInfo {
      font-weight: 300px;

      span {
        line-height: 22px;
      }

      h1 {
        font-size: 24px;
        font-weight: bold;
      }
    }

    .locationInfo {
      text-align: right;
      max-width: 60%;

      h3 {
        font-weight: bold;
        font-size: 20px;
        line-height: 22px;
      }

      p {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
