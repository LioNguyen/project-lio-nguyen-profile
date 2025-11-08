import { memo } from 'react';
import type { FC } from 'react';
import { Box, Image, Stack } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';

import { SectionText } from '../../atoms/SectionText';

/**
 * AboutSection Component
 * Main organism combining profile image and descriptive content
 * Parses markdown content into paragraphs for rendering
 */
export interface AboutSectionProps extends StackProps {
  /** Profile image source */
  profileImage: string;
  /** Alt text for profile image */
  profileImageAlt?: string;
  /** Markdown content with paragraphs separated by double newlines */
  content: string;
  /** Keywords to highlight across all paragraphs */
  highlights?: string[];
}

export const AboutSection: FC<AboutSectionProps> = memo(({
  profileImage,
  profileImageAlt = 'Profile',
  content,
  highlights = [],
  ...props
}) => {
  // Parse markdown content into paragraphs (split by double newlines)
  const paragraphs = content
    .split('\n\n')
    .map(p => p.trim())
    .filter(p => p.length > 0);

  // First paragraph goes beside the image, rest go below
  const [firstParagraph, ...remainingParagraphs] = paragraphs;

  return (
    <Stack
      gap={6}
      height={{ base: 'fit-content' }}
      direction="column"
      alignItems={{ base: 'center', md: 'flex-start' }}
      textAlign={{ base: 'center', md: 'left' }}
      {...props}
    >
      {/* Top Section: Image + First Paragraph */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 6, md: 8 }}
        width="100%"
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        {/* Profile Image - Left Corner */}
        <Box 
          flexShrink={0}
          width={{ base: '180px', md: '240px' }}
        >
          <Image
            src={profileImage}
            alt={profileImageAlt}
            width="100%"
            borderRadius={8}
            objectFit="cover"
            boxShadow="lg"
          />
        </Box>

        {/* First Paragraph beside image */}
        <Box flex={1}>
          <SectionText highlights={highlights}>
            {firstParagraph}
          </SectionText>
        </Box>
      </Stack>

      {/* Bottom Section: Full width paragraphs with background styling */}
      <Stack spacing={5} width="100%">
        {remainingParagraphs.map((paragraph, index) => (
          <Box
            key={index}
            p={{ base: 4, md: 6 }}
            borderRadius="lg"
            borderLeft="3px solid"
            borderColor="gray.400"
            _dark={{ borderColor: 'gray.600' }}
            transition="all 0.3s ease"
            _hover={{
              bg: { base: 'gray.100', md: 'gray.100' },
              _dark: { bg: 'gray.800' },
              boxShadow: 'md'
            }}
          >
            <SectionText 
              highlights={highlights}
            >
              {paragraph}
            </SectionText>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
});

AboutSection.displayName = 'AboutSection';
