import React from 'react';
import S from './styles';

type TypographyProps = {
  children: React.ReactNode;
  variant: 'h1' | 'span';
};

const Typography = ({ children, variant }: TypographyProps) => {
  const Component = S[variant] as React.ElementType;
  return <Component fontSize={variant}>{children}</Component>;
};

export default Typography;
