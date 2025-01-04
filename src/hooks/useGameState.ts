import { useState, useCallback } from 'react';
import { GameState } from '../types/game';
import { shuffleQuestions } from '../utils/questionRandomizer';
import { questions } from '../data/questions';

const INITIAL_STATE: GameState = {
  currentQuestion: 0,
  score: 0,
  timeLeft: 15,
  isGameOver: false,
  username: '',
  correctAnswers: 0,
  wrongAnswers: 0,
  fastestAnswer: Infinity,
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [shuffledQuestions] = useState(() => shuffleQuestions(questions));
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);

  const startGame = useCallback((username: string) => {
    setGameState({
      ...INITIAL_STATE,
      username,
    });
  }, []);

  const updateAnswer = useCallback((isCorrect: boolean, timeSpent: number) => {
    setGameState(prev => ({
      ...prev,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      wrongAnswers: prev.wrongAnswers + (isCorrect ? 0 : 1),
      fastestAnswer: isCorrect ? Math.min(prev.fastestAnswer, timeSpent) : prev.fastestAnswer,
    }));
  }, []);

  const handleExit = useCallback(() => {
    setShowExitConfirmation(true);
  }, []);

  const confirmExit = useCallback(() => {
    setGameState(INITIAL_STATE);
    setShowExitConfirmation(false);
  }, []);

  const cancelExit = useCallback(() => {
    setShowExitConfirmation(false);
  }, []);

  return {
    gameState,
    setGameState,
    shuffledQuestions,
    showExitConfirmation,
    startGame,
    updateAnswer,
    handleExit,
    confirmExit,
    cancelExit,
  };
};