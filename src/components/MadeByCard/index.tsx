import * as S from './styles';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { FaInstagramSquare, FaGithub } from 'react-icons/fa';
type dataDevelopmentPresentationProps = {
  name: string;
  networks: {
    linkedin: string;
    github: string;
    instagram: string;
  };
  photo: string;
};

export const MadeByCard = ({
  name,
  photo,
  networks,
}: dataDevelopmentPresentationProps) => {
  return (
    <S.ContainerMadeByCard>
      <S.InformationsPersonContainer>
        <h3>{name}</h3>
        <S.NewtWorkContainer>
          <a href={networks.linkedin}>
            <TiSocialLinkedinCircular size={25}></TiSocialLinkedinCircular>
            Linkedin
          </a>
          <a href={networks.github}>
            <FaGithub size={20}></FaGithub>
            Gihub
          </a>
          <a href={networks.instagram}>
            <FaInstagramSquare size={20}></FaInstagramSquare>
            Instagram
          </a>
        </S.NewtWorkContainer>
      </S.InformationsPersonContainer>
      <S.ImageContainer>
        <img src={photo}></img>
      </S.ImageContainer>
    </S.ContainerMadeByCard>
  );
};
