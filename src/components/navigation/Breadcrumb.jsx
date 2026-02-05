import { Link, useParams, useLocation } from 'react-router-dom';
import { courseContent } from '../../data/courseContent';

export function Breadcrumb() {
  const { moduleId, sectionId } = useParams();
  const location = useLocation();

  const isQuiz = location.pathname.includes('/quiz');
  const isGlossary = location.pathname === '/glossary';
  const isCompletion = location.pathname === '/completion';

  // Find module and section
  const module = courseContent.find((m) => m.id === moduleId);
  const section = module?.sections.find((s) => s.id === sectionId);

  const crumbs = [
    { label: 'Home', path: '/' },
  ];

  if (isGlossary) {
    crumbs.push({ label: 'Glossary', path: '/glossary' });
  } else if (isCompletion) {
    crumbs.push({ label: 'Course Complete', path: '/completion' });
  } else if (module) {
    crumbs.push({
      label: module.title,
      path: `/module/${module.id}`,
    });

    if (isQuiz) {
      crumbs.push({
        label: moduleId === 'final-quiz' ? 'Final Exam' : 'Quiz',
        path: `/module/${module.id}/quiz`,
      });
    } else if (section) {
      crumbs.push({
        label: section.title,
        path: `/module/${module.id}/section/${section.id}`,
      });
    }
  } else if (moduleId === 'final-quiz') {
    crumbs.push({ label: 'Final Exam', path: '/module/final-quiz/quiz' });
  }

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
      {crumbs.map((crumb, index) => (
        <div key={crumb.path} className="flex items-center">
          {index > 0 && (
            <svg
              className="w-4 h-4 text-gray-400 mx-2"
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
          )}
          {index === crumbs.length - 1 ? (
            <span className="text-gray-900 font-medium truncate max-w-[200px]">
              {crumb.label}
            </span>
          ) : (
            <Link
              to={crumb.path}
              className="text-gray-500 hover:text-gray-700 transition-colors truncate max-w-[150px]"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumb;
