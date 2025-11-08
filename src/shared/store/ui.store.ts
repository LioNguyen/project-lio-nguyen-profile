import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

/**
 * Example UI state store
 * Manages global UI state like sidebar, modals, etc.
 */
interface UIState {
  isSidebarOpen: boolean
  theme: 'light' | 'dark'
}

interface UIActions {
  setSidebarOpen: (isOpen: boolean) => void
  setTheme: (theme: 'light' | 'dark') => void
  toggleSidebar: () => void
  toggleTheme: () => void
}

export const useUIStore = create<UIState & UIActions>()(
  devtools(
    (set) => ({
      // State
      isSidebarOpen: false,
      theme: 'light',

      // Actions
      setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
      setTheme: (theme) => set({ theme }),
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    { name: 'ui-store' }
  )
)
