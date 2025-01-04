import React from 'react';
import { BookOpen } from 'lucide-react';

interface GameHeaderProps {
  username: string;
  score: number;
  currentQuestion: number;
  totalQuestions: number;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  username,
  score,
  currentQuestion,
  totalQuestions
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <BookOpen className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Mesnevi Tahmin</h1>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">Kullanıcı: {username}</p>
        <p className="font-bold text-blue-600">Skor: {score}</p>
        <p className="text-sm text-gray-500">
          Soru: {currentQuestion + 1}/{totalQuestions}
        </p>
      </div>
    </div>
  );
};