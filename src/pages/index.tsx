import Head from 'next/head';
import Link from 'next/Link';

import { Container } from '../styles/pages/login';

function Login() {
  return (
    <Container>
      <Head>
        <title>Login | AchaPet</title>
      </Head>
      <h1>Login</h1>
      <Link href="/sign-in">Cadastrar-se</Link>
    </Container>
  );
}

export default Login;
