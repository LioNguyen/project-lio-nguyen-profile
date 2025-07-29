import * as S from "./Navbar.styles";

import { Center, ContainerProps, Flex, Spacer } from "@chakra-ui/react";
import { FC } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { PiHouse } from "react-icons/pi";
import { Hooks } from "react-minimist-utils";

// import LogoLink from "@/assets/images/logo-lio-full-1800.png";
import { BottomNavbar } from "@/components";
import { navItems } from "@/constants";

export interface NavbarProps extends ContainerProps {}

export const Navbar: FC<NavbarProps> = (props) => {
  const { useScrolling, useToggle } = Hooks;
  const [isShowBottomNavbar, toggleBottomNavbar] = useToggle(false);
  const isScrolling = useScrolling();

  // useEffect(() => {
  //   const currentHash = window.location.hash;
  //   const element = document.querySelector(currentHash);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);

  return (
    <S.Wrapper
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
          <PiHouse size={30} />
          {/* <Image
            src={LogoLink}
            alt="logo"
            width={{ base: "60px", sm: isScrolling ? "100px" : "250px" }}
          /> */}
        </Center>

        <Spacer className="navbar__spacer" />

        <S.NavbarMenu
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
        </S.NavbarMenu>

        <S.BottomNavbarMenuToggle
          as="button"
          display={{ base: "flex", sm: "none" }}
          onClick={toggleBottomNavbar}
        >
          <CgMenuMotion size={20} />
        </S.BottomNavbarMenuToggle>
      </Flex>

      <BottomNavbar
        display={{ base: "block", sm: "none" }}
        navItems={navItems}
        toggleModal={toggleBottomNavbar}
        transform={isShowBottomNavbar ? "translateY(0px)" : "translateY(200px)"}
      />
    </S.Wrapper>
  );
};
