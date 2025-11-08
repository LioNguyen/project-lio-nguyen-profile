import { Container, ContainerProps } from '@chakra-ui/react'
import type { FC } from 'react'
import { memo } from 'react'

/**
 * AppContainer Template
 * Main application container with scroll-to-top button
 */
export interface AppContainerProps extends ContainerProps {}

export const AppContainer: FC<AppContainerProps> = memo(({ children, ...props }) => {

  // const isScrolling = useScrolling()

  return (
    <Container id="app-container" variant="appLayout" {...props}>
      {children}
      {/* <Center
        _hover={{ bg: 'default.buttonBgHover' }}
        aria-label="home"
        as="a"
        bg="default.buttonBg"
        borderRadius={4}
        bottom={isScrolling ? { base: 20, sm: 5 } : -20}
        href="#home"
        padding={2}
        position="fixed"
        right="32px"
        width="fit-content"
      >
        <IoArrowUpOutline color="white" size={20} />
      </Center> */}
    </Container>
  )
})

AppContainer.displayName = 'AppContainer'
