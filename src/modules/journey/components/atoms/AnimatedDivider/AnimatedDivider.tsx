import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { FC } from 'react'

/**
 * AnimatedDivider Component
 * A vertical divider line with animated fill from top to bottom
 * Used in Timeline to show connection between experience items
 */
export interface AnimatedDividerProps {
  /** Animation delay in seconds */
  delay: number
  /** Animation duration in seconds */
  duration: number
  /** Height of the divider (responsive) */
  height: {
    base: string
    md: string
  }
  /** Unique key for the divider */
  dividerKey: string
}

export const AnimatedDivider: FC<AnimatedDividerProps> = ({
  delay,
  duration,
  height,
  dividerKey,
}) => {
  const MotionBox = motion(Box)

  return (
    <Box 
      position="relative" 
      height={height} 
      width="2px"
      key={dividerKey}
    >
      {/* Background light line */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="gray.300"
      />
      {/* Animated dark line overlay */}
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="gray.700"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          delay,
          duration,
          ease: "linear",
        }}
        style={{ transformOrigin: 'top' }}
      />
    </Box>
  )
}

AnimatedDivider.displayName = 'AnimatedDivider'
