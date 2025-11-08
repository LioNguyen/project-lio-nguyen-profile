import { 
  Box, 
  Circle, 
  Stack, 
  Text, 
  Card,
  CardBody,
} from '@chakra-ui/react'
import { Fragment, memo } from 'react'
import { motion } from 'framer-motion'
import type { FC, HTMLAttributes } from 'react'

import { useDrawerStore, type ExperienceItem } from '@/shared/store'

/**
 * Timeline Component
 * Displays a vertical timeline with alternating items and continuous line animation
 * Connected to global Zustand store for drawer state management
 */
export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {}

const TIMELINE_DATA: ExperienceItem[] = [
  {
    title: 'Software Engineer',
    subtitle: 'Riskoa',
    time: 'Apr 2025 - Oct 2025',
    type: 'freelance',
    details: [
      'Architected frontend solutions for enterprise SaaS platform serving global clients in environmental compliance and carbon footprint analysis.',
      'Architected modular TypeScript system with strongly-typed API schemas using Zod, cutting dev time by 60%.',
      'Built AI-powered analysis system with automated product decomposition and emission database matching.',
      'Created real-time carbon visualization dashboard rendering 500+ interconnected nodes via ReactFlow with optimized memoization.',
      'Implemented centralized state management using Zustand for predictable state flow and lightweight store subscription.',
      'Reduced API overhead by 80% through debounced auto-save, batching logic, and optimistic updates.',
      'Designed scalable OOP-based component structure using container/presenter separation and custom hooks for shared logic.',
      'Implemented Vitest unit and integration tests with >85% coverage for critical business logic.',
      'Collaborated directly with UK clients on feature design, compliance flow, and sprint planning.',
    ],
    techStack: 'React.js, Object-Oriented Programming (OOP), Systems Design',
  },
  {
    title: 'Software Engineer',
    subtitle: 'DNB Soft',
    time: 'Apr 2024 - Sep 2025',
    type: 'fulltime',
    details: [
      'Lead frontend engineer delivering enterprise-grade web platforms for Korean maritime and software clients.',
      'Led frontend for Enterprise License Management System handling 5k+ records with server-side pagination.',
      'Designed role-based access control (RBAC) system integrated with JWT authentication and Axios interceptors.',
      'Developed real-time maritime cybersecurity dashboard using ReactFlow + custom polling hooks for live updates.',
      'Managed global state using React Context and custom hooks, ensuring reliable data flow across complex dashboard modules.',
      'Enhanced rendering efficiency with useMemo, useCallback and memoization techniques.',
      'Applied OOP-inspired component structure with HOC/composition patterns for reusable UI and logic isolation.',
      'Built and standardized project foundation with ESLint, Prettier, unit tests, and integration tests, ensuring consistent quality from setup to deployment.',
      'Created internal Design System tokens with Ant Design to ensure visual consistency and brand alignment.',
      'Created internal UI component library with Storybook, enabling consistent design across teams.',
    ],
    techStack: 'React.js, TypeScript, Systems Design, Unit Testing, Integration Testing, Object-Oriented Programming (OOP)',
  },
  {
    title: 'Frontend Software Engineer',
    subtitle: 'EveHR',
    time: 'Mar 2020 - Feb 2024',
    type: 'fulltime',
    details: [
      'Modernized web and mobile platforms for multinational clients including Bosch, Highland, PwC, AIA, BAT, DHL, Nestlé, Pepsi.',
      'Architected white-label SaaS platform with dynamic theming, modular routing, and multi-tenant authentication.',
      'Migrated entire frontend from JavaScript to TypeScript, cutting runtime errors by 40%.',
      'Implemented Redux Saga side-effect management and Axios interceptors for seamless token refresh.',
      'Built cross-platform code-sharing system (React Web + React Native) improving maintainability.',
      'Optimized performance using Lazy Loading, Suspense, and memoization, reducing initial load by 30%.',
      'Contributed to design system setup in Storybook, improving developer onboarding and UI consistency.',
    ],
    techStack: 'React.js, JavaScript, TypeScript, React Native, Ionic Framework',
  },
  {
    title: 'Frontend Software Engineer',
    subtitle: 'JobHopin',
    time: 'Jul 2022 - Jan 2023',
    type: 'freelance',
    details: [
      'Contributed to frontend development for JobHopin\'s platform, focusing on building scalable UI systems, improving performance, and ensuring design consistency across projects.',
      'Developed and documented reusable UI components in Storybook, enhancing team efficiency and visual consistency.',
      'Built a responsive Next.js Landing Page for a new product, improving load speed and user experience.',
      'Maintained and optimized existing features for better performance and code quality.',
      'Collaborated closely with designers and product teams using Figma and Jira to ensure smooth delivery.',
      'Supported CI/CD workflows and version control using GitLab, improving deployment reliability.',
    ],
    techStack: 'React.js, HTML5, JavaScript, Next.js, Storybook, Scss',
  },
  {
    title: 'Regional Accountant',
    subtitle: 'Indo-Trans Logistics Corporation (ITL Corp.)',
    time: 'Sep 2019 - May 2021',
    type: 'fulltime',
    details: [
      'Prepared monthly financial reports for Myanmar and Lao operations.',
      'Prepared and recorded costing, internal and OBH entries by compiling and analyzing account information.',
      'Maintained and balanced subsidiary accounts by verifying, allocating, posting, and reconciling transactions and resolving discrepancies.',
      'Reconciled costing/revenue between FAST and Bravo, coordinated with Revenue accountant and CS team.',
      'Managed costing on FAST, settled advance clearance, settled payment and performed accounting procedures on FAST.',
      'Managed trucking reports, followed up daily updates, reconciled with payment requests.',
      'Verified internal balance between ITL Myanmar and Corp/Subsidiaries.',
      'Created VBA tools to facilitate accounting procedures.',
    ],
    techStack: 'Accounting, Microsoft Excel, Process Improvement, Cost Accounting',
  },
  {
    title: 'General Accountant',
    subtitle: 'Fram^',
    time: 'Sep 2017 - Feb 2019',
    type: 'fulltime',
    details: [
      'Prepared input Journal Entries into Accounting System (MISA).',
      'Monthly reconciled bank and directly liaised with the banks for regarding matters (Vietcombank, VIB, HSBC, ANZ).',
      'In charge of weekly payment process for 4 entities in group.',
      'In charge of Account Payables, Account Receivables and issuing invoices for clients.',
      'Supported sale team in monitoring cash collection.',
      'Monthly prepared budget vs actual data comparison.',
      'Monthly prepared Tax Reports to apply Tax authority (VAT, PIT, FCT) and liaised with Tax Authority for any regarding issues.',
      'Simultaneously in charge of monthly closing internal financial reports of 4 entities for Headquarter in Sweden.',
      'Directly discussed and solved related financial problems with CEOs of Fram\'s group (Swedish, British, American).',
    ],
    techStack: 'Microsoft Excel, Accounting',
  },
]

export const Timeline: FC<TimelineProps> = memo(({ className = '', ...props }) => {
  const itemDuration = 0.8 // Duration for each item to appear (seconds) - faster
  const openExperienceDrawer = useDrawerStore(state => state.openExperienceDrawer)

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
