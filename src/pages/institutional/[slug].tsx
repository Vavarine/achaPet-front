import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import InstitutionalMenu from '../../components/InstitutionalMenu';
import { InstitutionalContainer } from '../../styles/pages/Institutional';

interface InstitucionalProps {
  slug: string;
}

export default function Institutional({ slug }: InstitucionalProps) {
  return (
    <InstitutionalContainer>
      <Head>
        <title>{slug} | AchaPet</title>
      </Head>
      <InstitutionalMenu />
    </InstitutionalContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params;

  return {
    props: {
      slug,
    },
  };
};
