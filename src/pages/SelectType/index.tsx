import React from 'react';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import * as S from './styles';

const SelectType = () => {
  return (
    <S.MainContainer>
      <Typography variant="h1">Soletrador digital</Typography>
      <Button background="blue" size="large" style="filled">
        Treinamento
      </Button>
      <Button background="blue" size="large" style="filled">
        Teste
      </Button>
    </S.MainContainer>
  );
};

export default SelectType;
