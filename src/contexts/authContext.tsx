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

interface AuthContextType {
  user: User;
  rememberMe: boolean;
  setRememberMe: Dispatch<SetStateAction<boolean>>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
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

    setUser(JSON.parse(user));
  }, []);

  useEffect(() => {
    console.log(rememberMe);
  }, [rememberMe]);

  useEffect(() => {
    if (!user || !rememberMe) return;

    console.log('useEffect user');

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

      setUser({
        name: data.user.nome,
        email: data.user.email,
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

  async function signIn(email: string, password: string) {
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

      setCookie(undefined, 'achapet.authToken', token, {
        maxAge: 60 * 60 * 24, // 1 day
      });

      return;
    }

    throw new Error('User not authenticated');
  }

  async function signOut() {
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
        signIn,
        signOut,
        rememberMe,
        setRememberMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
