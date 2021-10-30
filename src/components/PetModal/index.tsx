import { useEffect, useState } from 'react';
import usePetModal from '../../hooks/usePetModal';
import useAuth from '../../hooks/useAuth';
import { FiX } from 'react-icons/fi';
import reverseGeocode from 'latlng-to-zip';
import axios from 'axios';

import { theme } from '../../styles';
import * as S from './styles';
import { PetGallery } from './PetGallery';
import { LocationInfo } from '../../types';
import { RemovePet } from './RemovePet';

export const PetModal = () => {
  const [petLocationInfo, setPetLocationInfo] = useState<LocationInfo>();

  const { isOpen, toggleModal, pet } = usePetModal();
  const { user } = useAuth();

  useEffect(() => {
    if (!pet) return;

    const { latitude, longitude } = pet;

    reverseGeocode(
      { latitude, longitude },
      process.env.NEXT_PUBLIC_MAPS_API_KEY,
    )
      .then(cep => {
        axios
          .get(`https://brasilapi.com.br/api/cep/v2/${cep}`)
          .then(response => setPetLocationInfo(response.data));
      })
      .catch(err => console.log(err));
  }, [pet]);

  useEffect(() => {
    console.log(petLocationInfo);
  }, [petLocationInfo]);

  if (pet && user) {
    return (
      <S.PetModal isOpen={isOpen}>
        <PetGallery images={pet.fotos} description={pet.caracteristicas} />

        <S.PetInfo className="info">
          <div className="close" onClick={toggleModal}>
            <FiX color={theme.color.text} size={24} />
          </div>

          <div className="infoHeader">
            <div className="petInfo">
              <span>{pet.status || 'perdido'}</span>
              <h1>{pet.nomeAnimal}</h1>
              <p>
                ({pet.raca} / {pet.cor})
              </p>
            </div>
            <div className="locationInfo">
              {petLocationInfo ? (
                <>
                  <h3>
                    {petLocationInfo.city} - {petLocationInfo.state}
                  </h3>
                  <p>
                    <span>{petLocationInfo.street}, </span>
                    <span>{petLocationInfo.neighborhood}</span>
                  </p>
                </>
              ) : (
                ''
              )}
            </div>
          </div>

          <div className="description">
            <h3>Sobre o pet:</h3>
            <p>{pet.caracteristicas}</p>
          </div>

          <div className="buttonContainer">
            {pet.email !== user.email ? (
              <a
                href={`https://api.whatsapp.com/send?phone=${pet.celular}&text=Ol%C3%A1%2C%20acho%20que%20vi%20seu%20pet!`}
                target="_blank"
                className="whatsapp"
              >
                {pet.status === 'perdido'
                  ? 'Eu vi esse pet'
                  : 'Esse é o meu pet'}
              </a>
            ) : (
              <RemovePet
                message={
                  pet.status === 'perdido' ? 'Achei meu pet' : 'Remover pet'
                }
              />
            )}
          </div>
        </S.PetInfo>
      </S.PetModal>
    );
  }

  return <div></div>;
};
