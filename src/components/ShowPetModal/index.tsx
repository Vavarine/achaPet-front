import useReState from '@raulpesilva/re-state';
import React, { useEffect, useState } from 'react';
import Geocode from 'react-geocode';
import Modal from 'react-modal';
import StepWizard from 'react-step-wizard';
import { User } from '../../types';
import { Step1 } from '../shared/Step01';
import { Step2 } from '../shared/Step02';
import { Step3 } from '../shared/Step03';
import { StepSucess } from '../shared/StepSucess';
import * as S from './styles';

Modal.setAppElement('#root');

export interface StepWizardChildrenProps {
  nextStep?: () => void;
  previousStep?: () => void;
  goToStep?: (step: number) => void;
  closeModal: () => void;
  isFirst: boolean;
  isThird: boolean;
}

type LatLongProps = {
  latlng: {
    lat: string;
    lng: string;
  };
  clearPosition: () => void;
  user: User;
};

interface stepWizardProps {
  previousStep: number;
  activeStep: number;
}

export const ModalPet = ({
  latlng: { lat, lng },
  clearPosition,
  user,
}: LatLongProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const [number, setNumber] = useReState('numberClickMap', null);
  const [street, setStreet] = useReState('streetClickMap', null);
  const [city, setCity] = useReState('cityClickMap', null);
  const [state, setState] = useReState('stateClickMap', null);
  const [currentStep, setCurrentStep] = useReState('currentStepWizard', null);

  Geocode.setApiKey(process.env.NEXT_PUBLIC_MAPS_API_KEY);
  Geocode.setLanguage('pt-BR');

  const latitude = lat.toString();
  const longitude = lng.toString();

  const requestCEP = async () => {
    if (!lat) return;

    const response = await Geocode.fromLatLng(latitude, longitude).then(
      response => {
        const address = response.results[0].formatted_address;
        let city: string, state: string, street: string, number: number;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case 'administrative_area_level_2':
                city = response.results[0].address_components[i].long_name;
                break;
              case 'administrative_area_level_1':
                state = response.results[0].address_components[i].long_name;
                break;
              case 'route':
                street = response.results[0].address_components[i].long_name;
                break;
              case 'street_number':
                number = response.results[0].address_components[i].long_name;
                break;
            }
          }
        }

        setNumber(number);
        setCity(city);
        setState(state);
        setStreet(street);
      },
      error => {
        console.error(error);
      },
    );

    return response;
  };
  useEffect(() => {
    requestCEP();
    setCurrentStep(1);
  }, []);

  function closeModal() {
    setModalIsOpen(!modalIsOpen);
    clearPosition();
  }

  const handleStepChange = ({ previousStep, activeStep }: stepWizardProps) => {
    console.log('activeStep :>> ', activeStep);

    setCurrentStep(activeStep);
  };

  return (
    <S.ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      isThird={currentStep === 3}
      isFourth={currentStep === 4}
    >
      <StepWizard onStepChange={handleStepChange}>
        <Step1
          closeModal={closeModal}
          isFirst={currentStep === 1}
          isThird={currentStep === 3}
        />
        <Step2
          closeModal={closeModal}
          isFirst={currentStep === 1}
          isThird={currentStep === 3}
        />
        <Step3
          isFirst={currentStep === 1}
          isThird={currentStep === 3}
          closeModal={closeModal}
          latitude={latitude}
          longitude={longitude}
          user={user}
        />
        <StepSucess
          closeModal={closeModal}
          isFirst={currentStep === 1}
          isThird={currentStep === 3}
        />
      </StepWizard>
    </S.ModalContainer>
  );
};
