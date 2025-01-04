import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ExitConfirmationProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ExitConfirmation: React.FC<ExitConfirmationProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full space-y-4">
        <div className="flex items-center space-x-3 text-yellow-600">
          <AlertTriangle className="w-6 h-6" />
          <h3 className="text-lg font-medium">Çıkış Onayı</h3>
        </div>
        
        <p className="text-gray-600">
          Oyundan çıkmak istediğinize emin misiniz? İlerlemeleriniz kaydedilmeyecek.
        </p>
        
        <div className="flex space-x-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            İptal
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Çıkış Yap
          </button>
        </div>
      </div>
    </div>
  );
};