import { colors } from '../../theme/colors';
import styled from 'styled-components';

function hexToRgb(hex: string, alpha = 1) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgb = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100vh;
  width: 100vw;
`;

export const TopSlot = styled.div`
  grid-column: span 2;
  padding: 24px;
  background-color: ${colors['grey-6']};
  margin: 16px;
  border-radius: 8px;
`;

export const BottomLeftSlot = styled.div`
  padding: 24px;
  background-color: ${colors['grey-6']};
  margin: 0 8px 16px 16px;
  border-radius: 8px;
`;

export const BottomRightSlot = styled.div`
  padding: 24px;
  background-color: ${hexToRgb(colors.blue, 0.1)};
  margin: 0 16px 16px 8px;
  border-radius: 8px;
`;
