import * as S from './styles';

export const ImageDescription = () => {
  return (
    <S.Container>
      <S.Title>AchaPet</S.Title>
      <S.ContainerDescrition>
        <div>
          <S.Descrition sizeFont="3rem" weightFont="500">
            Tornamos a procura do seu pet mais simples.
          </S.Descrition>
          <S.Descrition sizeFont="2.25rem" weightFont="400">
            Seja ele perdido ou para ser seu
          </S.Descrition>
          <S.MoreLink href="/login">Saiba mais sobre nós</S.MoreLink>
        </div>
        <S.LogoImage
          src="/assets/Logo.png"
          alt="logo acha pet"
          title="acha pet logo"
        />
      </S.ContainerDescrition>
    </S.Container>
  );
};
