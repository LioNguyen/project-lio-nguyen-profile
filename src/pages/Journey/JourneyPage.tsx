import { memo } from 'react';
import type { FC } from 'react';
import { Container } from '@chakra-ui/react';
import type { ContainerProps } from '@chakra-ui/react';

import { JourneyPageContent } from '@/modules/journey/components';

export interface JourneyPageProps extends ContainerProps {}

export const JourneyPage: FC<JourneyPageProps> = memo((props) => {
  return (
    <Container id="qualification" variant="pageLayout" {...props}>
      <JourneyPageContent />
    </Container>
  );
});

JourneyPage.displayName = 'JourneyPage';
