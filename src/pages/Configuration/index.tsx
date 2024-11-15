import React from 'react';
import Typography from '../../components/Typography';
import * as S from './styles';
import Step from '../../components/Step';
import Button from '../../components/Button';
import Step1 from './step-1';
import Step2 from './step-2';
import Step3 from './step-3';
import Step4 from './step-4';
import Step5 from './step-5';

const Configuration = () => {
  return (
    <S.MainContainer>
      <Typography variant="h1">Treinamento</Typography>
      <S.StepsContainer>
        <Step status="active" number={1} />
        <Step number={2} />
        <Step number={3} />
        <Step number={4} />
        <Step number={5} />
      </S.StepsContainer>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
    </S.MainContainer>
  );
};

export default Configuration;
