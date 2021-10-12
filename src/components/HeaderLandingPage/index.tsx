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
        <a href="/">Adoção</a>
        <a href="/">Depoimentos</a>
        <Link href="login">
          <a href="/">Começar</a>
        </Link>
      </S.LinksNavigation>
    </S.ContainerHeader>
  );
};
