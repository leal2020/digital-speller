import * as React from 'react';
import * as S from './styles';

type WordProps = {
  children: React.ReactNode;
  active?: boolean;
};

const Word = ({ children, active }: WordProps) => {
  return <S.Container $active={active}>{children}</S.Container>;
};

export default Word;
