import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import isEmail from 'validator/lib/isEmail';
import api from '../../services/api';
import * as S from './styles';

const SignInForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  async function onsubmit(data) {
    const { name, email, password } = data;

    toast.promise(
      signIn(name, email, password),
      {
        loading: 'Um segundo...',
        success: data => {
          router.push('/login');
          return `Bem vindo!`;
        },
        error: err => {
          const status = err.response.status;
          if (status === 400) return 'Esse email já está em uso';

          return 'Não foi possivel fazer o cadastro';
        },
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
    const res = isEmail(email.value);

    if (!res) {
      email.classList.add('error');
    } else {
      email.classList.remove('error');
    }
  }

  async function signIn(name: string, email: string, password: string) {
    await api.post('/users/create', {
      nome: name,
      email,
      senha: password,
    });
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
          ></input>

          <label htmlFor="email" {...register('email')}>
            E-mail
          </label>
          <input
            name="email"
            type="email"
            id="email"
            {...register('email')}
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
          <a href="/login">Entrar</a>
        </span>
      </S.IHaveAccount>
    </S.ContainerLogin>
  );
};

export default SignInForm;
