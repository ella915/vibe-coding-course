import { Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { useCourse } from '../context/CourseContext';

export function CompletionPage() {
  const { isCourseComplete, getStats } = useProgress();
  const { resetProgress } = useCourse();
  const stats = getStats();

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (!isCourseComplete) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 mb-6">
          <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Not Quite There Yet!</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Complete all modules and pass the final exam to unlock your certificate.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Continue Learning
          </Link>
          <Link
            to="/module/final-quiz/quiz"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Take Final Exam
          </Link>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Celebration Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mb-6 shadow-lg">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Congratulations!</h1>
        <p className="text-xl text-gray-600">
          You've completed the Vibe Coding Course
        </p>
      </div>

      {/* Certificate */}
      <div className="bg-white rounded-2xl border-4 border-double border-primary-200 p-8 mb-8 shadow-lg print:shadow-none print:border-2">
        <div className="text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 mb-6">
            <span className="text-white font-bold text-xl">VC</span>
          </div>

          {/* Title */}
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Certificate of Completion
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Vibe Coding & AI Automation
          </h3>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 rounded-full" />

          {/* Message */}
          <p className="text-gray-600 mb-6">
            This certifies that the holder has successfully completed all 12 modules
            and passed the final examination of the Vibe Coding Course.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{stats.completedSections}</div>
              <div className="text-xs text-gray-500">Sections</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{stats.passedQuizzes}</div>
              <div className="text-xs text-gray-500">Quizzes Passed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">100%</div>
              <div className="text-xs text-gray-500">Complete</div>
            </div>
          </div>

          {/* Date */}
          <p className="text-gray-500 text-sm">
            Completed on {currentDate}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-4 print:hidden">
        <button
          onClick={handlePrint}
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print Certificate
        </button>

        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>

        <button
          onClick={() => {
            if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
              resetProgress();
            }
          }}
          className="inline-flex items-center px-6 py-3 bg-white text-red-600 font-medium rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Start Over
        </button>
      </div>

      {/* Next Steps */}
      <div className="mt-12 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 print:hidden">
        <h3 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Build a personal project using what you've learned
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Join developer communities to share your journey
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Stay updated on new AI tools and features
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Share this course with friends who want to learn
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CompletionPage;
