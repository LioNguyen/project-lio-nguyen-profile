import { memo, useMemo } from 'react';
import type { FC, HTMLAttributes } from 'react';
import { SimpleGrid, Stack, VStack, HStack, Divider, Text, Box, Progress } from '@chakra-ui/react';

import { useI18n } from '@/core/i18n';
import { Title } from '@/core/components/atoms';

export interface SkillsContentProps extends HTMLAttributes<HTMLDivElement> {}

// Skill groups matching CV structure
const SKILLS_GROUPS = [
  {
    titleKey: 'skills.frontendStack',
    descriptionKey: 'skills.frontendStackDesc',
    skills: [
      { name: 'React', rate: 9, level: 'expert' },
      { name: 'TypeScript', rate: 9, level: 'expert' },
      { name: 'React Native', rate: 3, level: 'familiar' },
    ],
  },
  {
    titleKey: 'skills.advancedPatterns',
    descriptionKey: 'skills.advancedPatternsDesc',
    skills: [
      { name: 'Hooks', rate: 9, level: 'expert' },
      { name: 'OOP', rate: 8, level: 'proficient' },
      { name: 'Container/Presenter Pattern', rate: 8, level: 'proficient' },
      { name: 'HOC', rate: 7, level: 'proficient' },
    ],
  },
  {
    titleKey: 'skills.stateDataLayer',
    descriptionKey: 'skills.stateDataLayerDesc',
    skills: [
      { name: 'REST API', rate: 9, level: 'expert' },
      { name: 'React Context', rate: 8, level: 'proficient' },
      { name: 'Zustand', rate: 8, level: 'proficient' },
      { name: 'React Query', rate: 7, level: 'proficient' },
      { name: 'Redux + Redux Saga', rate: 7, level: 'proficient' },
      { name: 'GraphQL', rate: 5, level: 'familiar' },
    ],
  },
  {
    titleKey: 'skills.uiStyling',
    descriptionKey: 'skills.uiStylingDesc',
    skills: [
      { name: 'Tailwind CSS', rate: 9, level: 'expert' },
      { name: 'Atomic Design', rate: 9, level: 'expert' },
      { name: 'Chakra UI', rate: 8, level: 'proficient' },
      { name: 'Ant Design', rate: 7, level: 'proficient' },
      { name: 'Storybook', rate: 5, level: 'familiar' },
    ],
  },
  {
    titleKey: 'skills.tooling',
    descriptionKey: 'skills.toolingDesc',
    skills: [
      { name: 'Git', rate: 9, level: 'expert' },
      { name: 'Vite', rate: 8, level: 'proficient' },
      { name: 'Vitest', rate: 7, level: 'proficient' },
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
    <Stack className="skills__content" height={'100%'} textAlign="center" spacing={8} {...props}>
      {/* START: Header */}
      <VStack spacing={6} alignItems="center">
        <Title>
          {t('skills.title')}
        </Title>
        
        {/* Expert Level Badge */}
        <HStack spacing={4} wrap="wrap" justifyContent="center">
          <Box
            px={4}
            py={2}
            borderRadius="full"
            bg="rgba(0,0,0,0.05)"
            border="1px solid rgba(0,0,0,0.1)"
          >
            <Text fontSize="sm" fontWeight="600" color="default.titleDark">
              ⭐ {t('skills.expertBadge')}
            </Text>
          </Box>
        </HStack>

        {/* Key Highlights */}
        <VStack spacing={2} alignItems="center" width="100%">
          <Text fontSize="sm" color="default.text" textAlign="left">
            ✓ {t('skills.highlights.highlight1')}
          </Text>
          <Text fontSize="sm" color="default.text" textAlign="left">
            ✓ {t('skills.highlights.highlight2')}
          </Text>
          <Text fontSize="sm" color="default.text" textAlign="left">
            ✓ {t('skills.highlights.highlight3')}
          </Text>
          <Text fontSize="sm" color="default.text" textAlign="left">
            ✓ {t('skills.highlights.highlight4')}
          </Text>
        </VStack>
      </VStack>
      {/* END: Header */}

      {/* START: Body */}
      <Stack
        flex={1}
        justifyContent={{ base: 'flex-start', md: 'flex-start' }}
        spacing={10}
        width="100%"
      >
        {translatedGroups.map((group, index) => (
          <VStack key={group.titleKey} spacing={6} alignItems="stretch" width="100%">
            {/* Category Header with Left Border */}
            <HStack spacing={0} width="100%" alignItems="stretch" pl={{ base: 0, md: 4 }}>
              <Box
                width="4px"
                borderRadius="2px"
                bg="default.titleDark"
                flexShrink={0}
              />
              <VStack spacing={1} alignItems="flex-start" flex={1} px={3} py={1}>
                <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="default.titleDark" textAlign="left">
                  {group.title}
                </Text>
                <Text fontSize="sm" color="default.text" maxW="500px" textAlign="left">
                  {group.description}
                </Text>
              </VStack>
            </HStack>

            {/* Skills Grid with visual ratings */}
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: Math.min(group.skills.length, 3) }}
              spacing={4}
              width="100%"
              pl={{ base: 0, md: 4 }}
            >
              {group.skills.map((skill) => (
                <Box
                  key={skill.name}
                  padding="16px"
                  borderRadius="12px"
                  bg={
                    skill.level === 'expert'
                      ? 'rgba(0,0,0,0.05)'
                      : skill.level === 'proficient'
                      ? 'rgba(0,0,0,0.02)'
                      : 'rgba(0,0,0,0.01)'
                  }
                  borderLeft={
                    skill.level === 'expert'
                      ? '3px solid rgba(0,0,0,0.3)'
                      : 'none'
                  }
                  _hover={{ bg: 'rgba(0,0,0,0.06)' }}
                  transition="all 0.3s ease"
                >
                  <VStack spacing={2} alignItems="flex-start" width="100%">
                    <HStack justifyContent="space-between" width="100%">
                      <HStack spacing={2}>
                        <Text fontSize="sm" fontWeight="600" color="default.titleDark">
                          {skill.name}
                        </Text>
                        {skill.level === 'expert' && (
                          <Text fontSize="xs" fontWeight="bold" color="default.titleDark">
                            ⭐
                          </Text>
                        )}
                      </HStack>
                      <Text fontSize="xs" fontWeight="bold" color="default.text" opacity={0.7}>
                        {skill.rate}/10
                      </Text>
                    </HStack>
                    <Progress
                      value={skill.rate * 10}
                      size="sm"
                      borderRadius="4px"
                      width="100%"
                      colorScheme={
                        skill.level === 'expert'
                          ? 'gray'
                          : skill.level === 'proficient'
                          ? 'gray'
                          : 'gray'
                      }
                      bg="rgba(0,0,0,0.08)"
                    />
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>

            {/* Divider between groups */}
            {index < translatedGroups.length - 1 && (
              <Divider borderColor="gray.300" width="100%" />
            )}
          </VStack>
        ))}
      </Stack>
      {/* END: Body */}
    </Stack>
  );
});

SkillsContent.displayName = 'SkillsContent';
