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
import { useNavigate } from "react-router-dom";

interface BottomNavbarProps extends ContainerProps {
  navItems: any[];
  toggleModal?: Function;
}

export const BottomNavbar: FC<BottomNavbarProps> = ({
  children,
  navItems,
  toggleModal,
  ...props
}) => {
  const navigate = useNavigate();

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
              alignItems="center"
              justifyContent="flex-start"
              gap="4px"
              width={"30%"}
              onClick={() => navigate(`${item.navigate}`)}
            >
              {<Icon size={20} />}
              <Text fontSize="10px">{item.title}</Text>
            </Stack>
          );
        })}
        <Box width={"30%"}></Box>
        {/* <Box width={"30%"}></Box> */}
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
