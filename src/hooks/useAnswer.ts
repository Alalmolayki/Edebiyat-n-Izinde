import { useState } from 'react';

export const useAnswer = () => {
  const [answer, setAnswer] = useState('');

  const clearAnswer = () => setAnswer('');

  return {
    answer,
    setAnswer,
    clearAnswer,
  };
};