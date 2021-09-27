import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import { User } from '../../types';

import 'leaflet/dist/leaflet.css';

import * as S from './styles';
import { AsideMenu } from '../../components/AsideMenu';
import { CartPet } from '../../components';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });
interface HomeProps {
  user: User;
}

function Login({ user }: HomeProps) {
  return (
    <div>
      <Head>
        <title>AchaPet</title>
      </Head>
      <S.HomeContainer>
        <AsideMenu user={user} />
        <div>
          <Map />
        </div>
      </S.HomeContainer>
    </div>
  );
}

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

export default Login;
