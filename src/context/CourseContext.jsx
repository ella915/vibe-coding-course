import { createContext, useContext, useReducer, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CourseContext = createContext(null);

const initialState = {
  currentModule: null,
  currentSection: null,
  completedSections: [],
  quizResults: {},
  bookmarks: [],
  searchQuery: '',
  sidebarOpen: true,
};

function courseReducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_LOCATION':
      return {
        ...state,
        currentModule: action.payload.moduleId,
        currentSection: action.payload.sectionId,
      };
    case 'MARK_SECTION_COMPLETE':
      if (state.completedSections.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        completedSections: [...state.completedSections, action.payload],
      };
    case 'SAVE_QUIZ_RESULT':
      return {
        ...state,
        quizResults: {
          ...state.quizResults,
          [action.payload.moduleId]: {
            score: action.payload.score,
            passed: action.payload.passed,
            attempts: (state.quizResults[action.payload.moduleId]?.attempts || 0) + 1,
            lastAttempt: new Date().toISOString(),
          },
        },
      };
    case 'TOGGLE_BOOKMARK':
      const isBookmarked = state.bookmarks.includes(action.payload);
      return {
        ...state,
        bookmarks: isBookmarked
          ? state.bookmarks.filter((b) => b !== action.payload)
          : [...state.bookmarks, action.payload],
      };
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    case 'SET_SIDEBAR':
      return {
        ...state,
        sidebarOpen: action.payload,
      };
    case 'LOAD_SAVED_STATE':
      return {
        ...state,
        ...action.payload,
      };
    case 'RESET_PROGRESS':
      return {
        ...initialState,
        sidebarOpen: state.sidebarOpen,
      };
    default:
      return state;
  }
}

export function CourseProvider({ children }) {
  const [savedState, setSavedState] = useLocalStorage('vibe-course-progress', null);
  const [state, dispatch] = useReducer(courseReducer, initialState);

  // Load saved state on mount
  useEffect(() => {
    if (savedState) {
      dispatch({ type: 'LOAD_SAVED_STATE', payload: savedState });
    }
  }, []);

  // Save state changes to localStorage
  useEffect(() => {
    const stateToSave = {
      completedSections: state.completedSections,
      quizResults: state.quizResults,
      bookmarks: state.bookmarks,
      currentModule: state.currentModule,
      currentSection: state.currentSection,
    };
    setSavedState(stateToSave);
  }, [state.completedSections, state.quizResults, state.bookmarks, state.currentModule, state.currentSection]);

  const setCurrentLocation = (moduleId, sectionId = null) => {
    dispatch({ type: 'SET_CURRENT_LOCATION', payload: { moduleId, sectionId } });
  };

  const markSectionComplete = (sectionId) => {
    dispatch({ type: 'MARK_SECTION_COMPLETE', payload: sectionId });
  };

  const saveQuizResult = (moduleId, score, passed) => {
    dispatch({ type: 'SAVE_QUIZ_RESULT', payload: { moduleId, score, passed } });
  };

  const toggleBookmark = (sectionId) => {
    dispatch({ type: 'TOGGLE_BOOKMARK', payload: sectionId });
  };

  const isBookmarked = (sectionId) => {
    return state.bookmarks.includes(sectionId);
  };

  const setSearchQuery = (query) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  };

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  const setSidebar = (open) => {
    dispatch({ type: 'SET_SIDEBAR', payload: open });
  };

  const resetProgress = () => {
    dispatch({ type: 'RESET_PROGRESS' });
  };

  const value = {
    ...state,
    setCurrentLocation,
    markSectionComplete,
    saveQuizResult,
    toggleBookmark,
    isBookmarked,
    setSearchQuery,
    toggleSidebar,
    setSidebar,
    resetProgress,
  };

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
}

export default CourseContext;
