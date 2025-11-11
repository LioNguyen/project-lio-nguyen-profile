import { memo, useMemo } from 'react';
import type { FC, HTMLAttributes } from 'react';
import { SimpleGrid, Stack } from '@chakra-ui/react';

import { useI18n } from '@/core/i18n';
import { Title } from '@/core/components/atoms';
import { SkillsBox } from './organisms';

export interface SkillsContentProps extends HTMLAttributes<HTMLDivElement> {}

// Skill groups matching CV structure
const SKILLS_GROUPS = [
  {
    titleKey: 'skills.frontendStack',
    skills: [
      { name: 'React', rate: 9 },
      { name: 'TypeScript', rate: 9 },
      { name: 'React Native', rate: 3 },
    ],
  },
  {
    titleKey: 'skills.stateDataLayer',
    skills: [
      { name: 'Redux Saga', rate: 7 },
      { name: 'Zustand', rate: 8 },
      { name: 'React Query', rate: 8 },
      { name: 'GraphQL', rate: 5 },
      { name: 'REST API', rate: 9 },
    ],
  },
  {
    titleKey: 'skills.uiStyling',
    skills: [
      { name: 'Tailwind CSS', rate: 9 },
      { name: 'Chakra UI', rate: 8 },
      { name: 'Storybook', rate: 5 },
      { name: 'Atomic Design', rate: 9 },
    ],
  },
  {
    titleKey: 'skills.tooling',
    skills: [
      { name: 'Git', rate: 9 },
      { name: 'Vite', rate: 8 },
      { name: 'ReactFlow', rate: 6 },
      { name: 'Vitest', rate: 7 },
    ],
  },
];

export const SkillsContent: FC<SkillsContentProps> = memo(({ children, ...props }) => {
  const { t } = useI18n();

  // Translate skill group titles
  const translatedGroups = useMemo(() => {
    return SKILLS_GROUPS.map((group) => ({
      ...group,
      title: t(group.titleKey),
    }));
  }, [t]);

  return (
    <Stack className="skills__content" height={'100%'} textAlign="center" {...props}>
      {/* START: Header */}
      <Title>
        {t('skills.title')}
      </Title>
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
          {translatedGroups.map((group) => (
            <SkillsBox 
              key={group.titleKey}
              boxTitle={group.title} 
              data={group.skills}
              margin="0 auto"
            />
          ))}
        </SimpleGrid>
      </Stack>
      {/* END: Body */}
    </Stack>
  );
});

SkillsContent.displayName = 'SkillsContent';
