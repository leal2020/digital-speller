import * as React from 'react';
import * as S from './styles';
import { colors } from '../../theme/colors';

type ContainerProps = {
  children: React.ReactNode;
  background: keyof typeof colors;
};

const Container = ({ children, background }: ContainerProps) => {
  return <S.Box background={background}>{children}</S.Box>;
};

export default Container;
