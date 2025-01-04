export interface Question {
  id: number;
  emojis: string;
  answer: string;
  hint?: string;
}

export interface Score {
  username: string;
  score: number;
  timestamp: number;
}

export interface GameState {
  currentQuestion: number;
  score: number;
  timeLeft: number;
  isGameOver: boolean;
  username: string;
  correctAnswers: number;
  wrongAnswers: number;
  fastestAnswer: number;
}

export interface GameStats {
  correctAnswers: number;
  wrongAnswers: number;
  fastestAnswer: number;
  totalScore: number;
}