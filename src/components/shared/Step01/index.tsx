import useReState from '@raulpesilva/re-state/dist';

import * as S from './styles';

import { GrFormClose } from 'react-icons/gr';
import React, { Dispatch, SetStateAction } from 'react';
import { StepWizardChildrenProps } from '../..';
import { StepAnyware } from '../StepAnyware';

export const Step1 = (props: StepWizardChildrenProps) => {
  const [, setNameAnimal] = useReState('animalName', '');
  const [, setTypeAnimal] = useReState('animalType', '');
  const [, setRaceAnimal] = useReState('animalRace', '');
  const [, setColorAnimal] = useReState('animalColor', '');
  const [isActiveLostorFind, setLostorFindActive] = useReState(
    'isActiveLostorFind',
    false,
  );

  const toggleClickLostorFind = () => {
    setLostorFindActive(!isActiveLostorFind);
  };

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
          <S.Input onChange={e => setNameAnimal(e.target.value)}></S.Input>
        </S.FormWrapper>
        <S.FormWrapper>
          <S.Label>Qual o tipo?</S.Label>
          <S.Select onChange={e => setTypeAnimal(e.target.value)}>
            <option value="dog">Cachorro</option>
            <option value="cat">Gato</option>
            <option value="parrot">Papagaio</option>
            <option value="hasmter">hamster</option>
            <option value="snake">cobra</option>
          </S.Select>
        </S.FormWrapper>
        <S.FormWrapper>
          <S.Label>E a raça?</S.Label>
          <S.Select onChange={e => setRaceAnimal(e.target.value)}>
            <option value="Doberman">Doberman</option>
            <option value="pudldle">pudldle</option>
            <option value="vira lata">vira lata</option>
          </S.Select>
        </S.FormWrapper>
        <S.FormWrapper>
          <S.Label>A cor?</S.Label>
          <S.Select onChange={e => setColorAnimal(e.target.value)}>
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
