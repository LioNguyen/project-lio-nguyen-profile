import { Box, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { memo } from 'react'

/**
 * NavigationDots Component
 * Displays dot indicators for each section with active state
 */
export interface NavigationDotsProps {
  /** Total number of sections */
  totalSections: number
  /** Currently active section index */
  activeSection: number
  /** Callback when a dot is clicked */
  onDotClick: (index: number) => void
  /** Custom class name */
  className?: string
}

export const NavigationDots: FC<NavigationDotsProps> = memo(
  ({ totalSections, activeSection, onDotClick, className }) => {
    const MotionBox = motion(Box)

    return (
      <HStack
        bottom="32px"
        className={className}
        gap={3}
        left="50%"
        position="fixed"
        spacing={3}
        transform="translateX(-50%)"
        zIndex={10}
      >
        {Array.from({ length: totalSections }).map((_, index) => (
          <MotionBox
            key={index}
            animate={{
              scale: activeSection === index ? 1.2 : 1,
              backgroundColor: activeSection === index ? '#4299e1' : '#cbd5e0',
            }}
            as="button"
            aria-label={`Navigate to section ${index + 1}`}
            borderRadius="full"
            cursor="pointer"
            height="12px"
            onClick={() => onDotClick(index)}
            transition={{ duration: 0.3 }}
            width="12px"
            _hover={{
              backgroundColor: '#4299e1',
              transform: 'scale(1.2)',
            }}
          />
        ))}
      </HStack>
    )
  }
)

NavigationDots.displayName = 'NavigationDots'
