import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';

export function SearchModal({ isOpen, onClose }) {
  const { query, setQuery, results, hasResults } = useSearch();
  const inputRef = useRef(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Clear query when closing
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen, setQuery]);

  if (!isOpen) return null;

  const handleResultClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center pt-[10vh] px-4">
        <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center border-b border-gray-200">
            <svg
              className="w-5 h-5 text-gray-400 ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search course content..."
              className="w-full px-4 py-4 text-lg outline-none placeholder-gray-400"
            />
            <button
              onClick={onClose}
              className="p-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <kbd className="px-2 py-1 text-xs font-medium bg-gray-100 rounded">
                ESC
              </kbd>
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.length > 0 && query.length < 2 && (
              <div className="p-8 text-center text-gray-500">
                Type at least 2 characters to search
              </div>
            )}

            {query.length >= 2 && !hasResults && (
              <div className="p-8 text-center text-gray-500">
                No results found for "{query}"
              </div>
            )}

            {hasResults && (
              <div className="p-4">
                {/* Section Results */}
                {results.sections.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
                      Course Content
                    </h3>
                    <ul className="space-y-1">
                      {results.sections.map((result) => (
                        <li key={`${result.moduleId}-${result.sectionId}`}>
                          <Link
                            to={`/module/${result.moduleId}/section/${result.sectionId}`}
                            onClick={handleResultClick}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <svg
                              className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-primary-600">
                                {result.sectionTitle}
                              </div>
                              <div className="text-sm text-gray-500">
                                {result.moduleTitle}
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Glossary Results */}
                {results.glossary.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
                      Glossary
                    </h3>
                    <ul className="space-y-1">
                      {results.glossary.map((result) => (
                        <li key={result.term}>
                          <Link
                            to={`/glossary?term=${encodeURIComponent(result.term)}`}
                            onClick={handleResultClick}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <svg
                              className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-primary-600">
                                {result.term}
                              </div>
                              <div className="text-sm text-gray-500 line-clamp-2">
                                {result.definition}
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-gray-200 rounded mr-1">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-gray-200 rounded mr-1">↓</kbd>
                  to navigate
                </span>
                <span className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-gray-200 rounded mr-1">↵</kbd>
                  to select
                </span>
              </div>
              <span className="flex items-center">
                <kbd className="px-1.5 py-0.5 bg-gray-200 rounded mr-1">esc</kbd>
                to close
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
