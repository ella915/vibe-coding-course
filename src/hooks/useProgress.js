import { useMemo } from 'react';
import { useCourse } from '../context/CourseContext';
import { courseContent } from '../data/courseContent';
import { quizzes } from '../data/quizzes';

export function useProgress() {
  const { completedSections, quizResults } = useCourse();

  // Calculate total sections across all modules
  const totalSections = useMemo(() => {
    return courseContent.reduce((acc, module) => acc + module.sections.length, 0);
  }, []);

  // Calculate overall progress percentage
  const overallProgress = useMemo(() => {
    if (totalSections === 0) return 0;
    return Math.round((completedSections.length / totalSections) * 100);
  }, [completedSections.length, totalSections]);

  // Calculate progress for a specific module
  const getModuleProgress = (moduleId) => {
    const module = courseContent.find((m) => m.id === moduleId);
    if (!module) return 0;

    const moduleSectionIds = module.sections.map((s) => s.id);
    const completedModuleSections = completedSections.filter((id) =>
      moduleSectionIds.includes(id)
    );

    return Math.round((completedModuleSections.length / module.sections.length) * 100);
  };

  // Check if a module is complete (all sections done)
  const isModuleComplete = (moduleId) => {
    const module = courseContent.find((m) => m.id === moduleId);
    if (!module) return false;

    return module.sections.every((section) =>
      completedSections.includes(section.id)
    );
  };

  // Check if a section is complete
  const isSectionComplete = (sectionId) => {
    return completedSections.includes(sectionId);
  };

  // Check if a module is unlocked
  const isModuleUnlocked = (moduleId) => {
    const moduleIndex = courseContent.findIndex((m) => m.id === moduleId);

    // First module is always unlocked
    if (moduleIndex === 0) return true;

    // Check if previous module's quiz was passed
    const previousModule = courseContent[moduleIndex - 1];
    if (!previousModule) return false;

    const previousQuizResult = quizResults[previousModule.id];
    return previousQuizResult?.passed === true;
  };

  // Get the next incomplete section
  const getNextIncompleteSection = () => {
    for (const module of courseContent) {
      if (!isModuleUnlocked(module.id)) continue;

      for (const section of module.sections) {
        if (!completedSections.includes(section.id)) {
          return { moduleId: module.id, sectionId: section.id };
        }
      }

      // If all sections complete but quiz not passed, suggest quiz
      const quizResult = quizResults[module.id];
      if (!quizResult?.passed) {
        return { moduleId: module.id, isQuiz: true };
      }
    }

    // All complete
    return null;
  };

  // Get resume point (last visited or next incomplete)
  const getResumePoint = () => {
    return getNextIncompleteSection();
  };

  // Check if quiz is available for a module
  const isQuizAvailable = (moduleId) => {
    const module = courseContent.find((m) => m.id === moduleId);
    if (!module) return false;

    // Quiz is available if all sections are complete
    return module.sections.every((section) =>
      completedSections.includes(section.id)
    );
  };

  // Get quiz result for a module
  const getQuizResult = (moduleId) => {
    return quizResults[moduleId] || null;
  };

  // Check if course is complete
  const isCourseComplete = useMemo(() => {
    // All modules must have passed quizzes
    const allModulesPassed = courseContent.every((module) =>
      quizResults[module.id]?.passed === true
    );

    // Final quiz must be passed
    const finalQuizPassed = quizResults['final-quiz']?.passed === true;

    return allModulesPassed && finalQuizPassed;
  }, [quizResults]);

  // Get statistics
  const getStats = () => {
    const passedQuizzes = Object.values(quizResults).filter((r) => r.passed).length;
    const totalQuizzes = courseContent.length + 1; // +1 for final quiz

    return {
      completedSections: completedSections.length,
      totalSections,
      overallProgress,
      passedQuizzes,
      totalQuizzes,
      isCourseComplete,
    };
  };

  return {
    overallProgress,
    totalSections,
    getModuleProgress,
    isModuleComplete,
    isSectionComplete,
    isModuleUnlocked,
    getNextIncompleteSection,
    getResumePoint,
    isQuizAvailable,
    getQuizResult,
    isCourseComplete,
    getStats,
  };
}

export default useProgress;
