import { Link } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress';

export function TableOfContents({ module }) {
  const { isSectionComplete, getQuizResult } = useProgress();

  if (!module) return null;

  const quizResult = getQuizResult(module.id);

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        In This Module
      </h3>
      <ul className="space-y-2">
        {module.sections.map((section, index) => {
          const isComplete = isSectionComplete(section.id);

          return (
            <li key={section.id}>
              <Link
                to={`/module/${module.id}/section/${section.id}`}
                className="flex items-center space-x-3 text-sm text-gray-700 hover:text-primary-600 transition-colors group"
              >
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    isComplete
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-200 text-gray-500 group-hover:bg-primary-100 group-hover:text-primary-600'
                  }`}
                >
                  {isComplete ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </span>
                <span className="truncate">{section.title}</span>
                {section.estimatedTime && (
                  <span className="ml-auto text-xs text-gray-400 flex-shrink-0">
                    {section.estimatedTime}
                  </span>
                )}
              </Link>
            </li>
          );
        })}

        {/* Quiz */}
        <li className="pt-2 border-t border-gray-200">
          <Link
            to={`/module/${module.id}/quiz`}
            className="flex items-center space-x-3 text-sm text-gray-700 hover:text-primary-600 transition-colors group"
          >
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                quizResult?.passed
                  ? 'bg-green-100 text-green-600'
                  : 'bg-gray-200 text-gray-500 group-hover:bg-primary-100 group-hover:text-primary-600'
              }`}
            >
              {quizResult?.passed ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              )}
            </span>
            <span>Module Quiz</span>
            {quizResult && (
              <span className={`ml-auto text-xs flex-shrink-0 ${
                quizResult.passed ? 'text-green-600' : 'text-orange-600'
              }`}>
                {quizResult.score}%
              </span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TableOfContents;
