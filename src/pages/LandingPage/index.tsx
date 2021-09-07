import { Header, WhatPeopleSayCard } from '../../components';
import * as S from '../../styles/pages/landingPage';

export default function LandingPage() {
  return (
    <S.Container>
      <Header />
      <main>
        <S.ContainerBackground>
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
        <S.DescriptionContainer>
          <h2>AchaPet</h2>
          <h5>O site para encontra seu animal de estimação</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </S.DescriptionContainer>
        <S.AdoptContainer>
          <S.AdoptContainerText>
            <h2>Adote um pet</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy
            </p>
            <a href="#">Saiba mais</a>
          </S.AdoptContainerText>
          <S.AdoptContainerImg>
            <img src="/assets/logoPets.png " alt="Logo" />
          </S.AdoptContainerImg>
        </S.AdoptContainer>
        <S.WhatPeopleSay>
          <h2>
            O que as pessoas dizem sobre o <strong>AchaPet</strong>
          </h2>
          <S.WhatPeopleSayWrapper>
            <WhatPeopleSayCard
              text="Lorem Ipsum is simply
              dummy text of the printing and typesetting"
              author="Lindomar"
              data="12/02/12"
            ></WhatPeopleSayCard>
            <WhatPeopleSayCard
              text="Lorem Ipsum is simply
              dummy text of the printing and typesetting"
              author="Lindomar"
              data="12/02/12"
            ></WhatPeopleSayCard>
            <WhatPeopleSayCard
              text="Lorem Ipsum is simply
              dummy text of the printing and typesetting"
              author="Lindomar"
              data="12/02/12"
            ></WhatPeopleSayCard>
          </S.WhatPeopleSayWrapper>
        </S.WhatPeopleSay>
      </main>
    </S.Container>
  );
}
