import { 
  Box, 
  Circle, 
  Stack, 
  Text, 
  Card,
  CardBody,
} from '@chakra-ui/react'
import { Fragment, memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import type { FC, HTMLAttributes } from 'react'

import { useDrawerStore, type ExperienceItem } from '@/shared/store'
import { useI18n } from '@/core/i18n'

/**
 * Timeline Component
 * Displays a vertical timeline with alternating items and continuous line animation
 * Connected to global Zustand store for drawer state management
 */
export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {}

// Base timeline data structure with translation keys
const TIMELINE_DATA_KEYS = [
  {
    key: 'riskoa',
    type: 'freelance' as const,
  },
  {
    key: 'dnbsoft',
    type: 'fulltime' as const,
  },
  {
    key: 'evehr',
    type: 'fulltime' as const,
  },
  {
    key: 'jobhopin',
    type: 'freelance' as const,
  },
  {
    key: 'itlcorp',
    type: 'fulltime' as const,
  },
  {
    key: 'fram',
    type: 'fulltime' as const,
  },
]

export const Timeline: FC<TimelineProps> = memo(({ className = '', ...props }) => {
  const itemDuration = 0.8 // Duration for each item to appear (seconds) - faster
  const openExperienceDrawer = useDrawerStore(state => state.openExperienceDrawer)
  const { t } = useI18n()

  // Generate timeline data from translations
  const TIMELINE_DATA: ExperienceItem[] = useMemo(() => {
    return TIMELINE_DATA_KEYS.map(({ key, type }) => {
      const detailKeys = [
        'detail1', 'detail2', 'detail3', 'detail4', 'detail5',
        'detail6', 'detail7', 'detail8', 'detail9', 'detail10'
      ]
      
      // Get all details that exist for this experience
      const details = detailKeys
        .map(detailKey => t(`journey.${key}.${detailKey}`))
        .filter(detail => !detail.startsWith('journey.')) // Filter out missing translations

      return {
        title: t(`journey.${key}.title`),
        subtitle: t(`journey.${key}.subtitle`),
        time: t(`journey.${key}.time`),
        type,
        details,
        techStack: t(`journey.${key}.techStack`),
      }
    })
  }, [t])

  const handleOpenDrawer = (index: number, item: ExperienceItem) => {
    openExperienceDrawer(index, item)
  }

  const renderTimeline = () => {
    const MotionBox = motion(Box)

    return TIMELINE_DATA.map((item, index) => {
      const isEven = index % 2 === 0
      const itemDelay = index * itemDuration // Each item starts after previous one

      return (
        <Fragment key={`timeline-${index}`}>
          <Box position="relative">
            <Circle
              as={motion.div}
              key={`circle-${index}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              // @ts-ignore - motion component transition
              transition={{
                delay: itemDelay,
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              bg="gray.700"
              size="15px"
            />
            {/* On mobile: timeline on left, card on right, badges above on left */}
            {/* On desktop: alternating layout as before */}
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
                <Box
                  display="inline-block"
                  bg="gray.700"
                  color="white"
                  fontSize={{ base: '9px', sm: '10px', md: '11px' }}
                  fontWeight="semibold"
                  px={{ base: 1.5, sm: 2 }}
                  py={0.5}
                  borderRadius="full"
                  boxShadow="md"
                >
                  {item.time}
                </Box>
                <Box
                  display="inline-block"
                  bg={item.type === 'freelance' ? 'blue.600' : 'gray.800'}
                  color="white"
                  fontSize={{ base: '8px', sm: '9px', md: '10px' }}
                  fontWeight="semibold"
                  px={{ base: 1.5, sm: 1.5 }}
                  py={0.5}
                  borderRadius="full"
                  textTransform="capitalize"
                  boxShadow="md"
                >
                  {t(`journey.${item.type}`)}
                </Box>
              </Box>

              <Card
                cursor="pointer"
                variant="outline"
                size="sm"
                borderRadius="12px"
                transition="all 0.2s"
                onClick={() => handleOpenDrawer(index, item)}
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
          </Box>

          {index < TIMELINE_DATA.length - 1 && (
            <Box position="relative" height={{base: "120px", md: "160px"}} width="2px" key={`divider-${index}`}>
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
                key={`line-${index}`}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg="gray.700"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: itemDelay + 0.25,
                  duration: 0.55,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{ transformOrigin: 'top' }}
              />
            </Box>
          )}
        </Fragment>
      )
    })
  }

  return (
    <Stack
      alignItems="center"
      className={`timeline ${className}`}
      gap={0}
      padding="50px 0 100px"
      position="relative"
      {...props}
    >
      {/* Timeline content */}
      <Stack alignItems="center" gap={0} position="relative">
        {renderTimeline()}
      </Stack>
    </Stack>
  )
})

Timeline.displayName = 'Timeline'
