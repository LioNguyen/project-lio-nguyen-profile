import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';

/**
 * TimeBadge Component
 * Displays a time period badge with consistent styling
 * Used in Timeline and ExperienceDrawer components
 */
export interface TimeBadgeProps extends BoxProps {
  /** Time period text to display (e.g., "Apr 2025 - Oct 2025") */
  children: React.ReactNode;
}

export const TimeBadge = ({ children, ...props }: TimeBadgeProps) => {
  return (
    <Box
      display="inline-block"
      bg="gray.700"
      color="white"
      fontSize={{ base: '9px', sm: '10px', md: '11px' }}
      fontWeight="semibold"
      px={{ base: 1.5, sm: 2 }}
      py={0.5}
      borderRadius="full"
      boxShadow="md"
      {...props}
    >
      {children}
    </Box>
  );
};
