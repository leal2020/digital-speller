import { colors } from '../../theme/colors';
import styled from 'styled-components';

type StepCircleProps = {
  color: keyof typeof colors;
  active: boolean;
};

export const StepCircle = styled.div<StepCircleProps>`
  background-color: ${({ color, active }) =>
    active ? colors[color] : 'transparent'};
  border: ${({ color, active }) =>
    active ? 'none' : `2px solid ${colors[color]}`};
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  color: ${colors.white};
`;
