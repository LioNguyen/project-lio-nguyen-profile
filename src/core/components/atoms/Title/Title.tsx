import { Heading } from '@chakra-ui/react';
import type { HeadingProps } from '@chakra-ui/react';
import { memo } from 'react';

/**
 * Title Component
 * 
 * A reusable title heading component with consistent styling across pages.
 * Uses slightly reduced size compared to the original theme variant.
 */
export interface TitleProps extends HeadingProps {
  /** Title text to display */
  children: React.ReactNode;
}

export const Title = memo(({ children, ...props }: TitleProps) => {
  return (
    <Heading
      as="h1"
      color="default.titleDark"
      fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
      mb={{ base: '4px', sm: '8px', md: '16px' }}
      fontWeight="bold"
      textAlign="center"
      {...props}
    >
      {children}
    </Heading>
  );
});

Title.displayName = 'Title';
