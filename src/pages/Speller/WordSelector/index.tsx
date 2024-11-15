import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import Typography from '../../../components/Typography';
import Word from '../../../components/Word';

const words = [
  'Palavra 1',
  'Palavra 2',
  'Palavra 3',
  'Palavra 4',
  'Palavra 5',
  'Palavra 6',
  'Palavra 7',
];

const INTER_STIMULUS_INTERVAL = 1000;

const WordSelector = () => {
  const [spellerWords, setSpellerWords] = useState(
    words.map((word) => ({ word, active: false })),
  );
  const lastWordIndex = useRef(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      lastWordIndex.current += 1;
      if (lastWordIndex.current >= spellerWords.length) {
        lastWordIndex.current = 0;
      }

      setSpellerWords((prevWords) =>
        prevWords.map((word, index) => ({
          ...word,
          active: index === lastWordIndex.current,
        })),
      );
    }, INTER_STIMULUS_INTERVAL);

    return () => clearInterval(interval);
  }, [spellerWords]);

  return (
    <S.Container>
      <Typography variant="h1">Soletrador</Typography>
      <S.WordGrid>
        {spellerWords.map(({ word, active }, index) => (
          <Word key={index} active={active}>
            {word}
          </Word>
        ))}
      </S.WordGrid>
    </S.Container>
  );
};

export default WordSelector;
