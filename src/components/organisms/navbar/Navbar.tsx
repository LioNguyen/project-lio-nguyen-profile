import { BottomNavbar } from "@/components";
import {
  Center,
  Container,
  ContainerProps,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Hooks } from "minimist-react-library";
import { FC } from "react";
import { CgMenuMotion, CgProfile } from "react-icons/cg";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuImage } from "react-icons/lu";
import { TbSmartHome } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";
import { FaRegFileLines } from "react-icons/fa6";
import { RxImage } from "react-icons/rx";

interface NavbarProps extends ContainerProps {}

export const Navbar: FC<NavbarProps> = (props) => {
  const [isShowBottomNavbar, toggleBottomNavbar] = Hooks.Data.useToggle(false);

  const isScrolling = Hooks.Window.useScrolling();

  const navItems = [
    {
      icon: <TbSmartHome size={20} />,
      name: "Home",
      href: "#home",
    },
    {
      icon: <CgProfile size={20} />,
      name: "About",
      href: "#about",
    },
    {
      icon: <FaRegFileLines size={20} />,
      name: "Skills",
      href: "#skills",
    },
    {
      icon: <HiOutlineBriefcase size={20} />,
      name: "Qualification",
      href: "#qualification",
    },
    // {
    //   icon: <RxImage size={20} />,
    //   name: "Portfolio",
    //   href: "#portfolio",
    // },
    // {
    //   icon: <VscSend size={20} />,
    //   name: "Contact",
    //   href: "#contact",
    // },
  ];

  return (
    <Container
      id="navbar"
      variant="navbar"
      boxShadow={isScrolling ? "default.bottomModal" : "none"}
      // backdropFilter={{ base: "blur(15px)", sm: "unset" }}
      // bg={{ base: "none", sm: "white" }}
      {...props}
    >
      {/* Content section */}
      <Flex
        className="navbar__content"
        justifyContent={"space-between"}
        margin="auto"
        maxW={"container.lg"}
        padding="15px 32px"
      >
        <Center className="navbar__left" as="a" href="#home" aria-label="home">
          {/* <PiHouse size={20} /> */}
          <Text>Nghi</Text>
        </Center>

        <Spacer className="navbar__spacer" />

        <Center
          as="button"
          display={{ base: "flex", sm: "none" }}
          onClick={toggleBottomNavbar}
        >
          <CgMenuMotion size={20} />
        </Center>

        <Flex
          className="navbar__right"
          display={{ base: "none", sm: "flex" }}
          gap={8}
        >
          {navItems.map((item) => (
            <Text
              key={item.name}
              className="navbar__item"
              as="a"
              href={item.href}
            >
              {item.name}
            </Text>
          ))}
        </Flex>
      </Flex>

      <BottomNavbar
        display={{ base: "block", sm: "none" }}
        navItems={navItems}
        toggleModal={toggleBottomNavbar}
        transform={isShowBottomNavbar ? "translateY(0px)" : "translateY(200px)"}
      />
    </Container>
  );
};
