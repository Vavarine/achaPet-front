import * as S from './styles';

type WhatPeopleSayCardProps = {
  text: string;
  author: string;
  data: string;
};

export const WhatPeopleSayCard = ({
  text,
  author,
  data,
}: WhatPeopleSayCardProps) => {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
      <S.Author>{author}</S.Author>
      <S.Data>{data}</S.Data>
    </S.Container>
  );
};
