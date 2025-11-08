import { memo } from 'react';
import type { FC, HTMLAttributes } from 'react';
import { Container, Stack, Text } from '@chakra-ui/react';

export interface ContactPageProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactPage: FC<ContactPageProps> = memo((props) => {
  return (
    <Container id="contact" variant="pageLayout" {...props}>
      {/* Content section */}
      <Stack className="contact__content" height={'100%'} textAlign="center">
        {/* START: Header */}
        <Text variant="title">My Contact</Text>
        <Text variant="subtitle">My Introduction</Text>
        {/* END: Header */}
      </Stack>
    </Container>
  );
});

ContactPage.displayName = 'ContactPage';
