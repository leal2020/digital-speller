import styled from 'styled-components';

interface TextProps {
  fontSize: keyof typeof sizes;
}

const sizes = {
  small: '14px',
  medium: '16px',
  large: '32px',
};

const h1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  margin: 0;
`;

const span = styled.span<TextProps>`
  font-size: ${({ fontSize }) => sizes[fontSize]};
  font-weight: normal;
  line-height: 24px;
`;

const S = {
  h1,
  span,
};

export default S;
