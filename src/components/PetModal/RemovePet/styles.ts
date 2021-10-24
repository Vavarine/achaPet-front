import styled from 'styled-components';
import Modal from 'react-modal';

import {
  customScrollbar,
  flexCenter,
  rem,
  theme,
  colorShade,
} from '../../../styles/index';

export const Remove = styled.button`
  height: 48px;
  padding-bottom: 3px;
  width: 80%;

  border-radius: 8px;
  font-size: 18px;
  color: white;
  text-decoration: none;

  border: none;
  background-color: #50acc3;
  transform: translateX(10px);
  transition: 0.2s;

  ${flexCenter()}

  :hover {
    background-color: ${colorShade('#50ACC3', -10)};
  }
`;

export const Confirm = styled.div`
  p {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    column-gap: 10px;

    button {
      flex-grow: 1;
      height: 48px;

      border-radius: 8px;
      font-size: 18px;
      color: white;
      text-decoration: none;
      border: none;

      transition: 0.2s;

      &.cancel {
        background-color: #e63e3e;

        :hover {
          background-color: ${colorShade('#e63e3e', -10)};
        }
      }

      &.confirm {
        background-color: #3ee65a;

        :hover {
          background-color: ${colorShade('#3ee65a', -10)};
        }
      }
    }
  }
`;
