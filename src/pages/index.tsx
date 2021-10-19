import { GetServerSideProps } from 'next';

function Login() {
  return <div></div>;
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  return {
    redirect: {
      destination: '/landing',
      permanent: false,
    },
  };
};

export default Login;
