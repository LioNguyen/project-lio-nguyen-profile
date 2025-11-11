import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';

/**
 * TypeBadge Component
 * Displays an employment type badge (fulltime/freelance) with conditional styling
 * Used in Timeline and ExperienceDrawer components
 */
export interface TypeBadgeProps extends BoxProps {
  /** Employment type: 'fulltime' or 'freelance' */
  type: 'fulltime' | 'freelance';
  /** Badge text to display */
  children: React.ReactNode;
}

export const TypeBadge = ({ type, children, ...props }: TypeBadgeProps) => {
  return (
    <Box
      display="inline-block"
      bg={type === 'freelance' ? 'gray.600' : 'gray.800'}
      color="white"
      fontSize={{ base: '8px', sm: '9px', md: '10px' }}
      fontWeight="semibold"
      px={{ base: 1.5, sm: 1.5 }}
      py={0.5}
      borderRadius="full"
      textTransform="capitalize"
      boxShadow="md"
      {...props}
    >
      {children}
    </Box>
  );
};
