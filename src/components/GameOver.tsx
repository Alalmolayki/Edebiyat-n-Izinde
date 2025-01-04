import React from 'react';
import { GameStats } from './GameStats';
import { Trophy } from 'lucide-react';

interface GameOverProps {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  fastestAnswer: number;
  onRestart: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({
  score,
  correctAnswers,
  wrongAnswers,
  fastestAnswer,
  onRestart
}) => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <div className="flex justify-center">
          <Trophy className="w-16 h-16 text-yellow-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Oyun Bitti!</h2>
        <p className="text-gray-600">
          Katıldığınız için teşekkür ederiz! Umarız ki keyif almışsınızdır.
        </p>
      </div>

      <GameStats
        correctAnswers={correctAnswers}
        wrongAnswers={wrongAnswers}
        fastestAnswer={fastestAnswer}
        totalScore={score}
      />

      <button
        onClick={onRestart}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Tekrar Oyna
      </button>
    </div>
  );
};