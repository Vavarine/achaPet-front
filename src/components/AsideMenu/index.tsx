import Link from 'next/link';
import { ContainerAsideMenu } from './styles';

import Doggo from '../../assets/doggo.svg';
import { User } from '../../types';
import useAuth from '../../hooks/useAuth';

type AsideMenuProps = {
  user: User;
};

export const AsideMenu = ({ user }: AsideMenuProps) => {
  const { signOut } = useAuth();

  return (
    <ContainerAsideMenu>
      <Doggo />
      <p>Olá {user.name}</p>
      <button onClick={signOut}>Deslogar</button>
    </ContainerAsideMenu>
  );
};
