import { Center } from '@chakra-ui/react'
import type { FC } from 'react'
import { memo } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

/**
 * NavigationButtons Molecule
 * Left/Right circle navigation buttons for horizontal scrolling
 */
export interface NavigationButtonsProps {
  /** Current active section index */
  activeSection: number
  /** Total number of sections */
  totalSections: number
  /** Callback when previous button is clicked */
  onPrevious: () => void
  /** Callback when next button is clicked */
  onNext: () => void
  /** Custom class name */
  className?: string
}

export const NavigationButtons: FC<NavigationButtonsProps> = memo(
  ({ activeSection, totalSections, onPrevious, onNext, className }) => {
    const isFirstSection = activeSection === 0
    const isLastSection = activeSection === totalSections - 1

    return (
      <>
        {/* Previous Button */}
        {!isFirstSection && (
          <Center
            _hover={{
              bg: 'default.buttonBgHover',
              transform: 'scale(1.1)',
            }}
            aria-label="Previous section"
            as="button"
            bg="default.buttonBg"
            borderRadius="full"
            boxShadow="lg"
            className={className}
            height="50px"
            left={{ base: '10px', sm: '20px' }}
            onClick={onPrevious}
            position="fixed"
            top="50%"
            transform="translateY(-50%)"
            transition="all 0.3s ease"
            width="50px"
            zIndex={10}
          >
            <FaChevronLeft color="white" size={20} />
          </Center>
        )}

        {/* Next Button */}
        {!isLastSection && (
          <Center
            _hover={{
              bg: 'default.buttonBgHover',
              transform: 'scale(1.1)',
            }}
            aria-label="Next section"
            as="button"
            bg="default.buttonBg"
            borderRadius="full"
            boxShadow="lg"
            className={className}
            height="50px"
            onClick={onNext}
            position="fixed"
            right={{ base: '10px', sm: '20px' }}
            top="50%"
            transform="translateY(-50%)"
            transition="all 0.3s ease"
            width="50px"
            zIndex={10}
          >
            <FaChevronRight color="white" size={20} />
          </Center>
        )}
      </>
    )
  }
)

NavigationButtons.displayName = 'NavigationButtons'
