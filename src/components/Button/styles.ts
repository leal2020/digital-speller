import { colors } from '../../theme/colors';
import styled from 'styled-components';

type ButtonProps = {
  $background: keyof typeof colors;
  $buttonStyle: 'filled' | 'bezeled';
  $size: 'small' | 'large';
};

function hexToRgb(hex: string, alpha = 1) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgb = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

export const ButtonElement = styled.button<ButtonProps>`
  background-color: ${({ $background, $buttonStyle }) => {
    if ($buttonStyle === 'filled') {
      return colors[$background];
    }
    return hexToRgb(colors[$background], 0.15);
  }};
  color: ${({ $background, $buttonStyle }) => {
    if ($buttonStyle === 'filled') {
      return colors.white;
    }
    return colors[$background];
  }};
  padding: ${({ $size }) => ($size === 'small' ? '4px 10px' : '18px 38px')};
  border-radius: ${({ $size }) => ($size === 'small' ? '40px' : '12px')};
  font-size: ${({ $size }) => ($size === 'small' ? '15px' : '20px')};
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;
