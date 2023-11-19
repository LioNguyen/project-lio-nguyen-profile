import LogoLink from "@/assets/images/logo-lio-full-1800.png";
import { BottomNavbar } from "@/components";
import {
  Center,
  Container,
  ContainerProps,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { Hooks } from "react-minimist-utils";
import { FC, useEffect, useState } from "react";
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
  const { useScrolling, useToggle } = Hooks;
  const [isShowBottomNavbar, toggleBottomNavbar] = useToggle(false);
  const isScrolling = useScrolling();

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

  // useEffect(() => {
  //   const currentHash = window.location.hash;
  //   const element = document.querySelector(currentHash);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);

  return (
    <Container
      id="navbar"
      variant="navbar"
      boxShadow={isScrolling ? "default.navbar" : "none"}
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
          <Image
            src={LogoLink}
            alt="logo"
            width={{ base: "60px", sm: isScrolling ? "100px" : "250px" }}
          />
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
          alignItems="center"
          gap={8}
        >
          {navItems.map((item) => (
            <Center
              key={item.name}
              as="a"
              href={item.href}
              className="navbar__item"
              // borderBottom={currentHash === item.href ? "1px solid" : "none"}
              // borderBottomColor={
              //   currentHash === item.href
              //     ? "default.titleDark"
              //     : "default.title"
              // }
              // color={
              //   currentHash === item.href
              //     ? "default.titleDark"
              //     : "default.title"
              // }
              // opacity={currentHash === item.href ? 1 : 0.7}
              color="default.title"
              _hover={{
                color: "default.titleDark",
                opacity: 1,
                borderBottom: "1px solid",
                borderBottomColor: "default.titleDark",
              }}
              height="40px"
              transition={"all 0.1s"}
            >
              {item.name}
            </Center>
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
