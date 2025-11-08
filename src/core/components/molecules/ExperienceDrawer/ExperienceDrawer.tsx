import React from 'react';
import {
  Badge,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';

/**
 * Props for ExperienceDrawer component
 */
interface ExperienceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  time: string;
  type: 'freelance' | 'fulltime';
  details: string[];
  techStack?: string[];
}

/**
 * ExperienceDrawer - Slide-out panel displaying work experience details
 * 
 * Features:
 * - Slides from right side on desktop
 * - Full width on mobile
 * - Gradient header with title/subtitle/time
 * - Achievement bullet points
 * - Tech stack badges
 */
export const ExperienceDrawer: React.FC<ExperienceDrawerProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  time,
  type,
  details,
  techStack = [],
}) => {
  return (
    <Drawer 
      isOpen={isOpen} 
      placement="right" 
      onClose={onClose} 
      size={{ base: 'full', md: 'md' }}
    >
      <DrawerOverlay 
        bg="blackAlpha.400"
        sx={{
          // Fast, linear fade - no easing delay
          transition: 'opacity 0.05s linear !important',
        }}
      />
      <DrawerContent
        margin={{ base: 0, md: 4 }}
        maxHeight={{ base: '100vh', md: 'calc(100vh - 32px)' }}
        borderRadius={{ base: 0, md: '16px' }}
        boxShadow="2xl"
        bg="white"
        sx={{
          // Fast, linear slide - no slow start
          transition: 'transform 0.12s linear !important',
        }}
      >
        {/* Close button - positioned absolutely at top-right */}
        <Box
          position="absolute"
          top={4}
          right={4}
          zIndex={10}
          onClick={onClose}
          cursor="pointer"
          width="40px"
          height="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="md"
          bg="transparent"
          // _hover={{ bg: 'gray.100' }}
          // transition="background-color 0.2s"
        >
          <Text fontSize="24px" fontWeight="bold" color="white">
            ×
          </Text>
        </Box>
        
        {/* Gradient Header */}
        <DrawerHeader
          bgGradient="linear(to-r, gray.700, gray.800)"
          color="white"
          py={{ base: 5, md: 6 }}
          borderBottomWidth="1px"
          borderBottomColor="gray.200"
          borderTopRadius={{ base: 0, md: '16px' }}
          pr={{ base: 12, md: 6 }}
        >
          <VStack align="start" spacing={2}>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
              {title}
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" opacity={0.95}>
              {subtitle}
            </Text>
          </VStack>
        </DrawerHeader>

        <DrawerBody 
          py={{ base: 5, md: 6 }} 
          bg="gray.50" 
          borderBottomRadius={{ base: 0, md: '16px' }}
          px={{ base: 4, md: 5 }}
        >
          <VStack align="stretch" spacing={{ base: 4, md: 6 }}>
            {/* Badges at top of drawer body - compact */}
            <Flex gap={{ base: 1, md: 1.5 }} flexWrap="wrap" mb={-2}>
              <Box
                display="inline-block"
                bg="gray.700"
                color="white"
                fontSize={{ base: 'xs', md: 'xs' }}
                fontWeight="semibold"
                px={{ base: 2, md: 2.5 }}
                py={{ base: 0.5, md: 1 }}
                borderRadius="full"
              >
                {time}
              </Box>
              <Box
                display="inline-block"
                bg={type === 'freelance' ? 'blue.600' : 'gray.800'}
                color="white"
                fontSize={{ base: 'xs', md: 'xs' }}
                fontWeight="semibold"
                px={{ base: 2, md: 2.5 }}
                py={{ base: 0.5, md: 1 }}
                borderRadius="full"
                textTransform="capitalize"
              >
                {type}
              </Box>
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
            {techStack.length > 0 && (
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
                  {techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      colorScheme="gray"
                      bg="gray.700"
                      color="white"
                      px={{ base: 2, md: 2.5 }}
                      py={{ base: 0.5, md: 1 }}
                      borderRadius="full"
                      fontSize={{ base: 'xs', md: 'xs' }}
                      fontWeight="medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            )}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
