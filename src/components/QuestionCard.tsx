import React from 'react';
import { MesneviQuestion } from '../data/questions';

interface QuestionCardProps {
  question: MesneviQuestion;
  timeLeft: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, timeLeft }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="text-center space-y-4">
        <p className="text-6xl mb-4 animate-pulse">{question.emojis}</p>
        <div className="space-y-2">
          <p className="text-lg font-medium text-blue-600">Yazar: {question.author}</p>
          <p className="text-sm text-gray-500">İpucu: {question.hint}</p>
        </div>
      </div>
      <div className="text-center text-sm font-medium">
        <span className="text-blue-600">{timeLeft}</span> saniye kaldı
      </div>
    </div>
  );
};