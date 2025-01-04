import React, { useEffect } from 'react';

interface TimerProps {
  timeLeft: number;
  onTimeUp: () => void;
}

export const Timer: React.FC<TimerProps> = ({ timeLeft, onTimeUp }) => {
  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
        style={{ width: `${(timeLeft / 15) * 100}%` }}
      />
    </div>
  );
};