import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Modal from 'react-modal';
import Head from 'next/head';
import { parseCookies } from 'nookies';

import usePetModal from '../../hooks/usePetModal';
import { Pet, User } from '../../types';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

import * as S from '../../styles/pages/home/styles';
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

  console.log(process.env.MAPS_API_KEY);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const { data } = await api.get('/postsAnimals/list');

  console.log(data);

  return {
    props: {
      user: JSON.parse(user),
      pets: data,
    },
  };
};

export default Home;
