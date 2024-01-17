import * as S from "./Navbar.styles";

import { Center, ContainerProps, Flex, Icon, Spacer } from "@chakra-ui/react";
import { FC } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { PiHouse } from "react-icons/pi";
import { Hooks } from "react-minimist-utils";
import { useLocation, useNavigate } from "react-router-dom";

// import LogoLink from "@/assets/images/logo-lio-full-1800.png";
import { BottomNavbar } from "@/components";
import { navItems } from "@/constants";

interface NavbarProps extends ContainerProps {}

export const Navbar: FC<NavbarProps> = (props) => {
  const { useScrolling, useToggle } = Hooks;
  const [isShowBottomNavbar, toggleBottomNavbar] = useToggle(false);
  const isScrolling = useScrolling();
  const navigate = useNavigate();
  const location = useLocation();

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
        <S.HomeLogo
          className="navbar__left"
          cursor={"pointer"}
          onClick={() => navigate("/")}
        >
          <Icon as={PiHouse} boxSize={{ base: "20px", md: "25px" }} />
          {/* <Image
            src={LogoLink}
            alt="logo"
            width={{ base: "60px", sm: isScrolling ? "100px" : "250px" }}
          /> */}
        </S.HomeLogo>

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
              className="navbar__item"
              borderBottom={
                location.pathname === `${item.navigate}` ? "1px solid" : ""
              }
              borderBottomColor={
                location.pathname === `${item.navigate}`
                  ? "default.titleDark"
                  : ""
              }
              color="default.title"
              cursor={"pointer"}
              _hover={{
                color: "default.titleDark",
                opacity: 1,
                borderBottom: "1px solid",
                borderBottomColor: "default.titleDark",
              }}
              height="40px"
              transition={"all 0.1s"}
              onClick={() => navigate(`${item.navigate}`)}
            >
              {item.title}
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
