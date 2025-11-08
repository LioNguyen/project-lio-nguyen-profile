import { Link, Stack, StackProps } from '@chakra-ui/react'
import { memo, useMemo } from 'react'
import { CgNpm } from 'react-icons/cg'
import { FaLinkedin } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import type { FC, ReactNode } from 'react'

import { useDevice } from '@/shared/hooks'

/**
 * SocialWidget Component
 * Displays social media links in a vertical stack
 */
export interface SocialWidgetProps extends StackProps {}

interface SocialItem {
  href: string
  icon: ReactNode
  name: string
}

export const SocialWidget: FC<SocialWidgetProps> = memo((props) => {
  const { isMobile } = useDevice()

  const socialItems: SocialItem[] = useMemo(
    () => [
      {
        name: 'LinkedIn',
        icon: <FaLinkedin size={isMobile ? 20 : 25} />,
        href: 'https://www.linkedin.com/in/lio-nguyen/',
      },
      {
        name: 'Github',
        icon: <FiGithub size={isMobile ? 20 : 25} />,
        href: 'https://github.com/LioNguyen',
      },
      {
        name: 'Npm',
        icon: <CgNpm size={isMobile ? 20 : 25} />,
        href: 'https://www.npmjs.com/~lionguyen',
      },
    ],
    [isMobile]
  )

  return (
    <Stack
      bottom={{ base: '70%', sm: 0 }}
      gap="30px"
      id="social-widget"
      justifyContent="center"
      left={0}
      position="absolute"
      top={0}
      {...props}
    >
      {socialItems.map((item) => (
        <Link
          key={item.name}
          aria-label={item.name}
          className="social-widget__item"
          href={item.href}
          isExternal
        >
          {item.icon}
        </Link>
      ))}
    </Stack>
  )
})

SocialWidget.displayName = 'SocialWidget'
