import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'

/**
 * HorizontalSection Template
 * Wrapper for individual sections in horizontal scroll container
 */
export interface HorizontalSectionProps {
  /** Section content */
  children: ReactNode
  /** Custom class name */
  className?: string
  /** Section identifier */
  id?: string
}

export const HorizontalSection: FC<HorizontalSectionProps> = memo(
  ({ children, className, id }) => {
    const MotionBox = motion(Box)

    return (
      <MotionBox
        className={className}
        flex="0 0 100vw"
        height="100vh"
        id={id}
        initial={{ opacity: 0, x: 50 }}
        position="relative"
        sx={{
          scrollSnapAlign: 'center',
          scrollSnapStop: 'always',
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }}
        whileInView={{ opacity: 1, x: 0 }}
        width="100vw"
      >
        {children}
      </MotionBox>
    )
  }
)

HorizontalSection.displayName = 'HorizontalSection'
