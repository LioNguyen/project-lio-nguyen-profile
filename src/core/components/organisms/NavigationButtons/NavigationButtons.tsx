import { Center, IconButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { memo } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

/**
 * NavigationButtons Component
 * Left and right circle navigation buttons for horizontal scrolling
 */
export interface NavigationButtonsProps {
  /** Callback when left button is clicked */
  onPrevious: () => void
  /** Callback when right button is clicked */
  onNext: () => void
  /** Whether previous button should be disabled */
  disablePrevious?: boolean
  /** Whether next button should be disabled */
  disableNext?: boolean
  /** Custom class name */
  className?: string
}

export const NavigationButtons: FC<NavigationButtonsProps> = memo(
  ({ onPrevious, onNext, disablePrevious = false, disableNext = false, className }) => {
    const MotionCenter = motion(Center)

    return (
      <>
        {/* Left Navigation Button */}
        <MotionCenter
          animate={{ opacity: disablePrevious ? 0.3 : 1 }}
          className={className}
          left="32px"
          position="fixed"
          top="50%"
          transform="translateY(-50%)"
          zIndex={10}
        >
          <IconButton
            aria-label="Previous section"
            bg="white"
            borderRadius="full"
            boxShadow="lg"
            color="gray.800"
            icon={<FaChevronLeft size={20} />}
            isDisabled={disablePrevious}
            onClick={onPrevious}
            size="lg"
            _hover={{
              bg: 'gray.100',
              transform: 'scale(1.1)',
            }}
            _active={{
              bg: 'gray.200',
            }}
          />
        </MotionCenter>

        {/* Right Navigation Button */}
        <MotionCenter
          animate={{ opacity: disableNext ? 0.3 : 1 }}
          className={className}
          position="fixed"
          right="32px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={10}
        >
          <IconButton
            aria-label="Next section"
            bg="white"
            borderRadius="full"
            boxShadow="lg"
            color="gray.800"
            icon={<FaChevronRight size={20} />}
            isDisabled={disableNext}
            onClick={onNext}
            size="lg"
            _hover={{
              bg: 'gray.100',
              transform: 'scale(1.1)',
            }}
            _active={{
              bg: 'gray.200',
            }}
          />
        </MotionCenter>
      </>
    )
  }
)

NavigationButtons.displayName = 'NavigationButtons'
