import React, { useState } from 'react';
import Modal from 'react-modal';
import * as S from './styles';
import { GrFormClose } from 'react-icons/gr';
import StepWizard from 'react-step-wizard';

import reverseGeocode from 'latlng-to-zip';

Modal.setAppElement('#root');

type StepWizardChildrenPpops = {
  nextStep?: () => void;
  previousStep?: () => void;
  goToStep?: (step: number) => void;
};

type LatLongProps = {
  latlng: {
    lat: number;
    lng: number;
  };
};

export const ModalPet = ({ latlng: { lat, lng } }: LatLongProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [isActiveLostorFind, setLostorFindActive] = useState(false);
  const [isActiveLeaveContact, setIsActiveLeaveContact] = useState(false);

  function closeModal() {
    setModalIsOpen(!modalIsOpen);
  }

  const toggleClickLostorFind = () => {
    setLostorFindActive(!isActiveLostorFind);
  };

  const toggleClickLeaveContact = () => {
    setIsActiveLeaveContact(!isActiveLeaveContact);
  };

  const StepAnyware = (props: StepWizardChildrenPpops) => {
    return (
      <S.NextPage>
        <S.ProgressContainer>
          <S.ProgressContainerBolls onClick={() => props.goToStep(1)}>
            <S.ProgressContainerLine></S.ProgressContainerLine>
          </S.ProgressContainerBolls>
          <S.ProgressContainerBolls onClick={() => props.goToStep(2)}>
            <S.ProgressContainerLine></S.ProgressContainerLine>
          </S.ProgressContainerBolls>
          <S.ProgressContainerBolls />
        </S.ProgressContainer>
        <S.buttonNext onClick={props.nextStep}>Avançar</S.buttonNext>
      </S.NextPage>
    );
  };

  const Step1 = (props: StepWizardChildrenPpops) => {
    return (
      <>
        <S.Title ref={subtitle => (subtitle = subtitle)}>O procurado:</S.Title>
        <S.ButtonClose onClick={closeModal}>
          <GrFormClose size={25} />
        </S.ButtonClose>
        <S.ContainerLostorFind>
          <S.SubTitle>Você...</S.SubTitle>
          <S.ButtonsContainer>
            <S.ButtonLost
              onClick={toggleClickLostorFind}
              className={!isActiveLostorFind && 'active'}
            >
              Perdeu
            </S.ButtonLost>
            <S.ButtonFind
              onClick={toggleClickLostorFind}
              className={isActiveLostorFind && 'active'}
            >
              Viu
            </S.ButtonFind>
          </S.ButtonsContainer>
        </S.ContainerLostorFind>
        <S.FormPet>
          <S.FormWrapper>
            <S.Label>Qual o nome?(só se souber)</S.Label>
            <S.Input></S.Input>
          </S.FormWrapper>
          <S.FormWrapper>
            <S.Label>Qual o tipo?</S.Label>
            <S.Select>
              <option value="dog">Cachorro</option>
              <option value="cat">Gato</option>
              <option value="parrot">Papagaio</option>
              <option value="hasmter">hamster</option>
              <option value="snake">cobra</option>
            </S.Select>
          </S.FormWrapper>
          <S.FormWrapper>
            <S.Label>E a raça?</S.Label>
            <S.Select>
              <option value="Doberman">Doberman</option>
              <option value="pudldle">pudldle</option>
              <option value="vira lata">vira lata</option>
            </S.Select>
          </S.FormWrapper>
          <S.FormWrapper>
            <S.Label>A cor?</S.Label>
            <S.Select>
              <option value="Doberman">Amarelo</option>
              <option value="listrado">Com listras</option>
              <option value="marron">Marron</option>
              <option value="verde">Verde</option>
              <option value="roxo">Roxo</option>
            </S.Select>
          </S.FormWrapper>
        </S.FormPet>
        <StepAnyware {...props} />
      </>
    );
  };

  const Step2 = (props: StepWizardChildrenPpops) => {
    console.log('lat :>> ', lat);
    reverseGeocode({ lat, lng }, 'AIzaSyAXo-aVXJzcc_eAc0n29Vlp7yrYialMy84')
      .then((data: any) => console.log(data))
      .catch((err: any) => console.log(err));

    return (
      <>
        <S.Title ref={subtitle => (subtitle = subtitle)}>
          Só confirmando:
        </S.Title>
        <S.ButtonClose onClick={closeModal}>
          <GrFormClose size={25} />
        </S.ButtonClose>
        <S.ContainerLostorFind>
          <S.SubTitle>Quer deixar seu contato?</S.SubTitle>
          <S.ButtonsContainer>
            <S.ButtonLost
              onClick={toggleClickLeaveContact}
              className={!isActiveLeaveContact && 'active'}
            >
              Não
            </S.ButtonLost>
            <S.ButtonFind
              onClick={toggleClickLeaveContact}
              className={isActiveLeaveContact && 'active'}
            >
              Sim
            </S.ButtonFind>
          </S.ButtonsContainer>
        </S.ContainerLostorFind>
        <S.FormPet>
          <S.FormWrapper>
            <S.Label>Foi nesse estado</S.Label>
            <S.Input></S.Input>
          </S.FormWrapper>
          <S.FormWrapper>
            <S.Label>Nessa cidade?</S.Label>
            <S.Input></S.Input>
          </S.FormWrapper>
          <S.FormWrapper>
            <S.Label>Nesse lograudo?</S.Label>
            <S.Input></S.Input>
          </S.FormWrapper>
          <S.FormWrapper>
            <S.Label>Na altura do numero?</S.Label>
            <S.Input></S.Input>
          </S.FormWrapper>
        </S.FormPet>
        <StepAnyware {...props} />
      </>
    );
  };

  return (
    <S.ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
    >
      <StepWizard>
        <Step1 />
        <Step2 />
      </StepWizard>
    </S.ModalContainer>
  );
};
