import Head from 'next/head';
import Link from 'next/Link';

import { Container } from '../../styles/pages/sign-in';

function SignIn() {
  return (
    <Container>
      <Head>
        <title>Login | AchaPet</title>
      </Head>
      <h1>Cadastro</h1>
      <Link href="/">Logar-se</Link>
    </Container>
  );
}

export default SignIn;
