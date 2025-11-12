import { memo } from 'react';
import type { FC, HTMLAttributes } from 'react';
import { Container, Stack, Text, VStack, HStack, Link, Icon } from '@chakra-ui/react';
import { MdEmail, MdPhone } from 'react-icons/md';

import { useI18n } from '@/core/i18n';

export interface ContactPageProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactPage: FC<ContactPageProps> = memo((props) => {
  const { t } = useI18n();

  return (
    <Container id="contact" variant="pageLayout" {...props}>
      {/* Content section */}
      <Stack className="contact__content" height={'100%'} textAlign="center" spacing={8}>
        {/* START: Header */}
        <VStack spacing={4}>
          <Text variant="title">{t('contact.title')}</Text>
          <Text variant="subtitle">{t('contact.subtitle')}</Text>
        </VStack>
        {/* END: Header */}

        {/* Contact Information */}
        <VStack spacing={6} alignItems="center">
          <HStack spacing={4} alignItems="center">
            <Icon as={MdEmail} boxSize={6} color="blue.500" />
            <VStack spacing={1} alignItems="flex-start">
              <Text fontWeight="bold" fontSize="lg">{t('contact.email')}</Text>
              <Link href={`mailto:${t('contact.emailValue')}`} color="blue.500" fontSize="md">
                {t('contact.emailValue')}
              </Link>
            </VStack>
          </HStack>

          <HStack spacing={4} alignItems="center">
            <Icon as={MdPhone} boxSize={6} color="green.500" />
            <VStack spacing={1} alignItems="flex-start">
              <Text fontWeight="bold" fontSize="lg">{t('contact.phone')}</Text>
              <Link href={`tel:${t('contact.phoneValue').replace(/\s+/g, '')}`} color="green.500" fontSize="md">
                {t('contact.phoneValue')}
              </Link>
            </VStack>
          </HStack>
        </VStack>
      </Stack>
    </Container>
  );
});

ContactPage.displayName = 'ContactPage';
