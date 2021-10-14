import Link from 'next/link';
import * as S from './styles';

import Doggo from '../../assets/doggo.svg';
import { User } from '../../types';
import useAuth from '../../hooks/useAuth';
import { MdPersonOutline } from 'react-icons/md';

type AsideMenuProps = {
  user: User;
};

export const AsideMenu = ({ user }: AsideMenuProps) => {
  const { signOut } = useAuth();

  return (
    <S.Header>
      <S.LogoContainer>
        <Doggo />
        <S.Logo>AchaPet</S.Logo>
      </S.LogoContainer>
      <S.ContainerMenu>
        <MdPersonOutline size={20} />
        {/* <p>Olá {user.name}</p>
        <button onClick={signOut}>Deslogar</button> */}
      </S.ContainerMenu>
    </S.Header>
  );
};
