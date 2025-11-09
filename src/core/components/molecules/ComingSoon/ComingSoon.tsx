import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { memo } from 'react'
import type { FC } from 'react'

import { useI18n } from '@/core/i18n'

/**
 * ComingSoon Component
 * Displays a coming soon message with modern minimalist design
 * Supports i18n for English and Vietnamese
 */
export interface ComingSoonProps {
  titleKey?: string
  descriptionKey?: string
}

export const ComingSoon: FC<ComingSoonProps> = memo(({ titleKey, descriptionKey }) => {
  const { t } = useI18n()

  const title = titleKey ? t(titleKey as any) : t('common.comingSoon')
  const description = descriptionKey ? t(descriptionKey as any) : undefined

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="60vh"
      textAlign="center"
      px={4}
      position="relative"
    >
      {/* Content */}
      <Flex
        direction="column"
        align="center"
        gap={4}
        position="relative"
        zIndex={1}
      >
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="500"
          color="default.titleDark"
          letterSpacing="0.02em"
          mb={2}
        >
          {title}
        </Heading>
        
        {description && (
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            color="default.text"
            maxW="400px"
            lineHeight="1.8"
            fontWeight="300"
          >
            {description}
          </Text>
        )}
        
        {/* Minimalist loading indicator */}
        <Flex gap={2} mt={4}>
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              w="4px"
              h="4px"
              bg="default.titleDark"
              borderRadius="full"
              animation={`fade 1.5s ease-in-out ${i * 0.3}s infinite`}
              sx={{
                '@keyframes fade': {
                  '0%, 100%': {
                    opacity: 0.2,
                  },
                  '50%': {
                    opacity: 1,
                  },
                },
              }}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
})

ComingSoon.displayName = 'ComingSoon'
