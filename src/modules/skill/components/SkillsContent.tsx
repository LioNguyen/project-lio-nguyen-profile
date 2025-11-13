import { memo, useMemo } from 'react';
import type { FC, HTMLAttributes } from 'react';
import { SimpleGrid, Stack, VStack } from '@chakra-ui/react';

import { useI18n } from '@/core/i18n';
import { Title } from '@/core/components/atoms';
import { SkillsHeader, SkillCard } from './organisms';

export interface SkillsContentProps extends HTMLAttributes<HTMLDivElement> {}

// Skill groups matching CV structure
const SKILLS_GROUPS = [
  {
    titleKey: 'skills.frontendStack',
    descriptionKey: 'skills.frontendStackDesc',
    skills: [
      { name: 'React', rate: 9, level: 'expert' as const },
      { name: 'TypeScript', rate: 9, level: 'expert' as const },
      { name: 'Next.js', rate: 6, level: 'familiar' as const },
      { name: 'Ionic', rate: 5, level: 'familiar' as const },
      { name: 'React Native', rate: 3, level: 'familiar' as const },
    ],
  },
  {
    titleKey: 'skills.advancedPatterns',
    descriptionKey: 'skills.advancedPatternsDesc',
    skills: [
      { name: 'Hooks', rate: 9, level: 'expert' as const },
      { name: 'OOP', rate: 8, level: 'proficient' as const },
      { name: 'Container/Presenter Pattern', rate: 8, level: 'proficient' as const },
      { name: 'HOC', rate: 7, level: 'proficient' as const },
    ],
  },
  {
    titleKey: 'skills.stateDataLayer',
    descriptionKey: 'skills.stateDataLayerDesc',
    skills: [
      { name: 'REST API', rate: 9, level: 'expert' as const },
      { name: 'React Context', rate: 8, level: 'proficient' as const },
      { name: 'Zustand', rate: 8, level: 'proficient' as const },
      { name: 'React Query', rate: 7, level: 'proficient' as const },
      { name: 'Redux + Redux Saga', rate: 7, level: 'proficient' as const },
      { name: 'GraphQL', rate: 5, level: 'familiar' as const },
    ],
  },
  {
    titleKey: 'skills.uiStyling',
    descriptionKey: 'skills.uiStylingDesc',
    skills: [
      { name: 'Tailwind CSS', rate: 9, level: 'expert' as const },
      { name: 'Atomic Design', rate: 9, level: 'expert' as const },
      { name: 'Chakra UI', rate: 8, level: 'proficient' as const },
      { name: 'Ant Design', rate: 7, level: 'proficient' as const },
      { name: 'Storybook', rate: 5, level: 'familiar' as const },
    ],
  },
  {
    titleKey: 'skills.tooling',
    descriptionKey: 'skills.toolingDesc',
    skills: [
      { name: 'Git', rate: 9, level: 'expert' as const },
      { name: 'Vite', rate: 8, level: 'proficient' as const },
      { name: 'Vitest', rate: 7, level: 'proficient' as const },
    ],
  },
];

export const SkillsContent: FC<SkillsContentProps> = memo(({ ...props }) => {
  const { t } = useI18n();

  // Translate skill group titles
  const translatedGroups = useMemo(() => {
    return SKILLS_GROUPS.map((group) => ({
      ...group,
      title: t(group.titleKey),
      description: t(group.descriptionKey),
    }));
  }, [t]);

  return (
    <Stack className="skills__content" height={'100%'} textAlign="center" spacing={{ base: 5, md: 6 }} {...props}>
      {/* START: Header */}
      <VStack spacing={3} alignItems="center">
        <Title>
          {t('skills.title')}
        </Title>
        
        {/* Compact Expert Badge & Highlights */}
        <SkillsHeader />
      </VStack>
      {/* END: Header */}

      {/* START: Compact Grid Body */}
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 4, md: 5 }}
        width="100%"
        flex={1}
      >
        {translatedGroups.map((group) => (
          <SkillCard
            key={group.titleKey}
            title={group.title}
            description={group.description}
            skills={group.skills}
          />
        ))}
      </SimpleGrid>
      {/* END: Compact Grid Body */}
    </Stack>
  );
});

SkillsContent.displayName = 'SkillsContent';

