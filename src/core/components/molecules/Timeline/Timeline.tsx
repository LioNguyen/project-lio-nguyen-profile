import { 
  Box, 
  Circle, 
  Stack, 
  Text, 
  Card,
  CardBody,
} from '@chakra-ui/react'
import { Fragment, memo, useState } from 'react'
import { motion } from 'framer-motion'
import type { FC, HTMLAttributes } from 'react'
import { ExperienceDrawer } from '../ExperienceDrawer'

/**
 * Timeline Component
 * Displays a vertical timeline with alternating items and continuous line animation
 */
export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {}

interface TimelineItem {
  subtitle: string
  time: string
  title: string
  type: 'freelance' | 'fulltime'
  details?: string[]
  techStack?: string
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    title: 'Software Engineer',
    subtitle: 'RISKOA',
    time: '04/2025 - 10/2025',
    type: 'freelance',
    details: [
      'Architected modular TypeScript system with strongly-typed API schemas using Zod, cutting dev time by 60%.',
      'Built AI-powered analysis system with automated product decomposition and emission database matching.',
      'Created real-time carbon visualization dashboard (500+ interconnected nodes) via ReactFlow with optimized memoization.',
      'Implemented centralized state management using Zustand for predictable state flow.',
      'Reduced API overhead by 80% through debounced autosave, batching logic, and optimistic updates.',
      'Designed scalable OOP-based component structure using container/presenter separation and custom hooks.',
      'Achieved >85% test coverage with Vitest for critical business logic.',
      'Collaborated with UK clients on feature design, compliance flow, and sprint planning.',
    ],
    techStack: 'React 18, TypeScript, Zustand, Chakra UI, ReactFlow, Vite',
  },
  {
    title: 'Frontend Software Engineer',
    subtitle: 'DNB SOFT CO., LTD – IGLOO VENTURE',
    time: '04/2024 - 09/2025',
    type: 'fulltime',
    details: [
      'Led frontend development for enterprise-grade web platforms for Korean maritime and software clients.',
      'Built Enterprise License Management System handling 5K+ records with server-side pagination.',
      'Designed RBAC system integrated with JWT authentication and Axios interceptors.',
      'Developed real-time maritime cybersecurity dashboard using ReactFlow and custom polling hooks.',
      'Managed global state using React Context and custom hooks for complex dashboards.',
      'Enhanced performance with useMemo, useCallback, and memoization techniques.',
      'Standardized foundation: ESLint, Prettier, unit & integration tests.',
      'Created internal Design System tokens and UI library via Storybook for consistency.',
    ],
    techStack: 'React, TypeScript, Vite, React Context, Ant Design, Tailwind CSS, React Query, ReactFlow, Storybook',
  },
  {
    title: 'Frontend Software Engineer',
    subtitle: 'EVE HR LTD – FRAM^ VENTURE',
    time: '03/2020 - 02/2024',
    type: 'fulltime',
    details: [
      'Modernized web & mobile platforms for global clients (Bosch, Highland, PwC, AIA, BAT, DHL, Nestlé, Pepsi).',
      'Architected white-label SaaS platform with dynamic theming and multi-tenant authentication.',
      'Migrated frontend from JavaScript → TypeScript, reducing runtime errors by 40%.',
      'Implemented Redux Saga side-effect management & Axios interceptors.',
      'Built cross-platform code-sharing between React Web & React Native.',
      'Optimized performance with Lazy Loading, Suspense, and memoization (-30% initial load).',
      'Contributed to Storybook design system setup for faster onboarding and consistency.',
    ],
    techStack: 'React.js, React Native, TypeScript, Redux Saga, Axios, Storybook',
  },
  {
    title: 'General Accountant',
    subtitle: 'ITL, FRAM^ & Other companies',
    time: '2017 - 2020',
    type: 'fulltime',
    details: [
      'Managed financial accounting operations across multiple companies.',
      'Handled accounts payable/receivable, general ledger, and financial reporting.',
      'Ensured compliance with accounting standards and tax regulations.',
      'Provided financial analysis to support business decision-making.',
    ],
  },
]

export const Timeline: FC<TimelineProps> = memo(({ className = '', ...props }) => {
  const itemDuration = 0.8 // Duration for each item to appear (seconds) - faster
  const [selectedExperience, setSelectedExperience] = useState<{
    index: number;
    item: TimelineItem;
  } | null>(null)

  const handleOpenDrawer = (index: number, item: TimelineItem) => {
    setSelectedExperience({ index, item })
  }

  const handleCloseDrawer = () => {
    setSelectedExperience(null)
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
                  {item.type}
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
                        fontSize={{ base: '8px', sm: '10px', md: '11px' }}
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
                        View more →
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
    <>
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

      {/* Single Drawer instance outside of timeline rendering */}
      {selectedExperience && (
        <ExperienceDrawer
          isOpen={true}
          onClose={handleCloseDrawer}
          title={selectedExperience.item.title}
          subtitle={selectedExperience.item.subtitle}
          time={selectedExperience.item.time}
          type={selectedExperience.item.type}
          details={selectedExperience.item.details || []}
          techStack={selectedExperience.item.techStack ? selectedExperience.item.techStack.split(',').map(tech => tech.trim()) : []}
        />
      )}
    </>
  )
})

Timeline.displayName = 'Timeline'
