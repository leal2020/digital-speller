import { colors } from '../../theme/colors';
import styled from 'styled-components';

type StepCircleProps = {
  $color: keyof typeof colors;
  $status: 'active' | 'inactive' | 'completed';
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

export const StepCircle = styled.div<StepCircleProps>`
  background-color: ${({ $color, $status }) =>
    $status === 'active'
      ? colors[$color]
      : $status === 'inactive'
        ? 'transparent'
        : hexToRgb(colors[$color], 0.5)};
  border: ${({ $color, $status }) =>
    $status === 'active'
      ? 'none'
      : $status === 'inactive'
        ? `2px solid ${colors[$color]}`
        : 'none'};
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ $color, $status }) =>
    $status === 'active'
      ? colors.white
      : $status === 'inactive'
        ? colors[$color]
        : colors.white};
`;
