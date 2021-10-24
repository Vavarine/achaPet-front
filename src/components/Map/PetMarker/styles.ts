import { Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

import { rem, flexCenter } from '../../../styles/index';

export const Status = styled.p``;

interface PetCardProps {
  status: string;
}

export const PetCard = styled(Popup)<PetCardProps>`
  height: 80px;
  border-radius: 18px;

  & > div {
    cursor: pointer;
  }

  .leaflet-popup-content-wrapper {
    background-color: ${props => {
      return props.status === 'perdido' ? '#FFF5F5' : '#FAFFF5';
    }};
    height: 100%;

    display: flex;
    justify-content: ${props =>
      props.status === 'perdido' ? 'flex-end' : 'flex-start'};
    text-align: ${props => (props.status === 'perdido' ? 'right' : 'left')};

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .leaflet-popup-content {
    margin: 5px;
    margin-top: 2px;
    padding: 5px;

    p {
      margin: 0;
    }

    .status {
      font-size: 10px;
    }

    .name {
      margin-top: 2px;

      line-height: 26px;
      font-size: 24px;
      font-weight: bold;
      text-transform: capitalize;
    }

    .breed {
      margin-top: auto;
      line-height: 22px;
      font-size: 20px;
      text-transform: capitalize;
    }
  }

  .leaflet-popup-tip {
    display: none;
  }
`;
