import { colors } from '../../theme/colors';
import styled from 'styled-components';

export const Field = styled.input`
  background-color: ${colors['grey-6']};
  height: 64px;
  width: 100%;
  padding-left: 24px;
  color: ${colors.black};
  font-size: 24px;
  border: none;
  border-radius: 8px;
  font-weight: 100;
`;
