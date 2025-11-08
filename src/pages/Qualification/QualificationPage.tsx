import { memo } from 'react';
import type { FC } from 'react';
import { Container } from '@chakra-ui/react';
import type { ContainerProps } from '@chakra-ui/react';

import { QualificationPageContent } from '@/modules/qualification/components';

export interface QualificationPageProps extends ContainerProps {}

export const QualificationPage: FC<QualificationPageProps> = memo((props) => {
  return (
    <Container id="qualification" variant="pageLayout" {...props}>
      <QualificationPageContent />
    </Container>
  );
});

QualificationPage.displayName = 'QualificationPage';
