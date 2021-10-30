import styled from 'styled-components';
import Modal from 'react-modal';

import { customScrollbar, flexCenter, rem, theme } from '../../index';

export const HomeContainer = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-columns: 80px auto;
`;

export const PetModal = styled(Modal)`
  position: absolute;
  height: 310px;
  width: 615px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
