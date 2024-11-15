import React, { Fragment } from 'react';
import Typography from '../../../components/Typography';
import * as S from '../styles';
import Button from '../../../components/Button';

const Step5 = () => {
  return (
    <Fragment>
      <Typography variant="span" fontSize="large">
        Qual o nome do pesquisador responsável?
      </Typography>
      <input type="number" />
      <S.ButtonsContainer>
        <Button background="blue" size="large" style="bezeled">
          Voltar
        </Button>
        <Button background="green" size="large" style="filled">
          Iniciar
        </Button>
      </S.ButtonsContainer>
    </Fragment>
  );
};

export default Step5;
