import { useParams, Navigate, Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { courseContent } from '../data/courseContent';
import { Quiz } from '../components/quiz/Quiz';

export function QuizPage() {
  const { moduleId } = useParams();
  const { isModuleUnlocked, isQuizAvailable } = useProgress();

  // Handle final quiz
  if (moduleId === 'final-quiz') {
    return (
      <div>
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Final Course Exam</h1>
          <p className="text-gray-600">
            This comprehensive exam tests your knowledge across all course modules.
          </p>
        </div>
        <Quiz moduleId="final-quiz" />
      </div>
    );
  }

  // Find module
  const module = courseContent.find((m) => m.id === moduleId);

  // Redirect if module not found
  if (!module) {
    return <Navigate to="/" replace />;
  }

  // Check if module is unlocked
  const isUnlocked = isModuleUnlocked(moduleId);
  if (!isUnlocked) {
    return <Navigate to="/" replace />;
  }

  // Check if quiz is available (all sections complete)
  const quizAvailable = isQuizAvailable(moduleId);

  if (!quizAvailable) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Locked</h2>
        <p className="text-gray-600 mb-6">
          Complete all sections in this module to unlock the quiz.
        </p>
        <Link
          to={`/module/${moduleId}`}
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Module
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          to={`/module/${moduleId}`}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center mb-4"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {module.title}
        </Link>
      </div>
      <Quiz moduleId={moduleId} />
    </div>
  );
}

export default QuizPage;
