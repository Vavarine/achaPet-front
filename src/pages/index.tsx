import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import LandingPage from './landing';

function Login() {
  return <LandingPage />;
}

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   // return {
//   //   redirect: {
//   //     destination: '/Login',
//   //     permanent: false,
//   //   },
//   // };
// };

export default Login;
