import React from 'react';
import * as S from './styles';

type StepProps = {
  status?: 'active' | 'inactive' | 'completed';
  number: number;
};

const Step = ({ status = 'inactive', number }: StepProps) => {
  return (
    <S.StepCircle $status={status} $color="blue">
      {number}
    </S.StepCircle>
  );
};

export default Step;
