import React from 'react';
import * as S from './styles';
import EMG from './EMG';
import WordSelector from './WordSelector';
import Result from './Result';

const Speller = () => {
  return (
    <S.GridContainer>
      <S.TopSlot>
        <EMG />
      </S.TopSlot>
      <S.BottomLeftSlot>
        <WordSelector />
      </S.BottomLeftSlot>
      <S.BottomRightSlot>
        <Result />
      </S.BottomRightSlot>
    </S.GridContainer>
  );
};

export default Speller;
