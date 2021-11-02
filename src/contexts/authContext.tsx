import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { toast } from 'react-hot-toast';

import { auth, firebase } from '../services/firebase';
import api from '../services/api';
import { User } from '../types';
import { useRouter } from 'next/router';
import axios from 'axios';
import { dispatchTokenState } from '../states/token';

interface AuthContextType {
  user: User;
  rememberMe: boolean;
  setRememberMe: Dispatch<SetStateAction<boolean>>;
  login: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const [rememberMe, setRememberMe] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const { ['achapet.user']: user } = parseCookies();

    if (!user) return;

    const parsedUser = JSON.parse(user);
    setUser(parsedUser);
  }, []);

  useEffect(() => {
    if (!user || !rememberMe) return;

    setCookie(undefined, 'achapet.user', JSON.stringify(user), {
      maxAge: 60 * 60 * 24, // 1 day
    });
  }, [user]);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, email, uid } = result.user;

      const { data } = await api.post('/users/authenticate', {
        tokenGoogle: uid,
        nome: displayName,
        email,
      });

      dispatchTokenState(data.token);

      setUser({
        name: data.user.nome,
        email: data.user.email,
        token: data.token,
      });

      if (rememberMe) {
        setCookie(undefined, 'achapet.authToken', data.token, {
          maxAge: 60 * 60 * 24, // 1 day
        });
      }

      return;
    }

    throw new Error('User not authenticated');
  }

  async function login(email: string, password: string) {
    const { data } = await api.post('/users/authenticate', {
      email,
      senha: password,
    });

    if (data.auth) {
      const {
        token,
        user: { email, nome },
      } = data;

      setUser({
        name: nome,
        email: email,
      });

      dispatchTokenState(token);

      setCookie(undefined, 'achapet.authToken', token, {
        maxAge: 60 * 60 * 24, // 1 day
      });

      return;
    }

    throw new Error('User not authenticated');
  }

  async function logOut() {
    await auth.signOut();

    setUser(undefined);
    destroyCookie(null, 'achapet.user');

    toast('Até mais...', { icon: '😢' });

    router.push('/login');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        login,
        logOut: logOut,
        rememberMe,
        setRememberMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
