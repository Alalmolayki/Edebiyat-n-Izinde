import React from 'react';
import { Trophy, Crown, Medal } from 'lucide-react';
import { Score } from '../types/game';

interface ScoreboardProps {
  scores: Score[];
}

export const Scoreboard: React.FC<ScoreboardProps> = ({ scores }) => {
  const sortedScores = [...scores].sort((a, b) => b.score - a.score);
  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 1:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-amber-600" />;
      default:
        return <Trophy className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 relative z-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">En Yüksek Skorlar</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
      </div>

      <div className="space-y-3">
        {sortedScores.length > 0 ? (
          sortedScores.map((score, index) => (
            <div
              key={`${score.username}-${score.timestamp}`}
              className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                index === 0
                  ? 'bg-yellow-50 border border-yellow-200'
                  : index === 1
                  ? 'bg-gray-50 border border-gray-200'
                  : index === 2
                  ? 'bg-amber-50 border border-amber-200'
                  : 'bg-white border border-gray-100'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm">
                  {getRankIcon(index)}
                </div>
                <div>
                  <span className="font-medium text-gray-900">{score.username}</span>
                  <p className="text-sm text-gray-500">
                    {new Date(score.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <span className="text-lg font-bold text-blue-600">{score.score}</span>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <Trophy className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">Henüz skor kaydedilmemiş</p>
            <p className="text-sm text-gray-400">İlk yüksek skoru sen kaydet!</p>
          </div>
        )}
      </div>
    </div>
  );
};