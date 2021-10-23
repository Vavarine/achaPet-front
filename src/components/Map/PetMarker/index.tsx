import { useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';

import { Pet } from '../../../types';
import getMapIcon from './mapIcon';
import * as S from './styles';

interface PetMarkerProps {
  pet: Pet;
}

const PetMarker = ({ pet }: PetMarkerProps) => {
  const { latitude, longitude, fotos, status, raca, nomeAnimal } = pet;
  const position = [parseFloat(latitude), parseFloat(longitude)];

  const mapIcon = getMapIcon(fotos[0].url, status);

  return (
    <Marker position={[position[0], position[1]]} icon={mapIcon}>
      <S.PetCard
        closeButton={false}
        minWidth={140}
        maxWidth={140}
        className="map-popup"
        status={status}
      >
        <p className="status">{status}</p>
        <p className="name">{nomeAnimal}</p>
        <p className="breed">({raca})</p>
      </S.PetCard>
    </Marker>
  );
};

export default PetMarker;
