import React from 'react';
import Typography from '../../components/Typography';
import Button from '../../components/Button';

const SelectType = () => {
  return (
    <React.Fragment>
      <Typography variant="h1">Soletrador digital</Typography>
      <Button background="blue" size="large" style="filled">
        Treinamento
      </Button>
      <Button background="blue" size="small" style="filled">
        Treinamento
      </Button>
    </React.Fragment>
  );
};

export default SelectType;
