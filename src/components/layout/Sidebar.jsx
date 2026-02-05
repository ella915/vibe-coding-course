import { Link, useLocation } from 'react-router-dom';
import { useCourse } from '../../context/CourseContext';
import { useProgress } from '../../hooks/useProgress';
import { courseContent } from '../../data/courseContent';

export function Sidebar() {
  const location = useLocation();
  const { sidebarOpen, toggleSidebar } = useCourse();
  const { getModuleProgress, isModuleUnlocked, isSectionComplete, getQuizResult } = useProgress();

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out overflow-hidden flex flex-col ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0 lg:border-0'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VC</span>
            </div>
            <span className="font-semibold text-gray-900">Vibe Coding</span>
          </Link>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {courseContent.map((module, index) => {
              const isUnlocked = isModuleUnlocked(module.id);
              const progress = getModuleProgress(module.id);
              const quizResult = getQuizResult(module.id);
              const isCurrentModule = location.pathname.includes(module.id);

              return (
                <li key={module.id}>
                  {/* Module Header */}
                  <div
                    className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                      isCurrentModule
                        ? 'bg-primary-50 text-primary-700'
                        : isUnlocked
                        ? 'hover:bg-gray-50'
                        : 'opacity-50'
                    }`}
                  >
                    <Link
                      to={isUnlocked ? `/module/${module.id}` : '#'}
                      className={`flex-1 flex items-center space-x-3 ${!isUnlocked && 'cursor-not-allowed'}`}
                      onClick={(e) => !isUnlocked && e.preventDefault()}
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                        {isUnlocked ? (
                          progress === 100 && quizResult?.passed ? (
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            index + 1
                          )
                        ) : (
                          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm font-medium truncate">{module.title}</span>
                    </Link>
                    {isUnlocked && progress > 0 && (
                      <span className="text-xs text-gray-500 ml-2">{progress}%</span>
                    )}
                  </div>

                  {/* Sections */}
                  {isUnlocked && isCurrentModule && (
                    <ul className="ml-9 mt-1 space-y-1">
                      {module.sections.map((section) => {
                        const isComplete = isSectionComplete(section.id);
                        const isCurrentSection = location.pathname.includes(section.id);

                        return (
                          <li key={section.id}>
                            <Link
                              to={`/module/${module.id}/section/${section.id}`}
                              className={`flex items-center space-x-2 px-2 py-1.5 rounded text-sm transition-colors ${
                                isCurrentSection
                                  ? 'bg-primary-100 text-primary-700 font-medium'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }`}
                            >
                              {isComplete ? (
                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <span className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0" />
                              )}
                              <span className="truncate">{section.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                      {/* Quiz Link */}
                      <li>
                        <Link
                          to={`/module/${module.id}/quiz`}
                          className={`flex items-center space-x-2 px-2 py-1.5 rounded text-sm transition-colors ${
                            location.pathname.includes('/quiz')
                              ? 'bg-primary-100 text-primary-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          {quizResult?.passed ? (
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          )}
                          <span>Module Quiz</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              );
            })}

            {/* Final Quiz */}
            <li className="pt-4 border-t border-gray-200 mt-4">
              <Link
                to="/module/final-quiz/quiz"
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  location.pathname.includes('final-quiz')
                    ? 'bg-accent-50 text-accent-700'
                    : 'hover:bg-gray-50'
                }`}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </span>
                <span className="text-sm font-medium">Final Exam</span>
              </Link>
            </li>

            {/* Glossary */}
            <li>
              <Link
                to="/glossary"
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  location.pathname === '/glossary'
                    ? 'bg-primary-50 text-primary-700'
                    : 'hover:bg-gray-50'
                }`}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                <span className="text-sm font-medium">Glossary</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
