import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Modal from 'react-modal';
import Head from 'next/head';
import { parseCookies } from 'nookies';

import usePetModal from '../../hooks/usePetModal';
import { Pet, User } from '../../types';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

import * as S from './styles';
import { AsideMenu } from '../../components/AsideMenu';
import getApiClient from '../../services/axios';
import { PetModal } from '../../components/PetModal';

interface HomeProps {
  user: User;
  pets: Pet[];
}

export const Home = ({ user, pets }: HomeProps) => {
  const { isOpen } = usePetModal();

  return (
    <S.HomeContainer>
      <AsideMenu user={user} />
      <div>
        <Map pets={pets} />
        <PetModal />
      </div>
    </S.HomeContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ['achapet.user']: user } = parseCookies(ctx);

  const api = getApiClient(ctx);
  const data = await api.get('/postsAnimals/list');

  console.log(process.env.MAPS_API_KEY);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: JSON.parse(user),
      pets: [
        {
          id: 1.2270530788894267,
          email: 'maria@gmail.com',
          nome: 'maria',
          celular: '111111111111',
          nomeAnimal: 'pretinha',
          animalTipo: null,
          raca: 'viralata',
          cor: 'preto',
          status: 'perdido',
          caracteristicas: 'marelo',
          hora: '20:05:23',
          data: '2021-10-11',
          latitude: '-23.6854194',
          longitude: '-46.4609373',
          fotos: [
            {
              idFoto: 1.0299708059312718,
              nomeFoto: 'arvores.jpg',
              tamanho: 345636,
              key: '244bd2611ee8bf9240ee76dfdda88c3d-arvores.jpg',
              url: 'https://achapet.s3.sa-east-1.amazonaws.com/244bd2611ee8bf9240ee76dfdda88c3d-arvores.jpg',
            },
            {
              idFoto: 1.0299708059312719,
              nomeFoto: 'arvoresa.jpg',
              tamanho: 345636,
              key: '244bd2611ee8bf9240ee76dfdda88c3dw-arvores.jpg',
              url: 'https://www.dicaspetz.com.br/wp-content/uploads/2020/01/vira-lata-caramelo.jpg',
            },
            {
              idFoto: 1.0299708059312701,
              nomeFoto: 'arvorese.jpg',
              tamanho: 345634,
              key: '244bd2611ee8bf9240ee76dfdda88c3dw-arvores.jpg',
              url: 'https://www.dicaspetz.com.br/wp-content/uploads/2020/01/vira-lata-caramelo-cao.jpg',
            },
          ],
        },
      ],
    },
  };
};

export default Home;
