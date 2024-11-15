import React from 'react';
import S from './styles';

type TypographyProps = {
  children: React.ReactNode;
  variant: 'h1' | 'span';
  fontSize?: 'small' | 'medium' | 'large';
};

const Typography = ({
  children,
  variant,
  fontSize = 'small',
}: TypographyProps) => {
  const Component = S[variant] as React.ElementType;
  return <Component fontSize={fontSize}>{children}</Component>;
};

export default Typography;
