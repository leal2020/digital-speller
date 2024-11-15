import React from 'react';
import * as S from './styles';
import Typography from '../../../components/Typography';
import EMGChart from '../../../components/EMGChart';

const EMG = () => {
  return (
    <S.Container>
      <Typography variant="h1">EMG</Typography>
      <EMGChart />
    </S.Container>
  );
};

export default EMG;
