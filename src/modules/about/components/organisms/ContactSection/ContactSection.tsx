import { memo } from 'react';
import type { FC } from 'react';
import { Stack, HStack, VStack, Link, Icon, Divider, Text } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';
import { MdEmail, MdPhone } from 'react-icons/md';

import { useI18n } from '@/core/i18n';
import { Title } from '@/core/components/atoms';

/**
 * ContactSection Component
 * Displays contact information with email and phone
 * Provides interactive links for quick contact
 */
export interface ContactSectionProps extends StackProps {}

export const ContactSection: FC<ContactSectionProps> = memo((props) => {
  const { t } = useI18n();

  return (
    <Stack spacing={10} width="100%" alignItems="center" {...props}>
      <Divider borderColor="gray.300" />

      {/* Contact Header */}
      <Stack spacing={2} alignItems="center" width="100%">
        <Title fontSize={{ base: '2xl', sm: '3xl' }}>
          {t('contact.title')}
        </Title>
        <Text fontSize="md" color="default.text">
          {t('contact.subtitle')}
        </Text>
      </Stack>

      {/* Contact Items */}
      <Stack spacing={6} width={{ base: '100%', sm: '80%', md: '60%' }}>
        {/* Email */}
        <Stack
          spacing={3}
          padding="20px"
          borderRadius="12px"
          bg="rgba(0,0,0,0.02)"
          alignItems="flex-start"
          _hover={{ bg: 'rgba(0,0,0,0.05)' }}
          transition="all 0.3s ease"
        >
          <HStack spacing={3} width="100%">
            <Icon as={MdEmail} boxSize={6} color="inherit" opacity={0.7} flexShrink={0} />
            <VStack spacing={1} alignItems="flex-start" width="100%">
              <Text fontWeight="bold" fontSize="md" color="default.titleDark">
                {t('contact.email')}
              </Text>
              <Link
                href={`mailto:${t('contact.emailValue')}`}
                fontSize="sm"
                color="default.text"
                _hover={{ opacity: 0.7, textDecoration: 'underline' }}
                wordBreak="break-all"
              >
                {t('contact.emailValue')}
              </Link>
            </VStack>
          </HStack>
        </Stack>

        {/* Phone */}
        <Stack
          spacing={3}
          padding="20px"
          borderRadius="12px"
          bg="rgba(0,0,0,0.02)"
          alignItems="flex-start"
          _hover={{ bg: 'rgba(0,0,0,0.05)' }}
          transition="all 0.3s ease"
        >
          <HStack spacing={3} width="100%">
            <Icon as={MdPhone} boxSize={6} color="inherit" opacity={0.7} flexShrink={0} />
            <VStack spacing={1} alignItems="flex-start" width="100%">
              <Text fontWeight="bold" fontSize="md" color="default.titleDark">
                {t('contact.phone')}
              </Text>
              <Link
                href={`tel:${t('contact.phoneValue').replace(/\s+/g, '')}`}
                fontSize="sm"
                color="default.text"
                _hover={{ opacity: 0.7, textDecoration: 'underline' }}
              >
                {t('contact.phoneValue')}
              </Link>
            </VStack>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
});

ContactSection.displayName = 'ContactSection';
