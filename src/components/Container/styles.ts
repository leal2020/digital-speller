import styled, { CSSProperties } from 'styled-components';

interface BoxProps {
  background: CSSProperties['backgroundColor'];
}

export const Box = styled.div<BoxProps>`
  background-color: ${({ background }) => background};
  padding: 24px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;
