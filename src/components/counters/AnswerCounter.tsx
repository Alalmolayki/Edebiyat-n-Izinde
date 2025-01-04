import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface AnswerCounterProps {
  correct: number;
  wrong: number;
}

export const AnswerCounter: React.FC<AnswerCounterProps> = ({ correct, wrong }) => {
  return (
    <div className="fixed top-4 left-4 flex space-x-4">
      <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
        <CheckCircle className="w-4 h-4 text-green-600" />
        <span className="font-medium text-green-600">{correct}</span>
      </div>
      <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
        <XCircle className="w-4 h-4 text-red-600" />
        <span className="font-medium text-red-600">{wrong}</span>
      </div>
    </div>
  );
};