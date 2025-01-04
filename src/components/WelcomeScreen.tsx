import React, { useState } from 'react';
import { BookOpen, Info } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (username: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [username, setUsername] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onStart(username.trim());
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="text-center space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
        <div className="flex justify-center items-center space-x-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-800">Edebiyatın İzinde</h1>
        </div>
        
        <div className="space-y-2">
          <p className="text-xl text-blue-600 font-medium animate-fade-in">
            Türk Edebiyatını Keşfetmeye Hazır Mısınız?
          </p>
          <p className="text-gray-600">
            Emojilerden mesnevileri tahmin ederek puanlar kazanın!
          </p>
        </div>

        <button
          onClick={() => setShowInfo(!showInfo)}
          className="flex items-center justify-center space-x-2 w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Info className="w-5 h-5" />
          <span>Nasıl Oynanır?</span>
        </button>

        {showInfo && (
          <div className="text-left bg-blue-50 p-4 rounded-lg space-y-2">
            <h3 className="font-medium text-blue-800">Oyun Kuralları:</h3>
            <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
              <li>Her soruda size emojiler gösterilecek</li>
              <li>15 saniye içinde mesneviyi tahmin edin</li>
              <li>Ne kadar hızlı bilirseniz o kadar çok puan kazanın</li>
              <li>Yanlış tahminlerde puan kaybetmezsiniz</li>
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Kullanıcı adınızı girin"
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors"
          >
            Oyuna Başla
          </button>
        </form>
      </div>
    </div>
  );
};