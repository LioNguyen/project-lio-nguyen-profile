import { Box, Circle } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { FC } from 'react'

/**
 * AnimatedCircle Component
 * A circle marker with animated gradient fill from light to dark (top to bottom)
 * Used in Timeline to mark the start of each experience group
 */
export interface AnimatedCircleProps {
  /** Animation delay for circle appearance in seconds */
  delay: number
  /** Unique key for the circle */
  circleKey: string
}

export const AnimatedCircle: FC<AnimatedCircleProps> = ({
  delay,
  circleKey,
}) => {
  const MotionBox = motion(Box)

  return (
    <Box position="relative">
      <Circle
        as={motion.div}
        key={circleKey}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        // @ts-expect-error - motion component transition
        transition={{
          delay,
          duration: 0.2,
          ease: "linear",
        }}
        bg="gray.300"
        size="15px"
        overflow="hidden"
        position="relative"
      >
        {/* Animated dark overlay for gradient effect */}
        <MotionBox
          as={motion.div}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="gray.700"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            delay: delay + 0.1,
            duration: 0.3,
            ease: "linear",
          }}
          style={{ transformOrigin: 'top' }}
        />
      </Circle>
    </Box>
  )
}

AnimatedCircle.displayName = 'AnimatedCircle'
