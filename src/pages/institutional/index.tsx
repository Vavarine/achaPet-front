import Head from 'next/head';

import InstitutionalMenu from '../../components/InstitutionalMenu';
import contents from '../../messages/institutionalContents';

import * as S from '../../styles/pages/institutional/styles';

function Institutional() {
  return (
    <S.InstitutionalContainer>
      <Head>
        <title>Institutional | AchaPet</title>
      </Head>
      <InstitutionalMenu menuItems={contents} />
    </S.InstitutionalContainer>
  );
}

export default Institutional;
