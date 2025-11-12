import { Box, Container, ContainerProps, Flex, Stack, Tab, TabList, Text } from '@chakra-ui/react'
import type { FC } from 'react'
import { memo, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import type { NavItem } from '@/core/config/constants'

/**
 * BottomNavbar Component
 * Mobile navigation menu that slides up from bottom
 * Features:
 * - Proper routing integration
 * - Auto-close on outside click
 * - Active state tracking
 */
export interface BottomNavbarProps extends ContainerProps {
  navItems: NavItem[]
  toggleModal?: () => void
  isOpen?: boolean
}

// Map section values to paths
const valueToPath: Record<string, string> = {
  home: '/',
  journey: '/journey',
  skills: '/skills',
  projects: '/projects',
  about: '/about',
};

// Map paths to tab indices (updated: journey is now index 1, skills is index 2)
const pathToIndex: Record<string, number> = {
  '/': 0,
  '/journey': 1,
  '/skills': 2,
  '/projects': 3,
  '/about': 4,
};

export const BottomNavbar: FC<BottomNavbarProps> = memo(
  ({ navItems, toggleModal, isOpen, ...props }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const containerRef = useRef<HTMLDivElement>(null);

    /**
     * Handle navigation to different pages
     */
    const handleNavigation = (_index: number, sectionValue: string) => {
      const path = valueToPath[sectionValue];
      if (path) {
        navigate(path);
      }
      // Close the modal after navigation
      if (toggleModal) {
        toggleModal();
      }
    };

    /**
     * Get active tab index based on current route
     */
    const currentPath = location.pathname;
    const activeTabIndex = pathToIndex[currentPath] ?? 0;

    /**
     * Handle click outside to close the navbar
     */
    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        const target = event.target as Node;
        
        // Check if click is outside the bottom navbar container
        if (containerRef.current && !containerRef.current.contains(target)) {
          // Also check if click is not on the menu toggle button
          const menuToggle = document.querySelector('[aria-label="menu-toggle"]') as HTMLElement;
          if (menuToggle && !menuToggle.contains(target)) {
            if (toggleModal) {
              toggleModal();
            }
          }
        }
      };

      // Add event listener with a small delay to prevent immediate closing
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside as EventListener);
        document.addEventListener('touchstart', handleClickOutside as EventListener);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside as EventListener);
        document.removeEventListener('touchstart', handleClickOutside as EventListener);
      };
    }, [isOpen, toggleModal]);

    return (
      <Container 
        ref={containerRef}
        id="bottom-navbar" 
        padding="15px 0" 
        variant="bottomModalLayout" 
        {...props}
      >
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
                onClick={() => handleNavigation(index, item.value)}
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
          {/* <Center
            aria-label="close-icon"
            as="button"
            className="navbar__close-icon"
            onClick={() => toggleModal && toggleModal()}
            width="30%"
          >
            <IoClose size={20} />
          </Center> */}
        </TabList>
      </Container>
    )
  }
)

BottomNavbar.displayName = 'BottomNavbar'
