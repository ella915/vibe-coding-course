import { useCourse } from '../../context/CourseContext';
import { useProgress } from '../../hooks/useProgress';
import { Breadcrumb } from '../navigation/Breadcrumb';
import { ProgressBar } from '../common/ProgressBar';

export function Header({ onSearchClick }) {
  const { sidebarOpen, toggleSidebar } = useCourse();
  const { overallProgress } = useProgress();

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Menu button and Breadcrumb */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Breadcrumb />
        </div>

        {/* Right side - Search and Progress */}
        <div className="flex items-center space-x-4">
          {/* Search button */}
          <button
            onClick={onSearchClick}
            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-xs font-medium text-gray-400 bg-gray-200 rounded">
              /
            </kbd>
          </button>

          {/* Progress indicator */}
          <div className="hidden sm:flex items-center space-x-3">
            <span className="text-sm text-gray-500">Progress</span>
            <div className="w-32">
              <ProgressBar value={overallProgress} size="sm" />
            </div>
            <span className="text-sm font-medium text-gray-700">{overallProgress}%</span>
          </div>
        </div>
      </div>

      {/* Mobile progress bar */}
      <div className="sm:hidden px-4 pb-3">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
          <span>Overall Progress</span>
          <span className="font-medium text-gray-700">{overallProgress}%</span>
        </div>
        <ProgressBar value={overallProgress} size="sm" />
      </div>
    </header>
  );
}

export default Header;
