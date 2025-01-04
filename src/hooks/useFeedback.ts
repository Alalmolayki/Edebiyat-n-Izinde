import { useState } from 'react';
import { getFeedbackMessage } from '../utils/gameLogic';

interface FeedbackState {
  isCorrect: boolean | null;
  message: string;
}

export const useFeedback = () => {
  const [feedback, setFeedback] = useState<FeedbackState>({
    isCorrect: null,
    message: '',
  });

  const showFeedback = (isCorrect: boolean) => {
    setFeedback({
      isCorrect,
      message: getFeedbackMessage(isCorrect),
    });
  };

  const clearFeedback = () => {
    setFeedback({
      isCorrect: null,
      message: '',
    });
  };

  return {
    feedback,
    showFeedback,
    clearFeedback,
  };
};