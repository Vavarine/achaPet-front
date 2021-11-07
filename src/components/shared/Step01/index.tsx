import useReState from '@raulpesilva/re-state/dist';
import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { StepWizardChildrenProps } from '../..';
import { StepAnyware } from '../StepAnyware';
import * as S from './styles';

export const Step1 = (props: StepWizardChildrenProps) => {
  const [, setNameAnimal] = useReState('animalName', '');
  const [typeAnimal, setTypeAnimal] = useReState('animalType', '');
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
            <option value="">Selecionar</option>
            <option value="dog">Cachorro</option>
            <option value="cat">Gato</option>
            <option value="parrot">Papagaio</option>
            <option value="hasmter">hamster</option>
          </S.Select>
        </S.FormWrapper>
        <S.FormWrapper>
          <S.Label>E a raça?</S.Label>
          <S.Select onChange={e => setRaceAnimal(e.target.value)}>
            {typeAnimal === '' && (
              <option value="select">Selecione tipo</option>
            )}
            {typeAnimal === 'dog' && (
              <>
                <option value="Selecione">Selecione</option>
                <option value="Shih Tzu">Shih Tzu</option>
                <option value="Lhasa Apso">Lhasa Apso</option>
                <option value="Poodle">Poodle</option>
                <option value="Buldogue Francês">Buldogue Francês</option>
                <option value="Pug">Pug</option>
                <option value="Golden Retriever">Golden Retriever</option>
                <option value="Yorkshire">Yorkshire</option>
                <option value="Pastor Alemão">Pastor Alemão</option>
                <option value="Labrador">Labrador</option>
                <option value="Dachshund">Dachshund</option>
                <option value="Chow Chow">Chow Chow</option>
                <option value="Beagle">Beagle</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Dálmata">Dálmata</option>
                <option value="Husky Siberiano">Husky Siberiano</option>
                <option value="Cavalier King Charles Spaniel">
                  Cavalier King Charles Spaniel
                </option>
                <option value="Collie">Collie</option>
                <option value="Corgi">Corgi</option>
                <option value="Bull Terrier">Bull Terrier</option>
                <option value="Akita">Akita</option>
              </>
            )}
            {typeAnimal === 'cat' && (
              <>
                <option value="Selecione">Selecione</option>
                <option value="Persa">Persa</option>
                <option value="British Shorthair">British Shorthair</option>
                <option value="Sphynx, ou raça de gato sem pelo">
                  Sphynx, ou raça de gato sem pelo
                </option>
                <option value="Siamês">Siamês</option>
                <option value="Angorá">Angorá</option>
                <option value="Maine Coon">Maine Coon</option>
                <option value="Himalaio">Himalaio</option>
                <option value="Bengal">Bengal</option>
                <option value="Ragdoll">Ragdoll</option>
                <option value="Munchkin">Munchkin</option>
                <option value="Scottish Fold">Scottish Fold</option>
                <option value="Abissínio">Abissínio</option>
                <option value="Birmanês ou Sagrado da Birmânia">
                  Birmanês ou Sagrado da Birmânia
                </option>
              </>
            )}
            {typeAnimal === 'parrot' && (
              <>
                <option value="Selecione">Selecione</option>
                <option value="Papagaio-do-mangue">Papagaio do mangue</option>
                <option value="Papagaio-de-cara-roxa">
                  Papagaio de cara roxa
                </option>
                <option value="Papagaio-ecletus">Papagaio ecletus</option>
                <option value="Papagaio-do-congo">Papagaio do congo</option>
              </>
            )}
            {typeAnimal === 'hasmter' && (
              <>
                <option value="Selecione">Selecione</option>
                <option value="Hamster sírio">Hamster sírio</option>
                <option value="Hamster anão russo">Hamster anão russo</option>
                <option value="Hamster chinês">Hamster chinês</option>
                <option value="Hamster Roborovski">Hamster Roborovski</option>
              </>
            )}
          </S.Select>
        </S.FormWrapper>
        <S.FormWrapper>
          <S.Label>A cor?</S.Label>
          <S.Select onChange={e => setColorAnimal(e.target.value)}>
            <option value="Doberman">Amarelo</option>
            <option value="listrado">Com listras</option>
            <option value="marron">Marron</option>
            <option value="cinza">Cinza</option>
            <option value="rajado">Rajado</option>
            <option value="verde">Verde</option>
            <option value="roxo">Roxo</option>
          </S.Select>
        </S.FormWrapper>
      </S.FormPet>
      <StepAnyware {...props} />
    </>
  );
};
