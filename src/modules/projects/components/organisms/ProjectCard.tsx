import { Box, Heading, Text, Image, Tag, Flex, useColorModeValue, IconButton, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

export interface ProjectCardProps {
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** External URL to navigate when clicked */
  url: string;
  /** GitHub repository URL (optional) */
  githubUrl?: string;
  /** Logo image URL */
  logoUrl?: string;
  /** Array of technology tags */
  tags?: string[];
}

/**
 * ProjectCard Component
 * 
 * A clickable card component that displays project information and navigates
 * to an external URL when clicked. Features hover animations and styling.
 */
export const ProjectCard = ({ title, description, url, githubUrl, logoUrl, tags = [] }: ProjectCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBg = useColorModeValue('gray.50', 'gray.750');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const hoverBorderColor = useColorModeValue('gray.900', 'gray.400');
  const iconColor = useColorModeValue('gray.600', 'gray.400');

  /**
   * Handle card click - opens URL in new tab
   */
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  /**
   * Handle GitHub link click - prevents card click event
   */
  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <MotionBox
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="xl"
      p={6}
      cursor="pointer"
      onClick={handleClick}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      _hover={{
        bg: hoverBg,
        boxShadow: 'xl',
        borderColor: hoverBorderColor,
      }}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {/* Logo Section */}
      {logoUrl && (
        <Flex justify="center" mb={4}>
          <Image
            src={logoUrl}
            alt={`${title} logo`}
            boxSize="80px"
            objectFit="contain"
            fallbackSrc="https://via.placeholder.com/80?text=Logo"
          />
        </Flex>
      )}

      {/* Title */}
      <Heading as="h3" size="md" mb={3} textAlign="center">
        {title}
      </Heading>

      {/* Description */}
      <Text color={textColor} fontSize="sm" mb={4} textAlign="center" noOfLines={3}>
        {description}
      </Text>

      {/* Action Links - GitHub and Live Demo */}
      {(githubUrl || url) && (
        <HStack justify="center" spacing={3} mb={4}>
          {githubUrl && (
            <IconButton
              aria-label="View GitHub repository"
              icon={<FaGithub size={20} />}
              size="sm"
              variant="ghost"
              color={iconColor}
              onClick={handleGithubClick}
              _hover={{
                bg: 'gray.100',
                color: 'gray.900',
              }}
              title="View GitHub Repository"
            />
          )}
          <IconButton
            aria-label="View live demo"
            icon={<FaExternalLinkAlt size={16} />}
            size="sm"
            variant="ghost"
            color={iconColor}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            _hover={{
              bg: 'gray.100',
              color: 'gray.900',
            }}
            title="View Live Demo"
          />
        </HStack>
      )}

      {/* Technology Tags */}
      {tags.length > 0 && (
        <Flex gap={2} flexWrap="wrap" justify="center">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              size="sm"
              variant="subtle"
              colorScheme="gray"
            >
              {tag}
            </Tag>
          ))}
        </Flex>
      )}
    </MotionBox>
  );
};
