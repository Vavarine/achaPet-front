import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import { Pet, User } from '../../types';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

import * as S from './styles';
import { AsideMenu } from '../../components/AsideMenu';

interface HomeProps {
  user: User;
  pets: Pet[];
}

export const Home = ({ user, pets }: HomeProps) => {
  return (
    <S.HomeContainer>
      <AsideMenu user={user} />
      <div>
        <Map pets={pets} />
      </div>
    </S.HomeContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ['achapet.user']: user } = parseCookies(ctx);

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
          imagens: [
            'https://achapet.s3.amazonaws.com/76f60fc8ef51463aaf44d685fc89cfc0-Ursos.png',
          ],
        },
      ],
    },
  };
};

export default Home;
