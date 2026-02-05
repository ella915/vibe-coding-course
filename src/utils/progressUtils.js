import { courseContent } from '../data/courseContent';

/**
 * Calculate overall progress percentage
 */
export function calculateOverallProgress(completedSections) {
  const totalSections = courseContent.reduce(
    (acc, module) => acc + module.sections.length,
    0
  );

  if (totalSections === 0) return 0;
  return Math.round((completedSections.length / totalSections) * 100);
}

/**
 * Calculate progress for a specific module
 */
export function calculateModuleProgress(moduleId, completedSections) {
  const module = courseContent.find((m) => m.id === moduleId);
  if (!module) return 0;

  const moduleSectionIds = module.sections.map((s) => s.id);
  const completedModuleSections = completedSections.filter((id) =>
    moduleSectionIds.includes(id)
  );

  return Math.round((completedModuleSections.length / module.sections.length) * 100);
}

/**
 * Get the next section in sequence
 */
export function getNextSection(currentModuleId, currentSectionId) {
  const moduleIndex = courseContent.findIndex((m) => m.id === currentModuleId);
  if (moduleIndex === -1) return null;

  const module = courseContent[moduleIndex];
  const sectionIndex = module.sections.findIndex((s) => s.id === currentSectionId);

  // If there's a next section in the same module
  if (sectionIndex < module.sections.length - 1) {
    return {
      moduleId: module.id,
      sectionId: module.sections[sectionIndex + 1].id,
    };
  }

  // If this was the last section, return quiz indicator
  return {
    moduleId: module.id,
    isQuiz: true,
  };
}

/**
 * Get the previous section in sequence
 */
export function getPreviousSection(currentModuleId, currentSectionId) {
  const moduleIndex = courseContent.findIndex((m) => m.id === currentModuleId);
  if (moduleIndex === -1) return null;

  const module = courseContent[moduleIndex];
  const sectionIndex = module.sections.findIndex((s) => s.id === currentSectionId);

  // If there's a previous section in the same module
  if (sectionIndex > 0) {
    return {
      moduleId: module.id,
      sectionId: module.sections[sectionIndex - 1].id,
    };
  }

  // If this was the first section, go to previous module's last section
  if (moduleIndex > 0) {
    const previousModule = courseContent[moduleIndex - 1];
    return {
      moduleId: previousModule.id,
      sectionId: previousModule.sections[previousModule.sections.length - 1].id,
    };
  }

  return null;
}

/**
 * Get module by ID
 */
export function getModule(moduleId) {
  return courseContent.find((m) => m.id === moduleId) || null;
}

/**
 * Get section by ID
 */
export function getSection(moduleId, sectionId) {
  const module = getModule(moduleId);
  if (!module) return null;
  return module.sections.find((s) => s.id === sectionId) || null;
}

/**
 * Get all sections flattened with module info
 */
export function getAllSections() {
  return courseContent.flatMap((module) =>
    module.sections.map((section) => ({
      ...section,
      moduleId: module.id,
      moduleTitle: module.title,
    }))
  );
}

/**
 * Calculate estimated time for entire course
 */
export function calculateTotalCourseTime() {
  const sections = getAllSections();
  let totalMinutes = 0;

  sections.forEach((section) => {
    const timeMatch = section.estimatedTime?.match(/(\d+)/);
    if (timeMatch) {
      totalMinutes += parseInt(timeMatch[1], 10);
    }
  });

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes, totalMinutes };
}

/**
 * Format time display
 */
export function formatTime(minutes) {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) {
    return `${hours}h`;
  }
  return `${hours}h ${mins}m`;
}

export default {
  calculateOverallProgress,
  calculateModuleProgress,
  getNextSection,
  getPreviousSection,
  getModule,
  getSection,
  getAllSections,
  calculateTotalCourseTime,
  formatTime,
};
