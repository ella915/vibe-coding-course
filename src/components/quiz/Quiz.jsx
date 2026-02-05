import { useState, useEffect } from 'react';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import { QuizProgress } from './QuizProgress';
import { useCourse } from '../../context/CourseContext';
import { getQuiz, calculateScore, isQuizPassed, getDetailedResults } from '../../utils/quizUtils';

export function Quiz({ moduleId, onComplete }) {
  const quiz = getQuiz(moduleId);
  const { saveQuizResult, quizResults } = useCourse();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

  // Check if quiz exists
  if (!quiz) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Quiz not found for this module.</p>
      </div>
    );
  }

  const { questions, passingScore } = quiz;
  const previousResult = quizResults[moduleId];

  const handleAnswer = (questionIndex, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const score = calculateScore(questions, answers);
    const passed = isQuizPassed(score, passingScore);
    const detailedResults = getDetailedResults(questions, answers);

    setResults({
      score,
      passed,
      details: detailedResults,
      passingScore,
    });

    saveQuizResult(moduleId, score, passed);
    setShowResults(true);

    if (onComplete) {
      onComplete(score, passed);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setResults(null);
  };

  const isAnswered = (index) => answers[index] !== undefined;
  const allAnswered = questions.every((_, index) => isAnswered(index));

  if (showResults && results) {
    return (
      <QuizResults
        results={results}
        moduleId={moduleId}
        onRetake={handleRetake}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Module Quiz</h2>
        <p className="text-gray-600">
          Answer all questions to test your knowledge. You need {passingScore}% to pass.
        </p>
        {previousResult && (
          <div className={`mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm ${
            previousResult.passed
              ? 'bg-green-100 text-green-700'
              : 'bg-orange-100 text-orange-700'
          }`}>
            Previous attempt: {previousResult.score}%
            {previousResult.passed ? ' (Passed)' : ' (Not passed)'}
          </div>
        )}
      </div>

      {/* Progress */}
      <QuizProgress
        current={currentQuestion}
        total={questions.length}
        answers={answers}
      />

      {/* Question */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 my-6">
        <QuizQuestion
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          selectedAnswer={answers[currentQuestion]}
          onAnswer={(answer) => handleAnswer(currentQuestion, answer)}
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>

        <div className="flex items-center space-x-2">
          {/* Question dots for quick navigation */}
          <div className="hidden sm:flex items-center space-x-1">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentQuestion
                    ? 'bg-primary-500'
                    : isAnswered(index)
                    ? 'bg-primary-200'
                    : 'bg-gray-200'
                }`}
                aria-label={`Go to question ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="px-6 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Next
          </button>
        )}
      </div>

      {/* Answer status */}
      <div className="mt-4 text-center text-sm text-gray-500">
        {Object.keys(answers).length} of {questions.length} questions answered
      </div>
    </div>
  );
}

export default Quiz;
