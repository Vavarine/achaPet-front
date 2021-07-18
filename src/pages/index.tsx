import Head from 'next/head';
import Link from 'next/Link';

import { LoginContainer } from '../styles/pages/Login';

function Login() {
  return (
    <LoginContainer>
      <Head>
        <title>Login | AchaPet</title>
      </Head>
      <h1>Login</h1>
      <Link href="/sign-in">Cadastrar-se</Link>
    </LoginContainer>
  );
}

export default Login;
