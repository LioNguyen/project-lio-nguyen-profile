import { Box, Center, Container, ContainerProps, Flex, Stack, Text, Tab, TabList } from '@chakra-ui/react'
import { memo } from 'react'
import { IoClose } from 'react-icons/io5'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'

import type { NavItem } from '@/core/config/constants'

/**
 * BottomNavbar Component
 * Mobile navigation menu that slides up from bottom
 */
export interface BottomNavbarProps extends ContainerProps {
  navItems: NavItem[]
  toggleModal?: () => void
}

// Map section names to tab indices
const sectionToIndex: Record<string, number> = {
  home: 0,
  skills: 1,
  qualification: 2,
  about: 3,
};

export const BottomNavbar: FC<BottomNavbarProps> = memo(
  ({ children, navItems, toggleModal, ...props }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleNavigation = (_index: number, sectionName: string) => {
      setSearchParams({ p: sectionName });
      toggleModal && toggleModal();
    };

    const currentPage = searchParams.get('p') || 'home';
    const activeTabIndex = sectionToIndex[currentPage] || 0;

    return (
      <Container id="bottom-navbar" padding="15px 0" variant="bottomModalLayout" {...props}>
        {/* Content section */}
        <TabList
          as={Flex}
          className="bottom-navbar__content"
          flexWrap="wrap"
          gap="15px 5px"
          justifyContent="space-around"
        >
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeTabIndex === index;
            return (
              <Tab
                key={item.name}
                as={Stack}
                alignItems="center"
                className="navbar__item"
                gap="2px"
                justifyContent="flex-start"
                width="30%"
                onClick={() => handleNavigation(index, item.name.toLowerCase())}
                aria-selected={isActive}
                sx={{
                  '&[aria-selected="true"]': {
                    color: 'default.titleDark',
                  },
                  '&[aria-selected="false"]': {
                    color: 'default.title',
                  },
                }}
                transition="color 0.2s"
              >
                <Icon size={20} />
                <Text fontSize="xs">{item.name}</Text>
              </Tab>
            )
          })}
          <Box width="30%" />
          <Box width="30%" />
          <Center
            aria-label="close-icon"
            as="button"
            className="navbar__close-icon"
            onClick={() => toggleModal && toggleModal()}
            width="30%"
          >
            <IoClose size={20} />
          </Center>
        </TabList>
      </Container>
    )
  }
)

BottomNavbar.displayName = 'BottomNavbar'
