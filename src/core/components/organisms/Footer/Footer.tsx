import { Container, ContainerProps, HStack, Link, Stack, Text } from '@chakra-ui/react'
import { memo, useMemo } from 'react'
import { ImFacebook2, ImInstagram } from 'react-icons/im'
import { SiLinkedin } from 'react-icons/si'
import type { FC, ReactNode } from 'react'

import { useDevice } from '@/shared/hooks'

/**
 * Footer Component
 * Main footer with navigation links and social media icons
 */
export interface FooterProps extends ContainerProps {}

interface NavItem {
  href: string
  name: string
}

interface SocialItem {
  href: string
  icon: ReactNode
  name: string
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Qualification', href: '#qualification' },
]

export const Footer: FC<FooterProps> = memo((props) => {
  const { isMobile } = useDevice()

  const socialItems: SocialItem[] = useMemo(
    () => [
      {
        name: 'LinkedIn',
        icon: <SiLinkedin size={isMobile ? 20 : 25} />,
        href: 'https://www.linkedin.com/in/lio-nguyen/',
      },
      {
        name: 'Facebook',
        icon: <ImFacebook2 size={isMobile ? 20 : 25} />,
        href: 'https://www.facebook.com/nghinguyen9994',
      },
      {
        name: 'Instagram',
        icon: <ImInstagram size={isMobile ? 20 : 25} />,
        href: 'https://www.instagram.com/nguyenthanhnghi9994/',
      },
    ],
    [isMobile]
  )

  return (
    <Container id="footer" variant="footer" {...props}>
      <Stack alignItems="center" gap="20px">
        <Text variant="title">Lio</Text>

        <HStack gap="20px">
          {NAV_ITEMS.map((item) => (
            <Text key={item.name} as="a" href={item.href}>
              {item.name}
            </Text>
          ))}
        </HStack>

        <HStack gap="20px">
          {socialItems.map((item) => (
            <Link key={item.name} aria-label={item.name} as="a" href={item.href} isExternal>
              {item.icon}
            </Link>
          ))}
        </HStack>

        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          marginTop="30px"
          textAlign="center"
          width={{ base: '50%', sm: '100%' }}
        >
          Copyright © {new Date().getFullYear()} by Lio Nguyen. All rights reserved.
        </Text>
      </Stack>
    </Container>
  )
})

Footer.displayName = 'Footer'
