import Head from 'next/head';
import Link from 'next/Link';

import { SignInContainer } from '../../styles/pages/Sign-in';

function SignIn() {
  return (
    <SignInContainer>
      <Head>
        <title>Login | AchaPet</title>
      </Head>
      <h1>Cadastro</h1>
      <Link href="/">Logar-se</Link>
    </SignInContainer>
  );
}

export default SignIn;
