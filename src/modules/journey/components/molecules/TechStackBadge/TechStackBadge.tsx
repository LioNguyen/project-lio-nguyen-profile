import { Badge } from '@chakra-ui/react';
import type { BadgeProps } from '@chakra-ui/react';

/**
 * TechStackBadge Component
 * Displays a technology/skill badge with consistent styling
 * Used in ExperienceDrawer component
 */
export interface TechStackBadgeProps extends Omit<BadgeProps, 'colorScheme'> {
  /** Technology name to display */
  children: React.ReactNode;
}

export const TechStackBadge = ({ children, ...props }: TechStackBadgeProps) => {
  return (
    <Badge
      colorScheme="gray"
      bg="gray.700"
      color="white"
      px={{ base: 2, md: 2.5 }}
      py={{ base: 0.5, md: 1 }}
      borderRadius="full"
      fontSize={{ base: 'xs', md: 'xs' }}
      fontWeight="medium"
      {...props}
    >
      {children}
    </Badge>
  );
};
