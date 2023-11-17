import * as S from "./AppContainer.styles";

import { useDevice } from "@/hooks";
import { Center, ContainerProps } from "@chakra-ui/react";
import { Hooks } from "minimist-react-library";
import { FC } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

interface AppContainerProps extends ContainerProps {}

export const AppContainer: FC<AppContainerProps> = ({
  className = "",
  children,
  ...props
}) => {
  const { useScrolling } = Hooks.Window;

  const { isMobile, isTablet } = useDevice();
  const isScrolling = useScrolling();

  const getPosition = () => {
    if (isScrolling) {
      if (isMobile || isTablet) {
        return {
          bottom: 16,
        };
      }
      return {
        bottom: 5,
      };
    }
    return {
      bottom: -20,
    };
  };

  return (
    <S.Wrapper
      className={`app-container ${className}`}
      margin={"auto"}
      maxW={"container.lg"}
      {...props}
    >
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
        bottom={isScrolling ? { base: 16, sm: 5 } : -20}
        right="32px"
      >
        <IoArrowUpOutline color="white" size={20} />
      </Center>
    </S.Wrapper>
  );
};
