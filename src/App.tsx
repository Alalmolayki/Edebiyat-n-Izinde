import React, { useEffect } from 'react';
import { Timer } from './components/Timer';
import { GameOver } from './components/GameOver';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionCard } from './components/QuestionCard';
import { AnswerForm } from './components/AnswerForm';
import { Feedback } from './components/Feedback';
import { GameHeader } from './components/GameHeader';
import { ExitButton } from './components/ExitButton';
import { ExitConfirmation } from './components/modals/ExitConfirmation';
import { AnswerCounter } from './components/counters/AnswerCounter';
import { GameBackground } from './components/background/GameBackground';
import { useGameState } from './hooks/useGameState';
import { useFeedback } from './hooks/useFeedback';
import { useAnswer } from './hooks/useAnswer';
import { useTimer } from './hooks/useTimer';
import { calculatePoints, checkAnswer } from './utils/gameLogic';

function App() {
  const {
    gameState,
    setGameState,
    shuffledQuestions,
    showExitConfirmation,
    startGame,
    updateAnswer,
    handleExit,
    confirmExit,
    cancelExit,
  } = useGameState();

  const { feedback, showFeedback, clearFeedback } = useFeedback();
  const { answer, setAnswer, clearAnswer } = useAnswer();
  const { timeLeft, resetTimer } = useTimer(15, () => {
    updateAnswer(false, 15);
    handleTimeUp();
  });

  useEffect(() => {
    setGameState(prev => ({
      ...prev,
      timeLeft,
    }));
  }, [timeLeft, setGameState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentQ = shuffledQuestions[gameState.currentQuestion];
    const isCorrect = checkAnswer(answer, currentQ);
    const timeSpent = 15 - timeLeft;
    
    if (isCorrect) {
      const pointsEarned = calculatePoints(timeLeft);
      showFeedback(true);
      updateAnswer(true, timeSpent);
      
      setTimeout(() => {
        setGameState(prev => ({
          ...prev,
          score: prev.score + pointsEarned,
          currentQuestion: prev.currentQuestion + 1,
          timeLeft: 15,
        }));
        clearAnswer();
        clearFeedback();
        resetTimer();
        
        if (gameState.currentQuestion === shuffledQuestions.length - 1) {
          setGameState(prev => ({
            ...prev,
            isGameOver: true,
          }));
        }
      }, 1500);
    } else {
      showFeedback(false);
    }
  };

  const handleTimeUp = () => {
    if (gameState.currentQuestion < shuffledQuestions.length - 1) {
      setGameState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        timeLeft: 15,
      }));
      clearAnswer();
      clearFeedback();
      resetTimer();
    } else {
      setGameState(prev => ({
        ...prev,
        isGameOver: true,
      }));
    }
  };

  if (!gameState.username) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
        <GameBackground />
        <WelcomeScreen onStart={startGame} />
      </div>
    );
  }

  if (gameState.isGameOver) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <GameBackground />
        <div className="relative z-20">
          <GameOver
            score={gameState.score}
            correctAnswers={gameState.correctAnswers}
            wrongAnswers={gameState.wrongAnswers}
            fastestAnswer={gameState.fastestAnswer}
            onRestart={() => startGame('')}
          />
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[gameState.currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <GameBackground />
      <ExitButton onExit={handleExit} />
      <AnswerCounter
        correct={gameState.correctAnswers}
        wrong={gameState.wrongAnswers}
      />
      
      <div className="w-full max-w-md space-y-6 relative z-10">
        <GameHeader
          username={gameState.username}
          score={gameState.score}
          currentQuestion={gameState.currentQuestion}
          totalQuestions={shuffledQuestions.length}
        />

        <Timer timeLeft={timeLeft} onTimeUp={handleTimeUp} />

        <QuestionCard
          question={currentQuestion}
          timeLeft={timeLeft}
        />

        <Feedback
          isCorrect={feedback.isCorrect}
          message={feedback.message}
        />

        <AnswerForm
          answer={answer}
          onAnswerChange={setAnswer}
          onSubmit={handleSubmit}
        />
      </div>

      <ExitConfirmation
        isOpen={showExitConfirmation}
        onConfirm={confirmExit}
        onCancel={cancelExit}
      />
    </div>
  );
}

export default App;