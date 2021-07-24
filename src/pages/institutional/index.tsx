import Head from 'next/head';

import InstitutionalMenu from '../../components/InstitutionalMenu';
import contents from './contents';

import { InstitutionalContainer } from '../../styles/pages/Institutional';

function Institutional() {
  return (
    <InstitutionalContainer>
      <Head>
        <title>Institutional | AchaPet</title>
      </Head>
      <InstitutionalMenu menuItems={contents} />
    </InstitutionalContainer>
  );
}

export default Institutional;
