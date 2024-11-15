import { colors } from '../../theme/colors';
import styled from 'styled-components';

interface ContainerProps {
  $active: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ $active }) =>
    $active ? colors.black : colors['grey-5']};
  color: ${({ $active }) => ($active ? colors.white : colors.black)};
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
