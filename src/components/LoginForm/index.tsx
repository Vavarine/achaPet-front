import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

import useAuth from '../../hooks/useAuth';

import * as S from './styles';

const LoginForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInWithGoogle, signIn } = useAuth();
  const { rememberMe, setRememberMe } = useAuth();

  const router = useRouter();

  async function hanldeLoginWithGoogle() {
    try {
      await signInWithGoogle();
      toast('Bem vindo!', { icon: '🐶' });

      router.push('/home');
    } catch (error) {
      toast.error('erro ao logar com o google');
    }
  }

  async function onsubmit(data) {
    const { email, password } = data;

    toast.promise(
      signIn(email, password),
      {
        loading: 'Um segundo...',
        success: data => {
          router.push('/home');
          return `Bem vindo!`;
        },
        error: err => `Não foi possivel logar`,
      },
      {
        success: {
          icon: '🐶',
        },
        error: {
          icon: '😓',
        },
      },
    );
  }

  function validateEmail(email: HTMLInputElement) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var res = re.test(String(email.value).toLowerCase());
    console.log('res :>> ', res);
    if (!res) {
      email.classList.add('error');
    } else {
      email.classList.remove('error');
    }
  }

  return (
    <S.ContainerLogin>
      <form onSubmit={handleSubmit(onsubmit)}>
        <S.Title>Entrar</S.Title>

        <S.LoginWithGoogle onClick={hanldeLoginWithGoogle}>
          <FcGoogle size={30} />
          Entra com google
        </S.LoginWithGoogle>

        <S.lineOr>
          <span>ou</span>
        </S.lineOr>

        <S.LoginWithEmailAndPass>
          <label htmlFor="email" {...register('email')}>
            E-mail
          </label>
          <input
            name="email"
            type="email"
            id="email"
            {...register('email')}
            onBlur={e => {
              console.log('e :>> ', validateEmail(e.target));
            }}
          ></input>
          <span className="errorMessage">Preecha o campo corretamente</span>

          <label htmlFor="password">Senha</label>
          <input
            name="email"
            type="password"
            id="password"
            {...register('password')}
          ></input>

          <S.RememberMeAndResetPassword>
            <div>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Lembrar de mim</label>
            </div>
            <div>
              <a href="">Esqueci minha senha</a>
            </div>
          </S.RememberMeAndResetPassword>
          <S.SubmitButton>
            <button type="submit">
              Entrar
              <AiOutlineArrowRight size={20} />
            </button>
          </S.SubmitButton>
        </S.LoginWithEmailAndPass>
      </form>

      <S.DontHaveAccount>
        <span>
          Não tem uma conta?
          <a href="#"> Cadastre-se</a>
        </span>
      </S.DontHaveAccount>
    </S.ContainerLogin>
  );
};

export default LoginForm;
