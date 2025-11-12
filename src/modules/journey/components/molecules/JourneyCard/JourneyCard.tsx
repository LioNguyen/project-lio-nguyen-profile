import { Box, Card, CardBody, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'
import type { FC } from 'react'
import isEqual from 'lodash/isEqual'

import { type ExperienceItem } from '@/shared/store'
import { useI18n } from '@/core/i18n'
import { TimeBadge, TypeBadge } from '../../atoms'

/**
 * JourneyCard Component
 * Displays a timeline card with floating badges for time and type
 * Used within the Timeline to show experience items
 */
export interface JourneyCardProps {
  /** Experience item data to display */
  item: ExperienceItem
  /** Index for animation timing */
  index: number
  /** Whether this card is on even position (for alternating layout) */
  isEven: boolean
  /** Delay for animation timing */
  itemDelay: number
  /** Click handler for opening drawer */
  onClick: () => void
}

export const JourneyCard: FC<JourneyCardProps> = memo(({
  item,
  index,
  isEven,
  itemDelay,
  onClick,
}) => {
  const MotionBox = motion(Box)
  const { t } = useI18n()

  const content = useMemo(
    () => (
      <MotionBox
        key={`content-${index}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.25,
          delay: itemDelay + 0.1,
          ease: [0.4, 0, 0.2, 1],
        }}
        position="absolute"
        textAlign={{ base: 'left', sm: isEven ? 'right' : 'left' }}
        top="-6px"
        width={{ base: '280px', sm: '320px', md: '350px' }}
        left={{ base: '25px', sm: isEven ? 'auto' : '30px' }}
        right={{ base: 'auto', sm: isEven ? '30px' : 'auto' }}
      >
        {/* Floating badges - on left for mobile, positioned by isEven for desktop */}
        <Box
          position="absolute"
          top="-8px"
          left={{ base: '8px', sm: isEven ? 'auto' : '8px' }}
          right={{ base: 'auto', sm: isEven ? '8px' : 'auto' }}
          display="flex"
          gap={1.5}
          zIndex={1}
          flexDirection={{ base: 'row', sm: 'row' }}
        >
          <TimeBadge>{item.time}</TimeBadge>
          <TypeBadge type={item.type}>{t(`journey.${item.type}`)}</TypeBadge>
        </Box>

        <Card
          cursor="pointer"
          variant="outline"
          size="sm"
          borderRadius="12px"
          transition="all 0.2s"
          onClick={onClick}
          _hover={{
            boxShadow: 'lg',
            transform: 'translateY(-2px)',
          }}
        >
          <CardBody padding={{ base: '10px', sm: '12px', md: '15px' }}>
            {/* Job title */}
            <Text
              color="default.titleDark"
              fontSize={{ base: '11px', sm: 'md', md: 'lg' }}
              fontWeight="bold"
              lineHeight={{ base: 1.3, sm: 1.4, md: 1.5 }}
              mt={{ base: '8px', sm: '10px' }} // Add top margin for badge spacing
            >
              {item.title}
            </Text>

            {/* Company name */}
            <Text
              color="default.text"
              fontSize={{ base: '9px', sm: 'xs', md: 'sm' }}
              lineHeight={{ base: 1.3, sm: 1.4, md: 1.5 }}
              marginTop={{ base: '3px', sm: '4px' }}
              fontWeight="medium"
            >
              {item.subtitle}
            </Text>

            {/* Preview lines with ellipsis */}
            {item.details && item.details.length > 0 && (
              <Box marginTop={{ base: '6px', sm: '8px' }}>
                <Text
                  fontSize={{ base: '10px', sm: '12px', md: '14px' }}
                  color="gray.600"
                  lineHeight="1.4"
                  noOfLines={2}
                >
                  {item.details[0]}
                  {item.details.length > 1 && ` ${item.details[1]}`}
                </Text>
                <Text
                  fontSize={{ base: '8px', sm: '10px', md: '11px' }}
                  color="blue.600"
                  fontWeight="semibold"
                  marginTop="2px"
                  _hover={{ textDecoration: 'underline' }}
                >
                  {t('journey.viewMore')}
                </Text>
              </Box>
            )}
          </CardBody>
        </Card>
      </MotionBox>
    ),
    [item, index, isEven, itemDelay, onClick, t, MotionBox]
  )

  return content
}, isEqual)

JourneyCard.displayName = 'JourneyCard'
