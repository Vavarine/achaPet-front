import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import GoogleLogin from '../../Api';
import * as S from './styles';

const LoginForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginWithGoogle = async () => {
    const result = await GoogleLogin();

    if (result) {
      console.log('result :>> ', result.user);
    } else {
      console.log('deu erro');
    }
  };

  const onsubmit = data => console.log('data :>> ', data);

  return (
    <S.ContainerLogin>
      <form onSubmit={handleSubmit(onsubmit)}>
        <S.Title>Entrar</S.Title>

        <S.LoginWithGoogle onClick={loginWithGoogle}>
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
          ></input>

          <label htmlFor="password">Senha</label>
          <input
            name="email"
            type="password"
            id="password"
            {...register('password')}
          ></input>

          <S.RememberMeAndResetPassword>
            <div>
              <input type="checkbox" name="remember" id="remember" />
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
