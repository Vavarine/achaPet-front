import Head from 'next/head';
import Link from 'next/link';

import { SignInContainer } from '../../styles/pages/sign-in';

function SignIn() {
  return (
    <SignInContainer>
      <Head>
        <title>Login | AchaPet</title>
      </Head>
      <h1>Cadastro</h1>
      <Link href="/">
        <a>Logar-se</a>
      </Link>
    </SignInContainer>
  );
}

export default SignIn;
