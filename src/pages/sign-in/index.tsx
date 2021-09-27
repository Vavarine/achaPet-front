import Head from 'next/head';
import Link from 'next/link';

import * as S from './styles';

function SignIn() {
  return (
    <S.SignInContainer>
      <Head>
        <title>Login | AchaPet</title>
      </Head>
      <h1>Cadastro</h1>
      <Link href="/">
        <a>Logar-se</a>
      </Link>
    </S.SignInContainer>
  );
}

export default SignIn;
