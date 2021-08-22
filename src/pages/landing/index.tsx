import { Header, Title } from '../../components';
import * as S from '../../styles/pages/landingPage';

export default function LandingPage() {
  return (
    <S.Container>
      <S.ContainerBackground>
        <Header />
        <S.MainBanner>
          <S.TextContainerMainBanner>
            <h2>
              AchaPet
              <img src="/assets/petLogoBold.png" alt="Logo" />
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <button>Saiba mais</button>
          </S.TextContainerMainBanner>
          <S.MainBannerImg>
            <img src="/assets/banner-map.png" alt="Logo" />
          </S.MainBannerImg>
        </S.MainBanner>
      </S.ContainerBackground>
    </S.Container>
  );
}
