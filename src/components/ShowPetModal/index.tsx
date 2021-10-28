import axios from 'axios';
import { SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { useEffect, useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import Modal from 'react-modal';
import StepWizard from 'react-step-wizard';
import { getServerSideProps } from '../../pages';
import { User } from '../../types';
import * as S from './styles';

Modal.setAppElement('#root');

interface StepWizardChildrenProps {
  nextStep?: () => void;
  previousStep?: () => void;
  goToStep?: (step: number) => void;
  closeModal: () => void;
  isFirst: boolean;
}
interface StepWizardChidrenPropsStep1 extends StepWizardChildrenProps {
  toggleClickLostorFind: () => void;
  isActiveLostorFind: boolean;
  setName: any;
}
interface StepWizardChidrenPropsStep2 extends StepWizardChildrenProps {
  toggleClickLeaveContact: () => void;
  isActiveLeaveContact: boolean;
  number: number;
  street: string;
  district: string;
  city: string;
  state: string;
  zipCode: string;
}
interface StepWizardChidrenPropsStep3 extends StepWizardChildrenProps {
  nameAnimal: string;
  lostOrfind: boolean;
  street: string;
  city: string;
  name: string;
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
  const [isActiveLostorFind, setLostorFindActive] = useState(false);
  const [isActiveLeaveContact, setIsActiveLeaveContact] = useState(false);
  const [number, setNumber] = useState(null);
  const [street, setStreet] = useState(null);
  const [district, setDistrict] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [isFirst, setIsFirst] = useState(false);
  const [isThird, setIsThird] = useState(false);
  const [name, setName] = useState('');

  const requestCEP = async () => {
    if (!lat) return;
    const latitude = lat.toString();
    const longitude = lng.toString();

    const response = await axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}8&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`,
      )
      .then(response => response.data.results);

    setNumber(response[1].address_components[0].long_name);
    setStreet(response[1].address_components[1].long_name);
    setDistrict(response[1].address_components[2].long_name);
    setCity(response[1].address_components[3].long_name);
    setState(response[1].address_components[4].long_name);
    setZipCode(response[1].address_components[6].long_name);

    console.log(response[1].address_components[0]);
    console.log(response[1].address_components[1]);
    console.log(response[1].address_components[2]);
    console.log(response[1].address_components[3]);
    console.log(response[1].address_components[4]);
    console.log(response[1].address_components[6]);

    return response;
  };
  useEffect(() => {
    requestCEP().then(res => console.log('resteste :>> ', res));
  }, []);

  function closeModal() {
    setModalIsOpen(!modalIsOpen);
    clearPosition();
  }

  const toggleClickLostorFind = () => {
    setLostorFindActive(!isActiveLostorFind);
  };

  const toggleClickLeaveContact = () => {
    setIsActiveLeaveContact(!isActiveLeaveContact);
  };

  const handleStepChange = ({ previousStep, activeStep }: stepWizardProps) => {
    if (activeStep === 1) setIsFirst(true);
    if (activeStep !== 1) setIsFirst(false);

    if (activeStep === 3) setIsThird(true);
    if (activeStep !== 3) setIsThird(false);
  };

  return (
    <S.ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      isThird={isThird}
    >
      <StepWizard onStepChange={handleStepChange}>
        <Step1
          closeModal={closeModal}
          toggleClickLostorFind={toggleClickLostorFind}
          isActiveLostorFind={isActiveLostorFind}
          setName={setName}
          isFirst={isFirst}
        />
        <Step2
          closeModal={closeModal}
          toggleClickLeaveContact={toggleClickLeaveContact}
          isActiveLeaveContact={isActiveLeaveContact}
          number={number}
          street={street}
          district={district}
          city={city}
          state={state}
          zipCode={zipCode}
          isFirst={isFirst}
        />
        <Step3
          closeModal={closeModal}
          nameAnimal={name}
          lostOrfind={isActiveLostorFind}
          street={street}
          city={city}
          name={name}
          isFirst={isFirst}
        />
      </StepWizard>
    </S.ModalContainer>
  );
};

const Step1 = (props: StepWizardChidrenPropsStep1) => {
  return (
    <>
      <S.Title>O procurado:</S.Title>
      <S.ButtonClose onClick={props.closeModal}>
        <GrFormClose size={25} />
      </S.ButtonClose>
      <S.ContainerLostorFind>
        <S.SubTitle>Você...</S.SubTitle>
        <S.ButtonsContainer>
          <S.ButtonLost
            onClick={props.toggleClickLostorFind}
            className={!props.isActiveLostorFind && 'active'}
          >
            Perdeu
          </S.ButtonLost>
          <S.ButtonFind
            onClick={props.toggleClickLostorFind}
            className={props.isActiveLostorFind && 'active'}
          >
            Viu
          </S.ButtonFind>
        </S.ButtonsContainer>
      </S.ContainerLostorFind>
      <S.FormPet>
        <S.FormWrapper>
          <S.Label>Qual o nome?(só se souber)</S.Label>
          <S.Input onChange={e => props.setName(e.target.value)}></S.Input>
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

const Step2 = (props: StepWizardChidrenPropsStep2) => {
  return (
    <>
      <S.Title>Só confirmando:</S.Title>
      <S.ButtonClose onClick={props.closeModal}>
        <GrFormClose size={25} />
      </S.ButtonClose>
      <S.ContainerLostorFind>
        <S.SubTitle>Quer deixar seu contato?</S.SubTitle>
        <S.ButtonsContainer>
          <S.ButtonLost
            onClick={props.toggleClickLeaveContact}
            className={!props.isActiveLeaveContact && 'active'}
          >
            Não
          </S.ButtonLost>
          <S.ButtonFind
            onClick={props.toggleClickLeaveContact}
            className={props.isActiveLeaveContact && 'active'}
          >
            Sim
          </S.ButtonFind>
        </S.ButtonsContainer>
      </S.ContainerLostorFind>
      <S.FormPet>
        <S.FormWrapper>
          <S.Label>Foi nesse estado</S.Label>
          <S.Input value={props.state}></S.Input>
        </S.FormWrapper>
        <S.FormWrapper>
          <S.Label>Nessa cidade?</S.Label>
          <S.Input value={props.city}></S.Input>
        </S.FormWrapper>
        <S.FormWrapper>
          <S.Label>Nesse lograudo?</S.Label>
          <S.Input value={props.street}></S.Input>
        </S.FormWrapper>
        <S.FormWrapper>
          <S.Label>Na altura do numero?</S.Label>
          <S.Input value={props.number}></S.Input>
        </S.FormWrapper>
      </S.FormPet>
      <StepAnyware {...props} />
    </>
  );
};

const Step3 = (props: StepWizardChidrenPropsStep3) => {
  const [files, SetFiles] = useState(null);
  return (
    <S.Step3>
      <S.ContainerImages>
        <img src="/assets/first-thumb.png"></img>
        <input type="file" onChange={console.log} />
      </S.ContainerImages>
      <S.ContainerConfirmation>
        <S.Title>Por fim...</S.Title>

        <S.ContainerLostorFind>
          <S.Informations>
            <S.SpanLostFind>
              {props.lostOrfind ? 'achado' : 'perdido'}
            </S.SpanLostFind>
            <S.SpanCity>{props.city}</S.SpanCity>
          </S.Informations>
          <S.Informations>
            <S.SpanName>{props.name}</S.SpanName>
            <S.SpanStreet>{props.street}</S.SpanStreet>
          </S.Informations>
          <S.Description>
            <S.DescriptionTitle>Descreva o pet</S.DescriptionTitle>
            <S.TextArea rows={3} />
          </S.Description>
        </S.ContainerLostorFind>
        <StepAnyware {...props} />
      </S.ContainerConfirmation>

      {/* <S.FormConfirm>
        <S.LostOrFind>
          <S.TextLostorFind>
            
          </S.TextLostorFind>
          <S.City>{city}</S.City>
        </S.LostOrFind>
        <S.NameAndStreet>
          <S.Name>
            Bolinha
            <p>(Vira-lata / Caramelo)</p>
          </S.Name>
          <S.Street>Rua David Boscariol, Jardim Rosina</S.Street>
        </S.NameAndStreet>
      </S.FormConfirm> */}
    </S.Step3>
  );
};

const StepAnyware = (props: StepWizardChildrenProps) => {
  console.log('activeStop :>> ', props.isFirst);

  return (
    <S.NextPage>
      <S.ProgressContainer>
        <S.ProgressContainerBolls onClick={() => props.goToStep(1)}>
          <S.ProgressContainerLine></S.ProgressContainerLine>
        </S.ProgressContainerBolls>
        <S.ProgressContainerBolls onClick={() => props.goToStep(2)}>
          <S.ProgressContainerLine></S.ProgressContainerLine>
        </S.ProgressContainerBolls>
        <S.ProgressContainerBolls onClick={() => props.goToStep(3)} />
      </S.ProgressContainer>
      {!props.isFirst && (
        <S.buttonStepBack onClick={props.previousStep}>Voltar</S.buttonStepBack>
      )}
      <S.buttonNext onClick={props.nextStep}>Avançar</S.buttonNext>
    </S.NextPage>
  );
};
