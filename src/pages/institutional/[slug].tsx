import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import InstitutionalMenu from '../../components/InstitutionalMenu';
import { InstitutionalContainer } from '../../styles/pages/institutional/styles';
import { InstitutionalContent } from '../../types';
import Markdown from 'markdown-to-jsx';

import contents from '../../messages/institutionalContents';

interface InstitucionalProps {
  pageContent: InstitutionalContent;
}

export default function Institutional({ pageContent }: InstitucionalProps) {
  const { title, text, slug } = pageContent;

  return (
    <InstitutionalContainer>
      <Head>
        <title>{title} | AchaPet</title>
      </Head>
      <InstitutionalMenu menuItems={contents} selectedSlug={slug} />
      <main>
        <h1>{title}</h1>
        <Markdown>{text}</Markdown>
      </main>
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

  const pageContent = contents.filter(content => content.slug === slug)[0];

  if (!pageContent) {
    return {
      redirect: {
        destination: '/institutional',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pageContent,
    },
  };
};
