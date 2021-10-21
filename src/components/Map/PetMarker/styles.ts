import { Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

import { rem, flexCenter } from '../../../styles/index';

export const PetCard = styled(Popup)`
  height: 80px;
  border-radius: 12px;

  .leaflet-popup-content-wrapper {
    height: 100%;
  }

  .leaflet-popup-tip {
    display: none;
  }
`;
