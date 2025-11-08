import { Center, ContainerProps, Flex, Spacer, TabList, Tab } from '@chakra-ui/react'
import type { FC } from 'react'
import { memo } from 'react'
import { CgMenuMotion } from 'react-icons/cg'
import { PiHouse } from 'react-icons/pi'
import { useScrolling, useToggle } from 'react-minimist-utils'

import { navItems } from '@/core/config/constants'

import * as S from './Navbar.styles'
import { BottomNavbar } from '@/core/components/organisms/BottomNavbar'

/**
 * Navbar Component
 * Main navigation bar with responsive behavior
 */
export interface NavbarProps extends ContainerProps {}

export const Navbar: FC<NavbarProps> = memo((props) => {
  const [isShowBottomNavbar, toggleBottomNavbar] = useToggle(false)
  const isScrolling = useScrolling()


  return (
    <S.Wrapper
      boxShadow={isScrolling ? 'default.navbar' : 'none'}
      id="navbar"
      variant="navbar"
      zIndex={2}
      {...props}
    >
      {/* Content section */}
      <Flex
        className="navbar__content"
        justifyContent="space-between"
        margin="auto"
        maxW="container.lg"
        padding={{ base: '10px 20px', sm: '12px 24px' }}
      >
        <Center aria-label="home" as="button" className="navbar__left" onClick={() => {
          // Manually trigger tab change to home (index 0)
          const tabsElement = document.querySelector('[role="tablist"]');
          if (tabsElement) {
            const homeTab = tabsElement.querySelector('[role="tab"]') as HTMLButtonElement;
            homeTab?.click();
          }
        }}>
          <PiHouse size={24} />
        </Center>

        <Spacer className="navbar__spacer" />

        <TabList
          as={S.NavbarMenu}
          alignItems="center"
          className="navbar__right"
          display={{ base: 'none', sm: 'flex' }}
          gap={{ base: 4, md: 6 }}
          position="relative"
        >
          {navItems.map((item) => (
            <Tab
              key={item.name}
              _hover={{
                color: 'default.titleDark',
                opacity: 1,
              }}
              _selected={{
                color: 'default.titleDark',
              }}
              className="navbar__item"
              color="default.title"
              height="32px"
              fontSize={{ base: 'sm', md: 'md' }}
              transition="color 0.2s"
              position="relative"
              pb="2px"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  bg: 'default.titleDark',
                  transform: 'scaleX(0)',
                  transformOrigin: 'center',
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                },
                '&[aria-selected="true"]::after': {
                  transform: 'scaleX(1)',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                },
              }}
            >
              {item.name}
            </Tab>
          ))}
        </TabList>

        <S.BottomNavbarMenuToggle
          as="button"
          display={{ base: 'flex', sm: 'none' }}
          onClick={toggleBottomNavbar}
        >
          <CgMenuMotion size={20} />
        </S.BottomNavbarMenuToggle>
      </Flex>

      <BottomNavbar
        display={{ base: 'block', sm: 'none' }}
        navItems={navItems}
        toggleModal={toggleBottomNavbar}
        transform={isShowBottomNavbar ? 'translateY(0px)' : 'translateY(200px)'}
      />
    </S.Wrapper>
  )
})

Navbar.displayName = 'Navbar'
