import Head from 'next/head';

import InstitutionalMenu from '../../components/InstitutionalMenu';
import { InstitutionalContainer } from '../../styles/pages/Institutional';

function Institutional() {
  return (
    <InstitutionalContainer>
      <Head>
        <title>Login | Institutional</title>
      </Head>
      <InstitutionalMenu />
    </InstitutionalContainer>
  );
}

export default Institutional;
