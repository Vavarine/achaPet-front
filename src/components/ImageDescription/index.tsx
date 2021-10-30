import Link from 'next/link';

import * as S from './styles';

export const ImageDescription = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>AchaPet</S.Title>
        <S.ContainerDescrition>
          <div>
            <S.DescritionTitle>
              Tornamos a procura do seu pet mais simples.
            </S.DescritionTitle>
            <S.Descrition>Seja ele perdido ou para ser seu</S.Descrition>
            <Link href="/institutional/quem-somos">
              <S.MoreLink>Saiba mais sobre nós</S.MoreLink>
            </Link>
          </div>
          <S.LogoImage
            src="/assets/Logo.png"
            alt="logo acha pet"
            title="acha pet logo"
          />
        </S.ContainerDescrition>
      </S.Wrapper>
    </S.Container>
  );
};
