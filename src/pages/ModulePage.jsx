import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useProgress } from '../hooks/useProgress';
import { courseContent } from '../data/courseContent';
import { Section } from '../components/content/Section';
import { NavButtons } from '../components/navigation/NavButtons';
import { TableOfContents } from '../components/navigation/TableOfContents';
import { BookmarkButton } from '../components/common/BookmarkButton';
import { ProgressBar } from '../components/common/ProgressBar';

export function ModulePage() {
  const { moduleId, sectionId } = useParams();
  const { setCurrentLocation, markSectionComplete } = useCourse();
  const { isModuleUnlocked, getModuleProgress, isSectionComplete } = useProgress();

  // Find module
  const module = courseContent.find((m) => m.id === moduleId);

  // Check if module is unlocked
  const isUnlocked = isModuleUnlocked(moduleId);

  // Update current location
  useEffect(() => {
    if (module && isUnlocked) {
      setCurrentLocation(moduleId, sectionId || null);
    }
  }, [moduleId, sectionId, module, isUnlocked, setCurrentLocation]);

  // Redirect if module not found
  if (!module) {
    return <Navigate to="/" replace />;
  }

  // Redirect if module is locked
  if (!isUnlocked) {
    return <Navigate to="/" replace />;
  }

  // If no section specified, show module overview
  if (!sectionId) {
    return <ModuleOverview module={module} />;
  }

  // Find section
  const section = module.sections.find((s) => s.id === sectionId);

  // Redirect if section not found
  if (!section) {
    return <Navigate to={`/module/${moduleId}`} replace />;
  }

  const isComplete = isSectionComplete(sectionId);

  const handleMarkComplete = () => {
    markSectionComplete(sectionId);
  };

  return (
    <div>
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link
            to={`/module/${moduleId}`}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {module.title}
          </Link>
          <BookmarkButton sectionId={sectionId} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{section.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          {section.estimatedTime && (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {section.estimatedTime}
            </span>
          )}
          {isComplete && (
            <span className="flex items-center text-green-600">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Completed
            </span>
          )}
        </div>
      </div>

      {/* Section Content */}
      <Section content={section.content} />

      {/* Mark Complete Button */}
      {!isComplete && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleMarkComplete}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Mark as Complete
          </button>
        </div>
      )}

      {/* Navigation */}
      <NavButtons moduleId={moduleId} sectionId={sectionId} />
    </div>
  );
}

function ModuleOverview({ module }) {
  const { getModuleProgress, getQuizResult, isSectionComplete } = useProgress();
  const progress = getModuleProgress(module.id);
  const quizResult = getQuizResult(module.id);

  return (
    <div>
      {/* Module Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{module.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{module.description}</p>

        {/* Progress */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 max-w-xs">
            <ProgressBar value={progress} size="md" />
          </div>
          <span className="text-sm font-medium text-gray-700">{progress}% complete</span>
        </div>
      </div>

      {/* Table of Contents */}
      <TableOfContents module={module} />

      {/* Quick Actions */}
      <div className="mt-8 flex flex-wrap gap-4">
        {/* Start/Continue Button */}
        {progress < 100 && (
          <Link
            to={`/module/${module.id}/section/${
              module.sections.find((s) => !isSectionComplete(s.id))?.id || module.sections[0].id
            }`}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            {progress === 0 ? 'Start Module' : 'Continue'}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        )}

        {/* Quiz Button */}
        <Link
          to={`/module/${module.id}/quiz`}
          className={`inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors ${
            quizResult?.passed
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          {quizResult?.passed ? `Quiz Passed (${quizResult.score}%)` : 'Take Quiz'}
        </Link>
      </div>
    </div>
  );
}

export default ModulePage;
