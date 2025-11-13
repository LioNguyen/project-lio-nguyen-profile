import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { BaseDrawer } from '@/core/components/molecules/BaseDrawer';
import { useDrawerStore } from '@/shared/store';
import { TechStackBadge } from '../../atoms';

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

  const MotionBox = motion(Box);

  // Custom gradient header content with modern design
  const headerContent = (
    <VStack align="start" spacing={2} width="100%">
      {/* Title with Badge */}
      <HStack spacing={3} alignItems="center" flexWrap="wrap">
        <Text 
          fontSize={{ base: 'lg', md: 'xl' }} 
          fontWeight="bold"
          letterSpacing="-0.5px"
          lineHeight="1.2"
        >
          {title}
        </Text>
        <Box
          bg="white"
          color="rgba(0,0,0,0.85)"
          px={{ base: 2.5, md: 3 }}
          py={{ base: 1, md: 1.5 }}
          borderRadius="full"
          fontSize={{ base: '10px', md: '11px' }}
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="0.5px"
          boxShadow="0 2px 8px rgba(0,0,0,0.15)"
        >
          {type === 'fulltime' ? 'Fulltime' : 'Freelance'}
        </Box>
      </HStack>
      <HStack spacing={2} alignItems="center">
        <Text 
          fontSize={{ base: 'sm', md: 'md' }} 
          fontWeight="medium" 
          opacity={0.8}
        >
          {subtitle}
        </Text>
        <Box 
          width="4px" 
          height="4px" 
          borderRadius="full" 
          bg="whiteAlpha.600"
        />
        <Text 
          fontSize={{ base: 'xs', md: 'sm' }} 
          opacity={0.7}
          fontWeight="medium"
        >
          {time}
        </Text>
      </HStack>
    </VStack>
  );

  return (
    <BaseDrawer
      isOpen={isExperienceDrawerOpen}
      onClose={closeExperienceDrawer}
      header={headerContent}
      headerProps={{
        bgGradient: 'linear(to-br, rgba(0,0,0,0.9), rgba(0,0,0,0.8))',
        color: 'white',
        borderBottom: '1px solid',
        borderColor: 'whiteAlpha.200',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
      }}
      bodyProps={{
        bg: '#FAFAFA',
        position: 'relative',
      }}
    >
      <VStack align="stretch" spacing={{ base: 5, md: 6 }}>

        {/* Key Achievements Section - Modern Glass Card */}
        {details.length > 0 && (
          <MotionBox 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            bg="white" 
            p={{ base: 5, md: 6 }}
            borderRadius="16px" 
            boxShadow="0 4px 12px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.12)"
            border="1px solid"
            borderColor="rgba(0,0,0,0.06)"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              bgGradient: 'linear(to-r, rgba(0,0,0,0.8), rgba(0,0,0,0.4))',
            }}
          >
            <VStack align="stretch" spacing={4}>
              <HStack spacing={2} alignItems="center">
                <Box 
                  width="4px" 
                  height="20px" 
                  borderRadius="full" 
                  bg="rgba(0,0,0,0.9)"
                />
                <Text 
                  fontSize={{ base: 'md', md: 'lg' }} 
                  fontWeight="bold" 
                  color="default.titleDark"
                  letterSpacing="-0.3px"
                >
                  Key Achievements
                </Text>
              </HStack>
              
              <VStack align="stretch" spacing={3}>
                {details.map((detail, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    <Flex align="start" gap={3}>
                      <Box
                        minWidth="6px"
                        height="6px"
                        borderRadius="full"
                        bg="rgba(0,0,0,0.7)"
                        mt={2}
                      />
                      <Text 
                        fontSize={{ base: 'xs', md: 'sm' }} 
                        color="default.text" 
                        lineHeight="1.7"
                        fontWeight="400"
                      >
                        {detail}
                      </Text>
                    </Flex>
                  </MotionBox>
                ))}
              </VStack>
            </VStack>
          </MotionBox>
        )}

        {/* Tech Stack Section - Modern with Gradient Accent */}
        {techStackArray.length > 0 && (
          <MotionBox 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            bg="white" 
            p={{ base: 5, md: 6 }}
            borderRadius="16px" 
            boxShadow="0 4px 12px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.12)"
            border="1px solid"
            borderColor="rgba(0,0,0,0.06)"
            position="relative"
            overflow="hidden"
          >
            <VStack align="stretch" spacing={4}>
              <HStack spacing={2} alignItems="center">
                <Box 
                  width="4px" 
                  height="20px" 
                  borderRadius="full" 
                  bg="rgba(0,0,0,0.9)"
                />
                <Text 
                  fontSize={{ base: 'md', md: 'lg' }} 
                  fontWeight="bold" 
                  color="default.titleDark"
                  letterSpacing="-0.3px"
                >
                  Tech Stack
                </Text>
              </HStack>
              
              <Flex flexWrap="wrap" gap={2}>
                {techStackArray.map((tech, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 + index * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <TechStackBadge
                      bg="rgba(0,0,0,0.04)"
                      color="default.titleDark"
                      fontWeight="600"
                      fontSize={{ base: 'xs', md: 'sm' }}
                      px={{ base: 3, md: 4 }}
                      py={{ base: 1.5, md: 2 }}
                      borderRadius="8px"
                      border="1px solid"
                      borderColor="rgba(0,0,0,0.08)"
                      boxShadow="0 1px 3px rgba(0,0,0,0.06)"
                      transition="all 0.2s"
                      _hover={{
                        bg: 'rgba(0,0,0,0.08)',
                        borderColor: 'rgba(0,0,0,0.15)',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                      }}
                    >
                      {tech}
                    </TechStackBadge>
                  </MotionBox>
                ))}
              </Flex>
            </VStack>
            
            {/* Bottom gradient accent */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              height="2px"
              bgGradient="linear(to-r, rgba(0,0,0,0.1), rgba(0,0,0,0.4), rgba(0,0,0,0.1))"
            />
          </MotionBox>
        )}
      </VStack>
    </BaseDrawer>
  );
};
