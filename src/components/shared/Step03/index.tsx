import useReState from '@raulpesilva/re-state/dist';
import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { StepWizardChildrenProps } from '../..';
import api, { formDataApi } from '../../../services/api';
import { User } from '../../../types';
import { StepAnyware } from '../StepAnyware';
import * as S from './styles';
import FormData from 'form-data';
export interface StepWizardStep3ChildrenProps extends StepWizardChildrenProps {
  latitude: string;
  longitude: string;
  user: User;
}

export const Step3 = (props: StepWizardStep3ChildrenProps) => {
  const [isActiveLostorFind] = useReState('isActiveLostorFind', false);
  const [animalName] = useReState('animalName', '');
  const [street] = useReState('streetClickMap', null);
  const [city] = useReState('cityClickMap', null);
  const [, setDescription] = useReState('descriptionAnimal', '');
  const [files, SetFiles] = useState(null);

  const sendFiles = event => {
    console.log('event :>> ', event);
    const file = event.target.files[0];
    const id = 1.1845587846844856;
    const email = 'linndomarnascimento17@gmail.com';
    const tipoPost = 'perdidos';
    const formData = new FormData();

    console.log('file :>> ', file);
    formData.append('file', file, file.name);
    formData.append('id', `${id}`);
    formData.append('email', `${email}`);
    formData.append('tipoPost', 'perdidos');

    formDataApi
      .put('/postsAnimals/fotoPostsAnimals', formData, {
        headers: {
          accept: 'application/json',
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  return (
    <S.Step3>
      <S.ButtonClose onClick={props.closeModal} />
      <S.ContainerImages>
        <img src="/assets/first-thumb.png"></img>
        <input type="file" onChange={sendFiles} />
      </S.ContainerImages>
      <S.ContainerConfirmation>
        <S.Title>Por fim...</S.Title>
        <S.ButtonClose onClick={props.closeModal}>
          <GrFormClose size={25} />
        </S.ButtonClose>

        <S.ContainerLostorFind>
          <S.Informations>
            <S.SpanLostFind>
              {isActiveLostorFind ? 'achado' : 'perdido'}
            </S.SpanLostFind>
            <S.SpanCity>{city}</S.SpanCity>
          </S.Informations>
          <S.Informations>
            <S.SpanName>{animalName}</S.SpanName>
            <S.SpanStreet>{street}</S.SpanStreet>
          </S.Informations>
          <S.Description>
            <S.DescriptionTitle>Descreva o pet</S.DescriptionTitle>
            <S.TextArea
              rows={3}
              onChange={e => setDescription(e.target.value)}
            />
          </S.Description>
        </S.ContainerLostorFind>
        <StepAnyware {...props} />
      </S.ContainerConfirmation>
    </S.Step3>
  );
};
