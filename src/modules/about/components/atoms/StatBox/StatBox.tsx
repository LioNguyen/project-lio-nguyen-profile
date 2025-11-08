import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';

/**
 * StatBox Component
 * Displays a single statistic with icon, label, and value
 */
export interface StatBoxProps extends BoxProps {
  /** Icon to display */
  icon: ReactNode;
  /** Label/title for the stat */
  label: string;
  /** Value/description for the stat */
  value: string;
}

export const StatBox: FC<StatBoxProps> = memo(({ icon, label, value, ...props }) => {
  return (
    <Box
      flex={1}
      borderRadius={4}
      border="1px"
      borderColor="default.text"
      padding="20px 0"
      {...props}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        {icon}
        <Text
          color="default.title"
          fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
          fontWeight="medium"
        >
          {label}
        </Text>
        <Text
          color="default.text"
          fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
        >
          {value}
        </Text>
      </Stack>
    </Box>
  );
});

StatBox.displayName = 'StatBox';
