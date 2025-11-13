import { memo } from 'react';
import type { FC } from 'react';
import { Box, VStack, HStack, Text, Progress } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';

/**
 * SkillCard Component
 * Displays a skill group card with title, description and skills list
 * Extracts the individual skill group card box from SkillsContent
 */
export interface SkillItem {
  name: string;
  rate: number;
  level: 'expert' | 'proficient' | 'familiar';
}

export interface SkillCardProps extends BoxProps {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const SkillCard: FC<SkillCardProps> = memo(({ title, description, skills, ...props }) => {
  return (
    <Box
      bg="white"
      borderRadius="12px"
      border="1px solid rgba(0,0,0,0.08)"
      overflow="hidden"
      boxShadow="0 2px 12px rgba(0,0,0,0.06)"
      transition="all 0.3s ease"
      _hover={{
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        transform: 'translateY(-2px)',
      }}
      {...props}
    >
      {/* Card Header with Gradient - More Compact */}
      <Box
        bgGradient="linear(to-r, rgba(0,0,0,0.04), rgba(0,0,0,0.02))"
        borderBottom="2px solid rgba(0,0,0,0.1)"
        px={{ base: 3, md: 3.5 }}
        py={{ base: 2, md: 2.5 }}
      >
        <VStack spacing={0.5} alignItems="flex-start">
          <Text 
            fontSize={{ base: 'md', md: 'base' }} 
            fontWeight="bold" 
            color="default.titleDark"
            letterSpacing="-0.3px"
            lineHeight="1.3"
            mb="6px"
          >
            {title}
          </Text>
          <Text 
            fontSize={{ base: '11px', md: 'sm' }} 
            color="default.text"
            lineHeight="1.3"
            noOfLines={1}
          >
            {description}
          </Text>
        </VStack>
      </Box>

      {/* Skills List - More Compact */}
      <VStack spacing={0} alignItems="stretch" p={{ base: 1.5, md: 2 }}>
        {skills.map((skill, idx) => (
          <Box
            key={skill.name}
            px={{ base: 2, md: 2.5 }}
            py={{ base: 1.5, md: 2 }}
            borderBottom={idx < skills.length - 1 ? '1px solid' : 'none'}
            borderBottomColor="rgba(0,0,0,0.04)"
            bg={skill.level === 'expert' ? 'rgba(0,0,0,0.02)' : 'transparent'}
            borderLeft={skill.level === 'expert' ? '3px solid' : 'none'}
            borderLeftColor="rgba(0,0,0,0.3)"
            transition="all 0.2s ease"
            _hover={{ bg: 'rgba(0,0,0,0.03)' }}
          >
            <HStack justifyContent="space-between" spacing={2}>
              <HStack spacing={1.5} flex={1} minW={0}>
                <Text 
                  fontSize={{ base: '12px', md: 'sm' }} 
                  fontWeight="600" 
                  color="default.titleDark"
                  noOfLines={1}
                >
                  {skill.name}
                </Text>
                {skill.level === 'expert' && (
                  <Text fontSize="9px" flexShrink={0}>⭐</Text>
                )}
              </HStack>
              <HStack spacing={1.5} flexShrink={0}>
                <Box width={{ base: '35px', md: '45px' }}>
                  <Progress
                    value={skill.rate * 10}
                    size="xs"
                    borderRadius="full"
                    colorScheme="blackAlpha"
                    bg="rgba(0,0,0,0.06)"
                  />
                </Box>
                <Text 
                  fontSize={{ base: '9px', md: '10px' }} 
                  fontWeight="bold" 
                  color="default.titleDark"
                  opacity={0.6}
                  minW="20px"
                  textAlign="right"
                >
                  {skill.rate}/10
                </Text>
              </HStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
});

SkillCard.displayName = 'SkillCard';
