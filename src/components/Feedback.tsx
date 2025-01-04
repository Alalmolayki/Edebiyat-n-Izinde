import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface FeedbackProps {
  isCorrect: boolean | null;
  message: string;
}

export const Feedback: React.FC<FeedbackProps> = ({ isCorrect, message }) => {
  if (isCorrect === null) return null;

  return (
    <div className={`flex items-center justify-center space-x-2 p-4 rounded-lg ${
      isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    } animate-fade-in`}>
      {isCorrect ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <XCircle className="w-5 h-5" />
      )}
      <p className="font-medium">{message}</p>
    </div>
  );
};