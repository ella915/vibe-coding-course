import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { glossary, categories } from '../data/glossary';

export function GlossaryPage() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedTerm, setExpandedTerm] = useState(null);

  // Handle term parameter from URL (from search results)
  useEffect(() => {
    const termParam = searchParams.get('term');
    if (termParam) {
      setSearchQuery(termParam);
      setExpandedTerm(termParam);
    }
  }, [searchParams]);

  // Filter and sort glossary
  const filteredGlossary = useMemo(() => {
    let filtered = [...glossary];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.term.toLowerCase().includes(query) ||
          item.definition.toLowerCase().includes(query)
      );
    }

    // Sort alphabetically
    filtered.sort((a, b) => a.term.localeCompare(b.term));

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Group by first letter
  const groupedGlossary = useMemo(() => {
    const groups = {};
    filteredGlossary.forEach((item) => {
      const letter = item.term[0].toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(item);
    });
    return groups;
  }, [filteredGlossary]);

  const letters = Object.keys(groupedGlossary).sort();

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Glossary</h1>
        <p className="text-gray-600">
          Quick reference for key terms and concepts used throughout the course.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search terms..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-sm text-gray-500">
        {filteredGlossary.length} term{filteredGlossary.length !== 1 ? 's' : ''} found
      </div>

      {/* Alphabet Navigation */}
      {letters.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-6 pb-4 border-b border-gray-200">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>
      )}

      {/* Glossary List */}
      {letters.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No terms found matching your search.
        </div>
      ) : (
        <div className="space-y-8">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`}>
              <h2 className="text-2xl font-bold text-primary-600 mb-4 sticky top-0 bg-gray-50 py-2">
                {letter}
              </h2>
              <div className="space-y-2">
                {groupedGlossary[letter].map((item) => (
                  <GlossaryItem
                    key={item.term}
                    item={item}
                    isExpanded={expandedTerm === item.term}
                    onToggle={() =>
                      setExpandedTerm(expandedTerm === item.term ? null : item.term)
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function GlossaryItem({ item, isExpanded, onToggle }) {
  return (
    <div
      className={`bg-white rounded-lg border transition-all ${
        isExpanded ? 'border-primary-300 shadow-sm' : 'border-gray-200'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex items-center space-x-3">
          <span className="font-semibold text-gray-900">{item.term}</span>
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
            {item.category}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-100">
          <p className="text-gray-700 pt-4 leading-relaxed">{item.definition}</p>
        </div>
      )}
    </div>
  );
}

export default GlossaryPage;
