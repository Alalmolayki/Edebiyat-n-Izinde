import React from 'react';
import { Trophy, Clock, XCircle, CheckCircle } from 'lucide-react';

interface GameStatsProps {
  correctAnswers: number;
  wrongAnswers: number;
  fastestAnswer: number;
  totalScore: number;
}

export const GameStats: React.FC<GameStatsProps> = ({
  correctAnswers,
  wrongAnswers,
  fastestAnswer,
  totalScore,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-md">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 text-green-600 mb-2">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Doğru Cevaplar</span>
        </div>
        <p className="text-2xl font-bold text-gray-800">{correctAnswers}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 text-red-600 mb-2">
          <XCircle className="w-5 h-5" />
          <span className="font-medium">Yanlış Cevaplar</span>
        </div>
        <p className="text-2xl font-bold text-gray-800">{wrongAnswers}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 text-blue-600 mb-2">
          <Clock className="w-5 h-5" />
          <span className="font-medium">En Hızlı Cevap</span>
        </div>
        <p className="text-2xl font-bold text-gray-800">{fastestAnswer}s</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 text-yellow-600 mb-2">
          <Trophy className="w-5 h-5" />
          <span className="font-medium">Toplam Puan</span>
        </div>
        <p className="text-2xl font-bold text-gray-800">{totalScore}</p>
      </div>
    </div>
  );
};