import { useState, useMemo } from 'react';
import { courseContent } from '../data/courseContent';
import { glossary } from '../data/glossary';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) {
      return { sections: [], glossary: [] };
    }

    const searchTerm = query.toLowerCase().trim();
    const sectionResults = [];
    const glossaryResults = [];

    // Search through course content
    courseContent.forEach((module) => {
      module.sections.forEach((section) => {
        // Check title
        if (section.title.toLowerCase().includes(searchTerm)) {
          sectionResults.push({
            type: 'section',
            moduleId: module.id,
            moduleTitle: module.title,
            sectionId: section.id,
            sectionTitle: section.title,
            match: 'title',
          });
          return;
        }

        // Check content
        const contentMatch = section.content.some((block) => {
          if (block.type === 'paragraph' && block.text?.toLowerCase().includes(searchTerm)) {
            return true;
          }
          if (block.type === 'highlight' && block.text?.toLowerCase().includes(searchTerm)) {
            return true;
          }
          if (block.type === 'code' && block.code?.toLowerCase().includes(searchTerm)) {
            return true;
          }
          if (block.type === 'list' && block.items?.some((item) => item.toLowerCase().includes(searchTerm))) {
            return true;
          }
          return false;
        });

        if (contentMatch) {
          sectionResults.push({
            type: 'section',
            moduleId: module.id,
            moduleTitle: module.title,
            sectionId: section.id,
            sectionTitle: section.title,
            match: 'content',
          });
        }
      });
    });

    // Search through glossary
    glossary.forEach((item) => {
      if (
        item.term.toLowerCase().includes(searchTerm) ||
        item.definition.toLowerCase().includes(searchTerm)
      ) {
        glossaryResults.push({
          type: 'glossary',
          term: item.term,
          definition: item.definition,
          category: item.category,
          match: item.term.toLowerCase().includes(searchTerm) ? 'term' : 'definition',
        });
      }
    });

    return {
      sections: sectionResults.slice(0, 10), // Limit results
      glossary: glossaryResults.slice(0, 5),
    };
  }, [query]);

  const totalResults = results.sections.length + results.glossary.length;
  const hasResults = totalResults > 0;

  const openSearch = () => setIsOpen(true);
  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
  };

  const toggleSearch = () => {
    if (isOpen) {
      closeSearch();
    } else {
      openSearch();
    }
  };

  return {
    query,
    setQuery,
    results,
    totalResults,
    hasResults,
    isOpen,
    openSearch,
    closeSearch,
    toggleSearch,
  };
}

export default useSearch;
