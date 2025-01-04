import { useState, useEffect } from 'react';

export const useTimer = (initialTime: number, onTimeUp: () => void) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timeLeft, isRunning, onTimeUp]);

  const resetTimer = () => {
    setTimeLeft(initialTime);
    setIsRunning(true);
  };

  const pauseTimer = () => setIsRunning(false);
  const resumeTimer = () => setIsRunning(true);

  return {
    timeLeft,
    resetTimer,
    pauseTimer,
    resumeTimer,
  };
};