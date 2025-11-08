import { Box, HStack } from '@chakra-ui/react'
import type { FC } from 'react'
import { memo } from 'react'

/**
 * NavigationDots Molecule
 * Dot navigation showing all sections with active state
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
    return (
      <HStack
        bottom="40px"
        className={className}
        left="50%"
        position="fixed"
        spacing={3}
        transform="translateX(-50%)"
        zIndex={10}
      >
        {Array.from({ length: totalSections }).map((_, index) => (
          <Box
            key={index}
            _hover={{
              bg: activeSection === index ? 'default.titleDark' : 'default.text',
              transform: 'scale(1.2)',
            }}
            as="button"
            bg={activeSection === index ? 'default.titleDark' : 'rgba(255, 255, 255, 0.5)'}
            borderRadius="full"
            boxShadow="md"
            cursor="pointer"
            height={activeSection === index ? '12px' : '10px'}
            onClick={() => onDotClick(index)}
            transition="all 0.3s ease"
            width={activeSection === index ? '12px' : '10px'}
          />
        ))}
      </HStack>
    )
  }
)

NavigationDots.displayName = 'NavigationDots'
