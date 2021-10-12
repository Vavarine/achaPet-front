import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiOutlineArrowRight } from 'react-icons/ai';
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
  //   const { acceptTerms, setAcceptTerms } = useState(false);

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

  function validateName(name: HTMLInputElement) {
    var re = /\d+/g;

    var res = re.test(String(name.value).toLowerCase());
    if (res) {
      return (name.value = name.value.slice(0, -1));
    }
  }

  function validateEmail(email: HTMLInputElement) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
        <S.Title>Cadastrar-se</S.Title>

        <S.LoginWithEmailAndPass>
          <label htmlFor="name" {...register('name')}>
            Nome
          </label>
          <input
            name="name"
            type="name"
            id="name"
            {...register('name')}
            onChange={e => {
              console.log('e :>> ', validateName(e.target));
            }}
          ></input>

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

          <S.AcceptTerms>
            <div>
              <input
                type="checkbox"
                name="acceptTerms"
                id="acceptTerms"
                // checked={!!acceptTerms}
                // onChange={e => setAcceptTerms(!!e.target.checked)}
              />
              <label htmlFor="acceptTerms">Aceito os</label>
            </div>
            <div>
              <a href="">Termos e condições</a>
            </div>
          </S.AcceptTerms>

          <S.SubmitButton>
            <button type="submit">Cadastrar</button>
          </S.SubmitButton>
        </S.LoginWithEmailAndPass>
      </form>

      <S.IHaveAccount>
        <span>
          Já tem uma conta?&nbsp;
          <a href="/sign-in">Entrar</a>
        </span>
      </S.IHaveAccount>
    </S.ContainerLogin>
  );
};

export default LoginForm;
