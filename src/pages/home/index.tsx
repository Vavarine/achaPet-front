import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import useAuth from '../../hooks/useAuth';
import { User } from '../../types';

interface HomeProps {
  user: User;
}

function Login({ user }: HomeProps) {
  const { signOut } = useAuth();

  return (
    <div>
      <Head>
        <title>AchaPet</title>
      </Head>
      <h1>Home</h1>
      <p>Olá {user.name}</p>
      <button onClick={signOut}>Deslogar</button>
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
