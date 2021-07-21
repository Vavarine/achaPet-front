import { GetStaticPaths, GetStaticProps } from 'next';

interface TesteProps {
  slug: string;
}

export default function Teste({ slug }: TesteProps) {
  return (
    <div>
      <h1>{slug}</h1>
    </div>
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
