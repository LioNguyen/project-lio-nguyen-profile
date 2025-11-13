import { Box, Card, CardBody, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'
import type { FC } from 'react'
import isEqual from 'lodash/isEqual'
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa'

import { type ExperienceItem } from '@/shared/store'
import { useI18n } from '@/core/i18n'
import { TimeBadge } from '../../atoms'

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
        </Box>

        <Card
          cursor="pointer"
          variant="outline"
          size="sm"
          borderRadius="12px"
          transition="all 0.2s"
          onClick={onClick}
          bg={item.type === 'fulltime' ? 'whiteAlpha.900' : 'whiteAlpha.700'}
          borderWidth={item.type === 'fulltime' ? '1.5px' : '1.5px'}
          borderColor={item.type === 'fulltime' ? 'rgba(0,0,0,0.14)' : 'rgba(0,0,0,0.08)'}
          borderLeftWidth={item.type === 'fulltime' ? '4px' : '1.5px'}
          borderLeftColor={item.type === 'fulltime' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.08)'}
          position="relative"
          _hover={{
            boxShadow: item.type === 'fulltime' ? 'lg' : 'md',
            transform: 'translateY(-2px)',
            borderColor: 'rgba(0,0,0,0.18)',
            bg: item.type === 'fulltime' ? 'rgba(0,0,0,0.035)' : 'rgba(0,0,0,0.01)',
          }}
        >
          {/* Type Icon in corner - opposite side of badge */}
          <Box
            position="absolute"
            top={{ base: '10px', sm: '12px', md: '14px' }}
            left={{ base: 'auto', sm: isEven ? '10px' : 'auto' }}
            right={{ base: '10px', sm: isEven ? 'auto' : '10px' }}
            opacity={item.type === 'fulltime' ? 0.4 : 0.3}
            fontSize={{ base: '14px', sm: '16px', md: '18px' }}
            color="default.titleDark"
          >
            {item.type === 'fulltime' ? <FaBriefcase /> : <FaLaptopCode />}
          </Box>
          <CardBody padding={{ base: '10px', sm: '12px', md: '15px' }}>
            {/* Job title */}
            <Text
              color="default.titleDark"
              fontSize={{ base: '11px', sm: 'md', md: 'lg' }}
              fontWeight="bold"
              lineHeight={{ base: 1.3, sm: 1.4, md: 1.5 }}
              mt={{ base: '8px', sm: '10px' }}
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
              <Box marginTop={{ base: '8px', sm: '10px' }}>
                <Text
                  fontSize={{ base: '8px', sm: '10px', md: '11px' }}
                  color="blue.600"
                  fontWeight="semibold"
                  _hover={{ textDecoration: 'underline' }}
                  cursor="pointer"
                >
                  {t('journey.viewMore')}
                </Text>
              </Box>
            )}

            {/* Tech Stack */}
            {item.techStack && (
              <Box 
                marginTop={{ base: '10px', sm: '12px', md: '14px' }}
                paddingTop={{ base: '8px', sm: '10px', md: '12px' }}
                borderTop="1px solid"
                borderTopColor="rgba(0,0,0,0.08)"
              >
                <Text
                  fontSize={{ base: '8px', sm: '9px', md: '10px' }}
                  fontWeight="bold"
                  color="default.titleDark"
                  marginBottom={{ base: '4px', sm: '5px', md: '6px' }}
                  textTransform="uppercase"
                  letterSpacing="0.8px"
                  opacity={0.9}
                >
                  Tech Stack
                </Text>
                <Text
                  fontSize={{ base: '8px', sm: '10px', md: '11px' }}
                  color="default.titleDark"
                  lineHeight="1.5"
                  fontWeight="600"
                  opacity={0.85}
                >
                  {item.techStack}
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
