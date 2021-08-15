import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

function Login() {
  return (
    <>
      <Head>
        <title>AchaPet</title>
      </Head>
      <h1>LandingPage</h1>
      <Link href="/Login">
        <a>Login</a>
      </Link>
      <br />
      <Link href="/sign-in">
        <a>Cadastrar-se</a>
      </Link>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  return {
    redirect: {
      destination: '/Login',
      permanent: false,
    },
  };
};

export default Login;
