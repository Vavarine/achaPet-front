import { useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';

import getMapIcon from './mapIcon';
import usePetModal from '../../../hooks/usePetModal';

import { Pet } from '../../../types';
import * as S from './styles';

interface PetMarkerProps {
  pet: Pet;
}

const PetMarker = ({ pet }: PetMarkerProps) => {
  const { latitude, longitude, fotos, status, raca, nomeAnimal } = pet;
  const position = [parseFloat(latitude), parseFloat(longitude)];

  const { openModal } = usePetModal();
  const iconUrl = fotos[0]?.url || '/assets/petLogo.png';

  const mapIcon = getMapIcon(iconUrl, status);

  return (
    <Marker position={[position[0], position[1]]} icon={mapIcon}>
      <S.PetCard
        closeButton={false}
        minWidth={140}
        maxWidth={140}
        className="map-popup"
        status={status}
      >
        <div onClick={() => openModal(pet)}>
          <p className="status">{status}</p>
          <p className="name">{nomeAnimal}</p>
          <p className="breed">({raca})</p>
        </div>
      </S.PetCard>
    </Marker>
  );
};

export default PetMarker;
