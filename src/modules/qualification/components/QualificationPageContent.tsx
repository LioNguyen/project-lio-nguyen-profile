import { memo } from 'react';
import type { FC } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';

import { Timeline, ExperienceDrawer } from './organisms';

/**
 * QualificationPageContent Component
 * Core content for the Qualification page
 * Contains the header and timeline display
 */
export interface QualificationPageContentProps extends StackProps {}

export const QualificationPageContent: FC<QualificationPageContentProps> = memo((props) => {

  return (
    <>
      <Stack
        className="qualification__content"
        height={'100%'}
        textAlign="center"
        {...props}
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

      {/* Single Drawer instance for experience details */}
      <ExperienceDrawer />
    </>
  );
});

QualificationPageContent.displayName = 'QualificationPageContent';
