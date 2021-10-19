import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import { User } from '../../types';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

import * as S from './styles';
import { AsideMenu } from '../../components/AsideMenu';

interface HomeProps {
  user: User;
}

export const Home = ({ user }: HomeProps) => {
  return (
    <S.HomeContainer>
      <AsideMenu user={user} />
      <div>
        <Map />
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
    },
  };
};

export default Home;
