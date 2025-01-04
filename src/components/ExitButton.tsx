import React from 'react';
import { LogOut } from 'lucide-react';

interface ExitButtonProps {
  onExit: () => void;
}

export const ExitButton: React.FC<ExitButtonProps> = ({ onExit }) => {
  return (
    <button
      onClick={onExit}
      className="absolute top-4 right-4 flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
    >
      <LogOut className="w-5 h-5" />
      <span>Çıkış</span>
    </button>
  );
};