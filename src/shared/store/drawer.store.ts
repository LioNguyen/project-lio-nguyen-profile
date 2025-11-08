import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/**
 * Experience Drawer State
 * Contains information about a work experience entry
 */
export interface ExperienceItem {
  title: string;
  subtitle: string;
  time: string;
  type: 'freelance' | 'fulltime';
  details?: string[];
  techStack?: string;
}

/**
 * Drawer State Store
 * Manages global state for drawers across the application
 */
interface DrawerState {
  // Experience Drawer state
  isExperienceDrawerOpen: boolean;
  selectedExperience: ExperienceItem | null;
  selectedExperienceIndex: number | null;
}

/**
 * Drawer Actions
 * Actions to control drawer state
 */
interface DrawerActions {
  openExperienceDrawer: (index: number, experience: ExperienceItem) => void;
  closeExperienceDrawer: () => void;
}

/**
 * Drawer Store
 * Global Zustand store for managing drawer state
 * 
 * Features:
 * - Experience drawer state management
 * - Devtools integration for debugging
 * - Type-safe state and actions
 */
export const useDrawerStore = create<DrawerState & DrawerActions>()(
  devtools(
    (set) => ({
      // Initial State
      isExperienceDrawerOpen: false,
      selectedExperience: null,
      selectedExperienceIndex: null,

      // Actions
      openExperienceDrawer: (index, experience) =>
        set({
          isExperienceDrawerOpen: true,
          selectedExperience: experience,
          selectedExperienceIndex: index,
        }),

      closeExperienceDrawer: () =>
        set({
          isExperienceDrawerOpen: false,
          selectedExperience: null,
          selectedExperienceIndex: null,
        }),
    }),
    { name: 'drawer-store' }
  )
);
