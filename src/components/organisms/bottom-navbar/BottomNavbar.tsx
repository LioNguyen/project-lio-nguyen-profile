import {
  Box,
  Center,
  Container,
  ContainerProps,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { IoClose } from "react-icons/io5";

export interface BottomNavbarProps extends ContainerProps {
  navItems: any[];
  toggleModal?: Function;
}

export const BottomNavbar: FC<BottomNavbarProps> = ({
  children,
  navItems,
  toggleModal,
  ...props
}) => {
  return (
    <Container
      id="bottom-navbar"
      variant="bottomModalLayout"
      padding="15px 0"
      {...props}
    >
      {/* Content section */}
      <Flex
        className="bottom-navbar__content"
        flexWrap="wrap"
        justifyContent="space-around"
        gap="15px 5px"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Stack
              key={item.name}
              className="navbar__item"
              as="a"
              href={item.href}
              alignItems="center"
              justifyContent="flex-start"
              gap="2px"
              width={"30%"}
            >
              {<Icon size={20} />}
              <Text fontSize="xs">{item.name}</Text>
            </Stack>
          );
        })}
        <Box width={"30%"}></Box>
        <Box width={"30%"}></Box>
        <Center
          className="navbar__close-icon"
          as="button"
          aria-label="close-icon"
          onClick={() => toggleModal && toggleModal()}
          width={"30%"}
        >
          <IoClose size={20} />
        </Center>
      </Flex>
    </Container>
  );
};
