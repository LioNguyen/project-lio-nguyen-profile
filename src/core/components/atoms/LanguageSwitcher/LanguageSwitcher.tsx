import { Flex, Text } from '@chakra-ui/react'
import { memo } from 'react'
import type { FC } from 'react'

import { useI18n } from '@/core/i18n'

/**
 * LanguageSwitcher Component
 * Custom toggle switch with EN/VI text for language switching
 */
export interface LanguageSwitcherProps {
  /** Size of the switch */
  size?: 'sm' | 'md' | 'lg'
}

const SIZE_CONFIG = {
  sm: {
    width: '50px',
    height: '24px',
    fontSize: '9px',
    padding: '2px',
  },
  md: {
    width: '58px',
    height: '28px',
    fontSize: '10px',
    padding: '2px',
  },
  lg: {
    width: '66px',
    height: '32px',
    fontSize: '11px',
    padding: '3px',
  },
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(({ size = 'md' }) => {
  const { locale, setLocale } = useI18n()

  // Vietnamese = right position (true), English = left position (false)
  const isVietnamese = locale === 'vi'

  const handleLanguageToggle = () => {
    setLocale(isVietnamese ? 'en' : 'vi')
  }

  const config = SIZE_CONFIG[size]

  return (
    <Flex
      as="button"
      position="relative"
      width={config.width}
      height={config.height}
      bg="rgba(0, 0, 0, 0.1)"
      borderRadius="full"
      cursor="pointer"
      onClick={handleLanguageToggle}
      transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        bg: 'rgba(0, 0, 0, 0.15)',
        transform: 'scale(1.02)',
      }}
      _active={{
        transform: 'scale(0.97)',
      }}
      border="1px solid"
      borderColor="rgba(0, 0, 0, 0.1)"
    >
      {/* Track with both labels */}
      <Flex
        position="absolute"
        top={config.padding}
        left={config.padding}
        right={config.padding}
        bottom={config.padding}
        alignItems="center"
        justifyContent="space-between"
        px="4px"
      >
        <Text
          fontSize={config.fontSize}
          fontWeight="600"
          color="gray.500"
          opacity={!isVietnamese ? 0.5 : 0.25}
          transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          EN
        </Text>
        <Text
          fontSize={config.fontSize}
          fontWeight="600"
          color="gray.500"
          opacity={isVietnamese ? 0.5 : 0.25}
          transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          VI
        </Text>
      </Flex>

      {/* Sliding thumb with active label */}
      <Flex
        position="absolute"
        top={config.padding}
        left={config.padding}
        width={`calc(50% - ${config.padding})`}
        height={`calc(100% - ${config.padding} * 2)`}
        bg="white"
        borderRadius="full"
        alignItems="center"
        justifyContent="center"
        transform={isVietnamese ? `translateX(calc(100% + ${config.padding}))` : 'translateX(0)'}
        transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
      >
        <Text
          fontSize={config.fontSize}
          fontWeight="700"
          color="gray.800"
          transition="opacity 0.15s ease-in-out"
        >
          {isVietnamese ? 'VI' : 'EN'}
        </Text>
      </Flex>
    </Flex>
  )
})

LanguageSwitcher.displayName = 'LanguageSwitcher'
