import { MesneviQuestion } from '../data/questions';
import { normalizeText } from './textNormalizer';

export const calculatePoints = (timeLeft: number): number => {
  return timeLeft * 10;
};

export const getFeedbackMessage = (isCorrect: boolean): string => {
  const correctMessages = [
    "Harika! Böyle devam et!",
    "Tebrikler! Çok iyisin!",
    "Muhteşem! Harika ilerliyorsun!",
    "Bravo! Tam isabet!",
    "Mükemmel! Devam et!"
  ];

  const incorrectMessages = [
    "Tekrar dene!",
    "Üzülme, bir sonraki soru seni bekliyor!",
    "Neredeyse doğruydu!",
    "Bir dahaki sefere!",
    "Vazgeçme, devam et!"
  ];

  const messages = isCorrect ? correctMessages : incorrectMessages;
  return messages[Math.floor(Math.random() * messages.length)];
};

export const checkAnswer = (
  userAnswer: string,
  question: MesneviQuestion
): boolean => {
  const normalizedUserAnswer = normalizeText(userAnswer);
  const normalizedCorrectAnswer = normalizeText(question.answer);
  return normalizedUserAnswer === normalizedCorrectAnswer;
};