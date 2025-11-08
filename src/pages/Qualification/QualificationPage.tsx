import { memo } from 'react';
import type { FC } from 'react';
import { Container, Stack, Text } from '@chakra-ui/react';
import type { ContainerProps } from '@chakra-ui/react';

import { Timeline } from '@/core/components/molecules/Timeline';

export interface QualificationPageProps extends ContainerProps {}

export const QualificationPage: FC<QualificationPageProps> = memo((props) => {
  return (
    <Container id="qualification" variant="pageLayout" {...props}>
      <Stack
        className="qualification__content"
        height={'100%'}
        textAlign="center"
      >
        {/* START: Header */}
        <Text variant="title">
          Qualification
        </Text>
        {/* END: Header */}

        {/* START: Body */}
        <Stack
          flex={1}
          justifyContent={{ base: 'flex-start', md: 'center' }}
          alignItems={{ base: 'flex-start', sm: 'center' }}
          marginTop="20px"
        >
          <Timeline />
        </Stack>
      </Stack>
    </Container>
  );
});

QualificationPage.displayName = 'QualificationPage';
