import { Center, Container, ContainerProps } from "@chakra-ui/react";
import { FC } from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import { Hooks } from "react-minimist-utils";

export interface AppContainerProps extends ContainerProps {}

export const AppContainer: FC<AppContainerProps> = ({ children, ...props }) => {
  const { useScrolling } = Hooks.Window;

  const isScrolling = useScrolling();

  return (
    <Container id="app-container" variant="appLayout" {...props}>
      {children}
      <Center
        as="a"
        href="#home"
        aria-label="home"
        bg="default.buttonBg"
        _hover={{ bg: "default.buttonBgHover" }}
        borderRadius={4}
        padding={2}
        width="fit-content"
        position="fixed"
        bottom={isScrolling ? { base: 20, sm: 5 } : -20}
        right="32px"
      >
        <IoArrowUpOutline color="white" size={20} />
      </Center>
    </Container>
  );
};
