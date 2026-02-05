import { quizzes } from '../data/quizzes';

/**
 * Get quiz for a specific module
 */
export function getQuiz(moduleId) {
  return quizzes.find((q) => q.moduleId === moduleId) || null;
}

/**
 * Calculate quiz score
 */
export function calculateScore(questions, answers) {
  if (!questions || questions.length === 0) return 0;

  let correct = 0;

  questions.forEach((question, index) => {
    const userAnswer = answers[index];
    if (isAnswerCorrect(question, userAnswer)) {
      correct++;
    }
  });

  return Math.round((correct / questions.length) * 100);
}

/**
 * Check if an answer is correct
 */
export function isAnswerCorrect(question, userAnswer) {
  if (userAnswer === undefined || userAnswer === null) return false;

  switch (question.type) {
    case 'multiple-choice':
    case 'true-false':
    case 'scenario':
      return userAnswer === question.correctAnswer;

    case 'multiple-select':
      // For multiple select, check if arrays match
      if (!Array.isArray(userAnswer) || !Array.isArray(question.correctAnswer)) {
        return false;
      }
      if (userAnswer.length !== question.correctAnswer.length) {
        return false;
      }
      const sortedUser = [...userAnswer].sort();
      const sortedCorrect = [...question.correctAnswer].sort();
      return sortedUser.every((val, idx) => val === sortedCorrect[idx]);

    case 'fill-blank':
      // Case-insensitive comparison for fill-in-the-blank
      const normalizedUser = String(userAnswer).toLowerCase().trim();
      const normalizedCorrect = String(question.correctAnswer).toLowerCase().trim();
      return normalizedUser === normalizedCorrect;

    default:
      return userAnswer === question.correctAnswer;
  }
}

/**
 * Check if quiz is passed
 */
export function isQuizPassed(score, passingScore = 70) {
  return score >= passingScore;
}

/**
 * Get detailed results for a quiz attempt
 */
export function getDetailedResults(questions, answers) {
  return questions.map((question, index) => {
    const userAnswer = answers[index];
    const isCorrect = isAnswerCorrect(question, userAnswer);

    return {
      questionId: question.id,
      question: question.question,
      type: question.type,
      userAnswer,
      correctAnswer: question.correctAnswer,
      isCorrect,
      explanation: question.explanation,
      options: question.options,
    };
  });
}

/**
 * Shuffle array (for randomizing question order)
 */
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get answer display text
 */
export function getAnswerDisplayText(question, answerIndex) {
  if (question.type === 'true-false') {
    return answerIndex === true ? 'True' : 'False';
  }

  if (question.type === 'multiple-select' && Array.isArray(answerIndex)) {
    return answerIndex.map((idx) => question.options[idx]).join(', ');
  }

  if (question.options && typeof answerIndex === 'number') {
    return question.options[answerIndex];
  }

  return String(answerIndex);
}

/**
 * Format quiz statistics
 */
export function formatQuizStats(quizResult) {
  if (!quizResult) return null;

  return {
    score: quizResult.score,
    passed: quizResult.passed,
    attempts: quizResult.attempts,
    lastAttempt: quizResult.lastAttempt
      ? new Date(quizResult.lastAttempt).toLocaleDateString()
      : null,
  };
}

/**
 * Get all quizzes summary
 */
export function getQuizzesSummary(quizResults) {
  return quizzes.map((quiz) => ({
    moduleId: quiz.moduleId,
    questionCount: quiz.questions.length,
    passingScore: quiz.passingScore,
    result: quizResults[quiz.moduleId] || null,
  }));
}

export default {
  getQuiz,
  calculateScore,
  isAnswerCorrect,
  isQuizPassed,
  getDetailedResults,
  shuffleArray,
  getAnswerDisplayText,
  formatQuizStats,
  getQuizzesSummary,
};
