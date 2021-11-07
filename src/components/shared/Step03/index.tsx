import useReState from '@raulpesilva/re-state/dist';
import React, { useState, useRef } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { MdAddCircleOutline } from 'react-icons/md';
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
  const [filesUploads, setFilesUploads] = useReState('filesUpload', []);

  const fileInput = useRef<HTMLInputElement>(null);

  const sendFiles = async event => {
    console.log('event :>> ', event);
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append('file', file, file.name);

    const response = await formDataApi.post(
      '/postsAnimals/fotoPostsAnimals',
      formData,
    );

    if (response.status !== 200)
      return alert('algo deu errado, tente novamente mais tarde :(');

    console.log('response :>> ', response.data);

    setFilesUploads(ant => [...ant, response.data]);
  };

  console.log('returnFilesPost :>> ', filesUploads.join());

  const sendImage = event => {
    if (filesUploads.length > 3) return;
    console.log('event :>> ', event);
    fileInput.current.click();
  };

  return (
    <S.Step3>
      <S.ButtonClose onClick={props.closeModal} />
      <S.ContainerImages>
        <S.ImageMain
          onClick={event => {
            sendImage(event);
          }}
        >
          {filesUploads.length != 0 && filesUploads[0] !== null ? (
            <img src={filesUploads[filesUploads.length - 1]}></img>
          ) : (
            <MdAddCircleOutline size={40} />
          )}
        </S.ImageMain>
        <S.ImageThumbs>
          {filesUploads.length > 0 &&
            filesUploads.slice(0, -1).map((file, index) => {
              return <img key={file} src={file}></img>;
            })}

          {filesUploads.length < 3 && (
            <S.ImageThumbsDiv
              onClick={event => {
                sendImage(event);
              }}
            >
              <MdAddCircleOutline size={20} />
            </S.ImageThumbsDiv>
          )}
        </S.ImageThumbs>
        <input
          type="file"
          onChange={sendFiles}
          ref={fileInput}
          style={{ display: 'none' }}
        />
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
