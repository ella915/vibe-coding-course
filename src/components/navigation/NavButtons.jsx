import { Link } from 'react-router-dom';
import { getNextSection, getPreviousSection, getModule, getSection } from '../../utils/progressUtils';

export function NavButtons({ moduleId, sectionId }) {
  const previous = getPreviousSection(moduleId, sectionId);
  const next = getNextSection(moduleId, sectionId);

  const previousModule = previous ? getModule(previous.moduleId) : null;
  const previousSection = previous && !previous.isQuiz ? getSection(previous.moduleId, previous.sectionId) : null;

  const nextModule = next ? getModule(next.moduleId) : null;
  const nextSection = next && !next.isQuiz ? getSection(next.moduleId, next.sectionId) : null;

  return (
    <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
      {/* Previous */}
      {previous ? (
        <Link
          to={
            previous.isQuiz
              ? `/module/${previous.moduleId}/quiz`
              : `/module/${previous.moduleId}/section/${previous.sectionId}`
          }
          className="group flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <div className="text-left">
            <div className="text-xs text-gray-400 uppercase tracking-wide">Previous</div>
            <div className="font-medium truncate max-w-[200px]">
              {previousSection?.title || 'Quiz'}
            </div>
          </div>
        </Link>
      ) : (
        <div /> // Spacer
      )}

      {/* Next */}
      {next ? (
        <Link
          to={
            next.isQuiz
              ? `/module/${next.moduleId}/quiz`
              : `/module/${next.moduleId}/section/${next.sectionId}`
          }
          className="group flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors"
        >
          <div className="text-right">
            <div className="text-xs text-gray-400 uppercase tracking-wide">Next</div>
            <div className="font-medium truncate max-w-[200px]">
              {next.isQuiz ? 'Take Quiz' : nextSection?.title}
            </div>
          </div>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      ) : (
        <div /> // Spacer
      )}
    </div>
  );
}

export default NavButtons;
