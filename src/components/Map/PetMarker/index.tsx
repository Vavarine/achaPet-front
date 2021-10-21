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
  const { latitude, longitude, imagens, status } = pet;
  const position = [parseFloat(latitude), parseFloat(longitude)];

  const mapIcon = getMapIcon(imagens[0], status);

  useEffect(() => {
    console.log('petmarker', pet);
  }, []);

  return (
    <Marker position={[position[0], position[1]]} icon={mapIcon}>
      <S.PetCard
        closeButton={false}
        minWidth={240}
        maxWidth={240}
        className="map-popup"
      >
        Juquinha
      </S.PetCard>
    </Marker>
  );
};

export default PetMarker;
