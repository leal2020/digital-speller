import React, { Fragment } from 'react';
import Typography from '../../../components/Typography';
import * as S from '../styles';
import Button from '../../../components/Button';

const Step4 = () => {
  return (
    <Fragment>
      <Typography variant="span" fontSize="large">
        Você possui algum tipo de limitação visual? Se sim, especifique.
      </Typography>
      <input type="number" />
      <S.ButtonsContainer>
        <Button background="blue" size="large" style="bezeled">
          Voltar
        </Button>
        <Button background="blue" size="large" style="filled">
          Continuar
        </Button>
      </S.ButtonsContainer>
    </Fragment>
  );
};

export default Step4;
