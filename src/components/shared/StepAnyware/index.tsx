import useReState from '@raulpesilva/re-state/dist';
import axios from 'axios';
import api from '../../../services/api';
import { StepWizardStep3ChildrenProps } from '../Step03';

import * as S from './styles';

export const StepAnyware = ({ ...props }: StepWizardStep3ChildrenProps) => {
  const [isActiveLostorFind] = useReState('isActiveLostorFind', false);
  const [animalName] = useReState('animalName', '');
  const [typeAnimal] = useReState('animalType', '');
  const [raceAnimal] = useReState('animalRace', '');
  const [colorAnimal] = useReState('animalColor', '');
  const [description] = useReState('descriptionAnimal', '');

  const sendToBackRegister = async () => {
    const data = {
      tipo: isActiveLostorFind ? 'achados' : 'perdidos',
      email: props.user.email,
      nome: props.user.name,
      celular: 40028922,
      nomeAnimal: animalName,
      animalTipo: typeAnimal,
      raca: raceAnimal,
      cor: colorAnimal,
      caracteristicas: description,
      latitude: props.latitude,
      longitude: props.longitude,
    };

    console.log('data :>> ', data);

    api
      .post('/postsAnimals/postagem', {
        data: data,
      })
      .then(res => console.log('res :>> ', res))
      .catch(err => console.log('err :>> ', err.response));

    // const response = await axios.post(
    //   'https://achapet-backend.herokuapp.com/postsAnimals',
    //   data,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   },
    // );

    // console.log('response :>> ', response);
  };

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

      {!props.isThird ? (
        <S.buttonNext onClick={props.nextStep}>Avançar</S.buttonNext>
      ) : (
        <S.buttonNext onClick={sendToBackRegister}>É isso!</S.buttonNext>
      )}
    </S.NextPage>
  );
};
