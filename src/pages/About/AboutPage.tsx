import { memo } from 'react';
import type { FC, HTMLAttributes } from 'react';
import { Container } from '@chakra-ui/react';

import { AboutPageContent } from '@/modules/about/components';

export interface AboutPageProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutPage: FC<AboutPageProps> = memo((props) => {
  return (
    <Container id="about" variant="pageLayout" {...props}>
      <AboutPageContent />
    </Container>
  );
});

AboutPage.displayName = 'AboutPage';
