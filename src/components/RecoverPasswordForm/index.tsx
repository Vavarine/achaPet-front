import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import isEmail from 'validator/lib/isEmail';

import * as S from './styles';

const LoginForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInWithGoogle, login: signIn } = useAuth();
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

  function validateEmail(email: HTMLInputElement) {
    if (!isEmail(email.value)) {
      email.classList.add('error');
    } else {
      email.classList.remove('error');
    }
  }

  return (
    <S.ContainerLogin>
      <form onSubmit={handleSubmit(onsubmit)}>
        <S.Title>Recuperar senha</S.Title>

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
          <span className="errorMessage">Esse não é um email valido</span>

          <S.SubmitButton>
            <button type="submit">Enviar</button>
          </S.SubmitButton>

          <S.sucessMessage>
            Te enviaremos um email com sua senha!
          </S.sucessMessage>
        </S.LoginWithEmailAndPass>
      </form>

      <S.Links>
        <S.IHaveAccount>
          <span>
            Já tem uma conta?&nbsp;
            <a href="/sign-in">Entrar</a>
          </span>
        </S.IHaveAccount>
        <S.DontHaveAccount>
          <span>
            Não tem uma conta?&nbsp;
            <a href="/sign-in">Cadastre-se</a>
          </span>
        </S.DontHaveAccount>
      </S.Links>
    </S.ContainerLogin>
  );
};

export default LoginForm;
