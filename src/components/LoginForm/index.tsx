import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import isEmail from 'validator/lib/isEmail';

import useAuth from '../../hooks/useAuth';

import * as S from './styles';
import Link from 'next/link';
import { colorShade } from '../../styles';
import getUnvalidFields from '../../utils/getUnvalidFields';

const LoginForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { signInWithGoogle, login } = useAuth();
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

    if (getUnvalidFields({ email, password }).length > 0) {
      toast.error('Preencha todos os campos');
      return;
    }

    console.log({ email, password });

    toast.promise(
      login(email, password),
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

  return (
    <S.ContainerLogin>
      <S.Form onSubmit={handleSubmit(onsubmit)}>
        <S.Title>Entrar</S.Title>

        <S.LoginWithGoogle type="button" onClick={hanldeLoginWithGoogle}>
          <FcGoogle size={30} />
          Entra com google
        </S.LoginWithGoogle>

        <S.lineOr>
          <span>ou</span>
        </S.lineOr>

        <S.LoginWithEmailAndPass>
          <label htmlFor="email" {...(register('email'), { required: true })}>
            E-mail
          </label>
          <input
            name="email"
            type="email"
            id="email"
            {...register('email')}
            onBlur={e => {}}
            required
          ></input>
          <span className="errorMessage">Preecha o campo corretamente</span>

          <label htmlFor="password">Senha</label>
          <input
            name="email"
            type="password"
            id="password"
            {...register('password')}
            required
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
      </S.Form>

      <S.DontHaveAccount>
        <span>
          Não tem uma conta?
          <Link href="/sign-in">
            <a>Cadastre-se</a>
          </Link>
        </span>
      </S.DontHaveAccount>
    </S.ContainerLogin>
  );
};

export default LoginForm;
