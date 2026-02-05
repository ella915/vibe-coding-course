import { useState } from 'react';
import { Link } from 'react-router-dom';
import { courseContent } from '../../data/courseContent';
import { getAnswerDisplayText } from '../../utils/quizUtils';

export function QuizResults({ results, moduleId, onRetake }) {
  const [showDetails, setShowDetails] = useState(false);
  const { score, passed, details, passingScore } = results;

  // Find next module
  const currentModuleIndex = courseContent.findIndex((m) => m.id === moduleId);
  const nextModule = courseContent[currentModuleIndex + 1];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Result Card */}
      <div
        className={`rounded-2xl p-8 text-center mb-8 ${
          passed
            ? 'bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200'
            : 'bg-gradient-to-br from-orange-50 to-amber-100 border border-orange-200'
        }`}
      >
        {/* Icon */}
        <div
          className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
            passed ? 'bg-green-500' : 'bg-orange-500'
          }`}
        >
          {passed ? (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )}
        </div>

        {/* Title */}
        <h2 className={`text-2xl font-bold mb-2 ${passed ? 'text-green-800' : 'text-orange-800'}`}>
          {passed ? 'Congratulations!' : 'Almost There!'}
        </h2>

        {/* Message */}
        <p className={`text-lg mb-4 ${passed ? 'text-green-700' : 'text-orange-700'}`}>
          {passed
            ? 'You passed the quiz and can proceed to the next module.'
            : `You need ${passingScore}% to pass. Review the material and try again.`}
        </p>

        {/* Score */}
        <div className="inline-flex items-center justify-center bg-white rounded-xl px-8 py-4 shadow-sm">
          <span className="text-4xl font-bold text-gray-900">{score}%</span>
          <span className="ml-2 text-gray-500">
            ({details.filter((d) => d.isCorrect).length}/{details.length} correct)
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        {passed && nextModule && (
          <Link
            to={`/module/${nextModule.id}`}
            className="w-full sm:w-auto px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors text-center"
          >
            Continue to Next Module
          </Link>
        )}

        {passed && moduleId === 'final-quiz' && (
          <Link
            to="/completion"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-accent-500 to-primary-500 text-white font-medium rounded-lg hover:from-accent-600 hover:to-primary-600 transition-colors text-center"
          >
            View Certificate
          </Link>
        )}

        <button
          onClick={onRetake}
          className={`w-full sm:w-auto px-6 py-3 font-medium rounded-lg transition-colors text-center ${
            passed
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              : 'bg-primary-600 text-white hover:bg-primary-700'
          }`}
        >
          {passed ? 'Retake Quiz' : 'Try Again'}
        </button>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
        >
          {showDetails ? 'Hide Details' : 'Review Answers'}
        </button>
      </div>

      {/* Detailed Results */}
      {showDetails && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Answer Review</h3>
          {details.map((item, index) => (
            <div
              key={item.questionId}
              className={`p-4 rounded-lg border ${
                item.isCorrect
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex items-start space-x-3">
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    item.isCorrect ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  {item.isCorrect ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 mb-2">
                    {index + 1}. {item.question}
                  </p>

                  <div className="text-sm space-y-1">
                    <p>
                      <span className="text-gray-500">Your answer: </span>
                      <span className={item.isCorrect ? 'text-green-700' : 'text-red-700'}>
                        {item.userAnswer !== undefined
                          ? getAnswerDisplayText(item, item.userAnswer)
                          : 'No answer'}
                      </span>
                    </p>

                    {!item.isCorrect && (
                      <p>
                        <span className="text-gray-500">Correct answer: </span>
                        <span className="text-green-700">
                          {getAnswerDisplayText(item, item.correctAnswer)}
                        </span>
                      </p>
                    )}
                  </div>

                  {item.explanation && (
                    <p className="mt-2 text-sm text-gray-600 bg-white bg-opacity-50 p-2 rounded">
                      <span className="font-medium">Explanation: </span>
                      {item.explanation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizResults;
