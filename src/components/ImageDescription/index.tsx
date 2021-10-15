import Link from 'next/link';
// import Doggo from '../../assets/doggo.svg';
import * as S from './styles';

export const ImageDescription = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>AchaPet</S.Title>
        <S.ContainerDescrition>
          <S.DescriptionWrapper>
            <S.DescritionTitle>
              Tornamos a procura do seu pet mais simples.
            </S.DescritionTitle>
            <S.Descrition>Seja ele perdido ou para ser seu</S.Descrition>
            <Link href="/login">
              <S.MoreLink>Saiba mais sobre nós</S.MoreLink>
            </Link>
          </S.DescriptionWrapper>
          <S.LogoSVGContainer>{/* <Doggo /> */}</S.LogoSVGContainer>
        </S.ContainerDescrition>
      </S.Wrapper>
    </S.Container>
  );
};
