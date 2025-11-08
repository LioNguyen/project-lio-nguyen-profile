import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Text, Box } from '@chakra-ui/react';
import type { TextProps } from '@chakra-ui/react';

/**
 * SectionText Component
 * Displays descriptive text content with consistent styling and keyword highlighting
 */
export interface SectionTextProps extends TextProps {
  /** Text content (supports multiple lines) */
  children: string | ReactNode;
  /** Keywords to highlight */
  highlights?: string[];
}

/**
 * Helper function to highlight keywords in text
 */
const highlightKeywords = (text: string, keywords: string[] = []) => {
  if (!keywords.length) return text;

  // Create a regex pattern for all keywords
  const pattern = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');
  
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    const isKeyword = keywords.some(k => k.toLowerCase() === part.toLowerCase());
    if (isKeyword) {
      return (
        <Box
          as="span"
          key={index}
          fontWeight="700"
          color="gray.900"
          bg="gray.50"
          px="1"
          borderRadius="sm"
          _dark={{ 
            color: 'gray.50', 
            bg: 'whiteAlpha.200' 
          }}
        >
          {part}
        </Box>
      );
    }
    return part;
  });
};

export const SectionText: FC<SectionTextProps> = memo(({ children, highlights, ...props }) => {
  const processedChildren = typeof children === 'string' && highlights
    ? highlightKeywords(children, highlights)
    : children;

  return (
    <Text
      color="gray.700"
      fontSize={{ base: 'md', sm: 'md', md: 'lg' }}
      lineHeight="1.9"
      fontWeight="400"
      letterSpacing="0.01em"
      _dark={{ color: 'gray.300' }}
      {...props}
    >
      {processedChildren}
    </Text>
  );
});

SectionText.displayName = 'SectionText';
