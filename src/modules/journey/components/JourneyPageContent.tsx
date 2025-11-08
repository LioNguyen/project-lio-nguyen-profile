import { memo } from 'react';
import type { FC } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';

import { Timeline, ExperienceDrawer } from './organisms';

/**
 * JourneyPageContent Component
 * Core content for the Journey page
 * Contains the header and timeline display
 */
export interface JourneyPageContentProps extends StackProps {}

export const JourneyPageContent: FC<JourneyPageContentProps> = memo((props) => {

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
          Journey
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

JourneyPageContent.displayName = 'JourneyPageContent';
