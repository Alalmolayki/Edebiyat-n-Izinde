import React from 'react';

interface AnswerFormProps {
  answer: string;
  onAnswerChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const AnswerForm: React.FC<AnswerFormProps> = ({
  answer,
  onAnswerChange,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        value={answer}
        onChange={(e) => onAnswerChange(e.target.value)}
        placeholder="Cevabınızı yazın..."
        className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoComplete="off"
      />
      <button
        type="submit"
        className="w-full px-4 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors"
      >
        Cevapla
      </button>
    </form>
  );
};