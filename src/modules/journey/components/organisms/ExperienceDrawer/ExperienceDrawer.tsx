import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';

import { BaseDrawer } from '@/core/components/molecules/BaseDrawer';
import { useDrawerStore } from '@/shared/store';
import { TimeBadge, TypeBadge, TechStackBadge } from '../../molecules';

/**
 * ExperienceDrawer - Slide-out panel displaying work experience details
 * 
 * Features:
 * - Uses BaseDrawer for consistent drawer behavior
 * - Displays achievement bullet points
 * - Shows tech stack badges
 * - Connected to global Zustand store
 */
export const ExperienceDrawer: React.FC = () => {
  const { isExperienceDrawerOpen, selectedExperience, closeExperienceDrawer } = useDrawerStore();

  if (!selectedExperience) return null;

  const { title, subtitle, time, type, details = [], techStack } = selectedExperience;
  const techStackArray = techStack ? techStack.split(',').map(tech => tech.trim()) : [];

  // Custom gradient header content
  const headerContent = (
    <VStack align="start" spacing={2}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
        {title}
      </Text>
      <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" opacity={0.95}>
        {subtitle}
      </Text>
    </VStack>
  );

  return (
    <BaseDrawer
      isOpen={isExperienceDrawerOpen}
      onClose={closeExperienceDrawer}
      header={headerContent}
      headerProps={{
        bgGradient: 'linear(to-r, gray.700, gray.800)',
        color: 'white',
      }}
      bodyProps={{
        bg: 'gray.50',
      }}
    >
      <VStack align="stretch" spacing={{ base: 4, md: 6 }}>
        {/* Badges at top of drawer body - compact */}
        <Flex gap={{ base: 1, md: 1.5 }} flexWrap="wrap" mb={-2}>
          <TimeBadge fontSize={{ base: 'xs', md: 'xs' }} px={{ base: 2, md: 2.5 }} py={{ base: 0.5, md: 1 }}>
            {time}
          </TimeBadge>
          <TypeBadge type={type} fontSize={{ base: 'xs', md: 'xs' }} px={{ base: 2, md: 2.5 }} py={{ base: 0.5, md: 1 }}>
            {type}
          </TypeBadge>
        </Flex>

        {/* Key Achievements Section */}
        {details.length > 0 && (
          <Box 
            bg="white" 
            p={{ base: 4, md: 5 }}
            borderRadius="12px" 
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.200"
          >
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" mb={3} color="gray.800">
              Key Achievements
            </Text>
            <VStack align="stretch" spacing={2}>
              {details.map((detail, index) => (
                <Flex key={index} align="start" gap={2}>
                  <Text color="gray.700" fontWeight="bold" mt={0.5} flexShrink={0}>
                    •
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.600" lineHeight="1.6">
                    {detail}
                  </Text>
                </Flex>
              ))}
            </VStack>
          </Box>
        )}

        {/* Tech Stack Section */}
        {techStackArray.length > 0 && (
          <Box 
            bg="white" 
            p={{ base: 4, md: 5 }}
            borderRadius="12px" 
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.200"
          >
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" mb={3} color="gray.800">
              Tech Stack
            </Text>
            <Flex flexWrap="wrap" gap={{ base: 1.5, md: 2 }}>
              {techStackArray.map((tech, index) => (
                <TechStackBadge key={index}>
                  {tech}
                </TechStackBadge>
              ))}
            </Flex>
          </Box>
        )}
      </VStack>
    </BaseDrawer>
  );
};
