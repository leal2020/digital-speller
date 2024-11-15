import styled from 'styled-components';

export const MainContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  gap: 24px;

  h1 {
    position: absolute;
    top: 48px;
    left: 48px;
  }
`;
