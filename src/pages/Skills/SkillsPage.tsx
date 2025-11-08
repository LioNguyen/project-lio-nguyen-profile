import { memo } from 'react';
import type { FC, HTMLAttributes } from 'react';
import { Container } from '@chakra-ui/react';

import { SkillsContent } from '@/modules/skill/components/SkillsContent';

export interface SkillsPageProps extends HTMLAttributes<HTMLDivElement> {}

export const SkillsPage: FC<SkillsPageProps> = memo(({ children, ...props }) => {
  return (
    <Container id="skills" variant="pageLayout" {...props}>
      <SkillsContent />
    </Container>
  );
});

SkillsPage.displayName = 'SkillsPage';
