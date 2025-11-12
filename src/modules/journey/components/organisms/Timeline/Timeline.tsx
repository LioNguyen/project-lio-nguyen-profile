import { 
  Box, 
  Stack,
} from '@chakra-ui/react'
import { Fragment, memo, useCallback, useMemo } from 'react'
import type { FC, HTMLAttributes } from 'react'

import { useDrawerStore, type ExperienceItem } from '@/shared/store'
import { useI18n } from '@/core/i18n'
import { JourneyCard } from '../../molecules'
import { AnimatedCircle, AnimatedDivider } from '../../atoms'

/**
 * Timeline Component
 * Displays a vertical timeline with alternating items and continuous line animation
 * Connected to global Zustand store for drawer state management
 */
export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {}

// Base timeline data structure with translation keys
const TIMELINE_DATA_KEYS = [
  {
    key: 'dnbsoft',
    type: 'fulltime' as const,
    group: 1,
  },
  {
    key: 'riskoa',
    type: 'freelance' as const,
    group: 1,
  },
  {
    key: 'evehr',
    type: 'fulltime' as const,
    group: 2,
  },
  {
    key: 'jobhopin',
    type: 'freelance' as const,
    group: 2,
  },
  {
    key: 'itlcorp',
    type: 'fulltime' as const,
    group: 3,
  },
  {
    key: 'fram',
    type: 'fulltime' as const,
    group: 4,
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

  const handleOpenDrawer = useCallback((index: number, item: ExperienceItem) => {
    openExperienceDrawer(index, item)
  }, [openExperienceDrawer])

  // Group timeline items by group property
  const groupedItems = useMemo(() => {
    const groups: Array<Array<{ item: ExperienceItem; originalIndex: number; dataKey: typeof TIMELINE_DATA_KEYS[0] }>> = []
    
    TIMELINE_DATA.forEach((item, index) => {
      const dataKey = TIMELINE_DATA_KEYS[index]
      const groupIndex = dataKey.group - 1
      
      if (!groups[groupIndex]) {
        groups[groupIndex] = []
      }
      
      groups[groupIndex].push({ item, originalIndex: index, dataKey })
    })
    
    return groups.filter(group => group.length > 0)
  }, [TIMELINE_DATA])

  // Memoize the rendering of all groups and cards for performance
  const renderGroups = useMemo(() => {
    let globalCardIndex = 0 // Track global card index across all groups
    const dividerDuration = 0.4 // Duration for each divider animation
    const dividerOverlap = 0.2 // Overlap time between consecutive dividers for smooth transition
    
    return groupedItems.map((group, groupIndex) => {
      // Groups alternate sides: even groups on right, odd groups on left
      const isGroupEven = groupIndex % 2 === 0
      const startCardIndexForGroup = globalCardIndex // Remember where this group starts
      
      // Render cards for this group
      const groupCards = group.map(({ item, originalIndex }, cardIndex) => {
        const itemDelay = globalCardIndex * itemDuration // Same delay interval for all cards
        const isLastCardInGroup = cardIndex === group.length - 1
        
        // Calculate divider delay: start when card appears + small delay
        // Each subsequent divider starts before the previous one finishes (overlap)
        const dividerDelay = itemDelay + 0.3 + (cardIndex * (dividerDuration - dividerOverlap))
        
        globalCardIndex++ // Increment for next card

        return (
          <Fragment key={`card-fragment-${originalIndex}`}>
            <Box position="relative">
              <JourneyCard
                item={item}
                index={originalIndex}
                isEven={isGroupEven}
                itemDelay={itemDelay}
                onClick={() => handleOpenDrawer(originalIndex, item)}
              />
            </Box>

            {/* Divider between cards in same group */}
            {!isLastCardInGroup && (
              <AnimatedDivider
                delay={dividerDelay}
                duration={dividerDuration}
                height={{ base: "140px", md: "200px" }}
                dividerKey={`divider-${originalIndex}`}
              />
            )}
          </Fragment>
        )
      })

      // Calculate when the last divider of this group finishes
      const lastCardDelay = (globalCardIndex - 1) * itemDuration
      const lastDividerInGroupDelay = lastCardDelay + 0.3 + ((group.length - 2) * (dividerDuration - dividerOverlap))
      const groupDividerDelay = lastDividerInGroupDelay + dividerDuration - dividerOverlap // Start before last divider finishes

      return (
        <Fragment key={`group-${groupIndex}`}>
          {/* Single Circle for the entire group with gradient animation */}
          <AnimatedCircle
            delay={startCardIndexForGroup * itemDuration}
            circleKey={`circle-${groupIndex}`}
          />

          {/* Render cards */}
          {groupCards}

          {/* Divider between groups - only after the last card of each group */}
          {groupIndex < groupedItems.length - 1 && (
            <AnimatedDivider
              delay={groupDividerDelay}
              duration={dividerDuration}
              height={{ base: "140px", md: "200px" }}
              dividerKey={`group-divider-${groupIndex}`}
            />
          )}
        </Fragment>
      )
    })
  }, [groupedItems, handleOpenDrawer, itemDuration])

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
        {renderGroups}
      </Stack>
    </Stack>
  )
})

Timeline.displayName = 'Timeline'
