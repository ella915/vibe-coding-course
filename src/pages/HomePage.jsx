import { Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { courseContent } from '../data/courseContent';
import { ProgressBar } from '../components/common/ProgressBar';
import { calculateTotalCourseTime, formatTime } from '../utils/progressUtils';

export function HomePage() {
  const {
    overallProgress,
    getResumePoint,
    getModuleProgress,
    isModuleUnlocked,
    getQuizResult,
    getStats,
  } = useProgress();

  const resumePoint = getResumePoint();
  const stats = getStats();
  const totalTime = calculateTotalCourseTime();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Vibe Coding Course
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Master AI-assisted development with this comprehensive course on vibe coding and automation.
        </p>
      </div>

      {/* Progress Card */}
      {overallProgress > 0 && (
        <div className="bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl p-6 text-white mb-8 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">Welcome Back!</h2>
              <p className="opacity-90">Continue your learning journey</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">{overallProgress}%</div>
              <div className="opacity-90 text-sm">complete</div>
            </div>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          {resumePoint && (
            <Link
              to={
                resumePoint.isQuiz
                  ? `/module/${resumePoint.moduleId}/quiz`
                  : `/module/${resumePoint.moduleId}/section/${resumePoint.sectionId}`
              }
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Continue Learning
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          )}
        </div>
      )}

      {/* Start Learning Card (for new users) */}
      {overallProgress === 0 && (
        <div className="bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl p-8 text-white mb-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Start?</h2>
          <p className="opacity-90 mb-6">
            Begin your journey into AI-assisted development. Estimated time: {formatTime(totalTime.totalMinutes)}.
          </p>
          <Link
            to={`/module/${courseContent[0].id}/section/${courseContent[0].sections[0].id}`}
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-opacity-90 transition-colors text-lg"
          >
            Start Course
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Modules"
          value={courseContent.length}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          }
        />
        <StatCard
          label="Sections"
          value={stats.totalSections}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
        />
        <StatCard
          label="Quizzes"
          value={`${stats.passedQuizzes}/${stats.totalQuizzes}`}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          }
        />
        <StatCard
          label="Est. Time"
          value={`${totalTime.hours}h`}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      {/* Module List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Course Modules</h2>
        {courseContent.map((module, index) => {
          const isUnlocked = isModuleUnlocked(module.id);
          const progress = getModuleProgress(module.id);
          const quizResult = getQuizResult(module.id);
          const isComplete = progress === 100 && quizResult?.passed;

          return (
            <Link
              key={module.id}
              to={isUnlocked ? `/module/${module.id}` : '#'}
              onClick={(e) => !isUnlocked && e.preventDefault()}
              className={`block bg-white rounded-xl border-2 p-6 transition-all ${
                isUnlocked
                  ? 'border-gray-200 hover:border-primary-300 hover:shadow-md cursor-pointer'
                  : 'border-gray-100 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                    isComplete
                      ? 'bg-green-100 text-green-600'
                      : isUnlocked
                      ? 'bg-primary-100 text-primary-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {isComplete ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : isUnlocked ? (
                    index + 1
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Module {index + 1}: {module.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {module.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-500">
                      {module.sections.length} sections
                    </span>
                    {isUnlocked && progress > 0 && (
                      <div className="flex items-center space-x-2 flex-1 max-w-[200px]">
                        <ProgressBar value={progress} size="sm" />
                        <span className="text-gray-500 flex-shrink-0">{progress}%</span>
                      </div>
                    )}
                  </div>
                </div>
                {isUnlocked && (
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            </Link>
          );
        })}

        {/* Final Quiz Card */}
        <Link
          to="/module/final-quiz/quiz"
          className="block bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl border-2 border-accent-200 p-6 transition-all hover:border-accent-300 hover:shadow-md"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Final Course Exam
              </h3>
              <p className="text-gray-600 text-sm">
                Test your knowledge across all modules and earn your certificate
              </p>
            </div>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="text-gray-400 mb-2">{icon}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

export default HomePage;
