import { memo } from 'react';
import type { FC, HTMLAttributes } from 'react';
import { VStack, HStack, Text, Box } from '@chakra-ui/react';

import { useI18n } from '@/core/i18n';

/**
 * SkillsHeader Component
 * Displays Expert Badge and key highlights in a compact header
 * Extracts the compact expert badge & highlights section from SkillsContent
 */
export interface SkillsHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const SkillsHeader: FC<SkillsHeaderProps> = memo(({ ...props }) => {
  const { t } = useI18n();

  return (
    <VStack spacing={2} width="100%" {...props}>
      {/* Expert Badge - Standalone */}
      <Box
        px={{ base: 3, md: 3.5 }}
        py={{ base: 1.5, md: 2 }}
        borderRadius="full"
        bg="rgba(0,0,0,0.08)"
        border="1px solid rgba(0,0,0,0.12)"
        boxShadow="0 2px 4px rgba(0,0,0,0.1)"
        mb={4}
      >
        <Text fontSize={{ base: '12px', md: 'sm' }} fontWeight="700" color="default.titleDark" whiteSpace="nowrap">
          ⭐ {t('skills.expertBadge')}
        </Text>
      </Box>

      {/* Highlights - Single Row with Separators */}
      <HStack 
        spacing={{ base: 2, md: 3 }} 
        width="100%"
        bg="rgba(0,0,0,0.02)"
        borderRadius="10px"
        border="1px solid rgba(0,0,0,0.06)"
        boxShadow="0 2px 4px rgba(0,0,0,0.1)"
        my={{ base: 2, md: 3 }}
        px={{ base: 2.5, md: 3 }}
        py={{ base: 2, md: 2.5 }}
        flexWrap="wrap"
        justifyContent="center"
      >
        <HStack spacing={1} flexShrink={0}>
          <Box 
            w="4px" 
            h="4px" 
            borderRadius="full" 
            bg="default.titleDark"
          />
          <Text fontSize={{ base: '9px', md: 'xs' }} color="default.text" fontWeight="600" whiteSpace="nowrap">
            {t('skills.highlights.highlight1')}
          </Text>
        </HStack>
        
        <Box w="1px" h="10px" bg="rgba(0,0,0,0.15)" display={{ base: 'none', md: 'block' }} />
        
        <HStack spacing={1} flexShrink={0}>
          <Box 
            w="4px" 
            h="4px" 
            borderRadius="full" 
            bg="default.titleDark"
          />
          <Text fontSize={{ base: '9px', md: 'xs' }} color="default.text" fontWeight="600" whiteSpace="nowrap">
            {t('skills.highlights.highlight2')}
          </Text>
        </HStack>
        
        <Box w="1px" h="10px" bg="rgba(0,0,0,0.15)" display={{ base: 'none', md: 'block' }} />
        
        <HStack spacing={1} flexShrink={0}>
          <Box 
            w="4px" 
            h="4px" 
            borderRadius="full" 
            bg="default.titleDark"
          />
          <Text fontSize={{ base: '9px', md: 'xs' }} color="default.text" fontWeight="600" whiteSpace="nowrap">
            {t('skills.highlights.highlight3')}
          </Text>
        </HStack>
        
        <Box w="1px" h="10px" bg="rgba(0,0,0,0.15)" display={{ base: 'none', md: 'block' }} />
        
        <HStack spacing={1} flexShrink={0}>
          <Box 
            w="4px" 
            h="4px" 
            borderRadius="full" 
            bg="default.titleDark"
          />
          <Text fontSize={{ base: '9px', md: 'xs' }} color="default.text" fontWeight="600" whiteSpace="nowrap">
            {t('skills.highlights.highlight4')}
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
});

SkillsHeader.displayName = 'SkillsHeader';
