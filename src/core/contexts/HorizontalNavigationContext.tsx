import type { ReactNode } from 'react'
import { createContext, useContext, useState, useMemo, memo } from 'react'
import type { FC } from 'react'

/**
 * Horizontal Navigation Context
 * Provides navigation state and methods across the application
 */
interface HorizontalNavigationContextValue {
  /** Currently active section index */
  activeSection: number
  /** Total number of sections */
  totalSections: number
  /** Navigate to specific section */
  navigateToSection: (index: number) => void
  /** Navigate to next section */
  navigateNext: () => void
  /** Navigate to previous section */
  navigatePrevious: () => void
}

const HorizontalNavigationContext = createContext<HorizontalNavigationContextValue | undefined>(
  undefined
)

interface HorizontalNavigationProviderProps {
  children: ReactNode
  totalSections: number
}

export const HorizontalNavigationProvider: FC<HorizontalNavigationProviderProps> = memo(
  ({ children, totalSections }) => {
    const [activeSection, setActiveSection] = useState(0)

    const navigateToSection = (index: number) => {
      if (index < 0 || index >= totalSections) return
      setActiveSection(index)
    }

    const navigateNext = () => {
      if (activeSection < totalSections - 1) {
        navigateToSection(activeSection + 1)
      }
    }

    const navigatePrevious = () => {
      if (activeSection > 0) {
        navigateToSection(activeSection - 1)
      }
    }

    const value = useMemo(
      () => ({
        activeSection,
        totalSections,
        navigateToSection,
        navigateNext,
        navigatePrevious,
      }),
      [activeSection, totalSections]
    )

    return (
      <HorizontalNavigationContext.Provider value={value}>
        {children}
      </HorizontalNavigationContext.Provider>
    )
  }
)

HorizontalNavigationProvider.displayName = 'HorizontalNavigationProvider'

/**
 * Hook to access horizontal navigation context
 */
export const useHorizontalNavigationContext = () => {
  const context = useContext(HorizontalNavigationContext)
  if (!context) {
    throw new Error(
      'useHorizontalNavigationContext must be used within HorizontalNavigationProvider'
    )
  }
  return context
}
