import * as S from "./styles";
import Logo from "../../../public/Logo.png";

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
<<<<<<< HEAD
          <S.MoreLink to="/login">Saiba mais sobre nós</S.MoreLink>
        </div>
        <S.LogoImage src={Logo} alt="logo acha pet" title="acha pet logo" />
=======
          <S.MoreLink href="/login">Saiba mais sobre nós</S.MoreLink>
        </div>
        <S.LogoImage src="Logo.png" alt="logo acha pet" title="acha pet logo" />
>>>>>>> institutional
      </S.ContainerDescrition>
    </S.Container>
  );
};
