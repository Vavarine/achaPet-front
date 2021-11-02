import useReState from '@raulpesilva/re-state/dist';
import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { StepWizardChildrenProps } from '../..';
import { StepAnyware } from '../StepAnyware';

import * as S from './styles';

export const Step2 = (props: StepWizardChildrenProps) => {
  const [isALeaveContact, setIsLeaveContant] = useReState(
    'isLeaveContact',
    false,
  );
  const toggleClickLeaveContact = () => {
    setIsLeaveContant(!isALeaveContact);
  };

  const [number] = useReState('numberClickMap', '');
  const [street] = useReState('streetClickMap', '');
  const [city] = useReState('cityClickMap', '');
  const [state] = useReState('stateClickMap', '');

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
            onClick={toggleClickLeaveContact}
            className={!isALeaveContact && 'active'}
          >
            Não
          </S.ButtonLost>
          <S.ButtonFind
            onClick={toggleClickLeaveContact}
            className={isALeaveContact && 'active'}
          >
            Sim
          </S.ButtonFind>
        </S.ButtonsContainer>
      </S.ContainerLostorFind>
      <S.FormPet>
        <S.FormWrapper>
          <S.Label>Foi nesse estado</S.Label>
          <S.Input value={state}></S.Input>
        </S.FormWrapper>
        <S.FormWrapper>
          <S.Label>Nessa cidade?</S.Label>
          <S.Input value={city}></S.Input>
        </S.FormWrapper>
        <S.FormWrapper>
          <S.Label>Nesse lograudo?</S.Label>
          <S.Input value={street}></S.Input>
        </S.FormWrapper>
        <S.FormWrapper>
          <S.Label>Na altura do numero?</S.Label>
          <S.Input value={number}></S.Input>
        </S.FormWrapper>
      </S.FormPet>
      <StepAnyware {...props} />
    </>
  );
};
