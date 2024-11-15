import React, { Fragment } from 'react';
import Typography from '../../../components/Typography';
import * as S from '../styles';
import Button from '../../../components/Button';

const Step1 = () => {
  return (
    <Fragment>
      <Typography variant="span" fontSize="large">
        Qual o seu nome?
      </Typography>
      <input type="number" />
      <S.ButtonsContainer>
        <Button background="blue" size="large" style="filled">
          Próximo
        </Button>
      </S.ButtonsContainer>
    </Fragment>
  );
};

export default Step1;
