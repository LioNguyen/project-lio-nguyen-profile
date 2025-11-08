import { memo } from 'react';
import type { FC, HTMLAttributes } from 'react';
import { Container, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import { SkillsBox } from '@/core/components/organisms/SkillsBox';

export interface SkillsPageProps extends HTMLAttributes<HTMLDivElement> {}

// Skill groups matching CV structure
const SKILLS_GROUPS = [
  {
    title: 'Frontend Stack',
    skills: [
      { name: 'React', rate: 9 },
      { name: 'TypeScript', rate: 9 },
      { name: 'React Native', rate: 4 },
    ],
  },
  {
    title: 'State & Data Layer',
    skills: [
      { name: 'Redux Saga', rate: 8 },
      { name: 'Zustand', rate: 8 },
      { name: 'React Query', rate: 8 },
      { name: 'GraphQL', rate: 7 },
      { name: 'REST API', rate: 8 },
    ],
  },
  {
    title: 'UI & Styling',
    skills: [
      { name: 'Tailwind CSS', rate: 9 },
      { name: 'Chakra UI', rate: 8 },
      { name: 'Radix UI', rate: 7 },
      { name: 'Storybook', rate: 8 },
      { name: 'Atomic Design', rate: 8 },
    ],
  },
  {
    title: 'Tooling',
    skills: [
      { name: 'Git', rate: 9 },
      { name: 'Vite', rate: 8 },
      { name: 'ReactFlow', rate: 7 },
      { name: 'Zod', rate: 8 },
      { name: 'Vitest', rate: 7 },
      { name: 'ESLint & Prettier', rate: 8 },
    ],
  },
];

export const SkillsPage: FC<SkillsPageProps> = memo(({ children, ...props }) => {
  return (
    <Container id="skills" variant="pageLayout" {...props}>
      {/* Content section */}
      <Stack className="skills__content" height={'100%'} textAlign="center">
        {/* START: Header */}
        <Text variant="title">
          My Skills
        </Text>
        <Text variant="subtitle">
          My technical level
        </Text>
        {/* END: Header */}

        {/* START: Body */}
        <Stack
          flex={1}
          justifyContent={{ base: 'flex-start', md: 'center' }}
          marginTop="20px"
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={6}
            width="100%"
            justifyItems="stretch"
            alignItems="start"
          >
            {SKILLS_GROUPS.map((group) => (
              <SkillsBox 
                key={group.title}
                boxTitle={group.title} 
                data={group.skills}
                margin="0 auto"
              />
            ))}
          </SimpleGrid>
        </Stack>
        {/* END: Body */}
      </Stack>
    </Container>
  );
});

SkillsPage.displayName = 'SkillsPage';
