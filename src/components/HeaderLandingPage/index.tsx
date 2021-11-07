import Link from 'next/link';
import * as S from './styles';

export const Header = () => {
  return (
    <S.ContainerHeader>
      <S.LinkHome>
        AchaPet
        <img src="/assets/petLogo.png" alt="Logo" />
      </S.LinkHome>
      <S.LinksNavigation>
        <S.LinkDepartment href="/">Adoção</S.LinkDepartment>
        <S.LinkDepartment href="/">Depoimentos</S.LinkDepartment>
        <Link href="login">
          <S.LinkDepartment href="/">Começar</S.LinkDepartment>
        </Link>
      </S.LinksNavigation>
    </S.ContainerHeader>
  );
};
