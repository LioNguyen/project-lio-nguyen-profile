import { useDevice } from "@/hooks";
import {
  Container,
  ContainerProps,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { ImFacebook2, ImInstagram } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";

export interface FooterProps extends ContainerProps {}

export const Footer: FC<FooterProps> = (props) => {
  const { isMobile } = useDevice();

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Qualification",
      href: "#qualification",
    },
  ];

  const socialItems = [
    {
      name: "LinkedIn",
      icon: <SiLinkedin size={isMobile ? 20 : 25} />,
      href: "https://www.linkedin.com/in/lio-nguyen/",
    },
    {
      name: "Facebook",
      icon: <ImFacebook2 size={isMobile ? 20 : 25} />,
      href: "https://www.facebook.com/nghinguyen9994",
    },
    {
      name: "Instagram",
      icon: <ImInstagram size={isMobile ? 20 : 25} />,
      href: "https://www.instagram.com/nguyenthanhnghi9994/",
    },
  ];

  return (
    <Container id="footer" variant="footer" {...props}>
      <Stack alignItems="center" gap="20px">
        <Text variant="title">Lio</Text>
        <HStack gap="20px">
          {navItems.map((item) => (
            <Text key={item.name} as="a" href={item.href}>
              {item.name}
            </Text>
          ))}
        </HStack>
        <HStack gap="20px">
          {socialItems.map((item) => (
            <Link
              key={item.name}
              as="a"
              href={item.href}
              isExternal
              aria-label={item.name}
            >
              {item.icon}
            </Link>
          ))}
        </HStack>
        <Text
          marginTop="30px"
          textAlign="center"
          fontSize={{ base: "sm", sm: "md" }}
          width={{ base: "50%", sm: "100%" }}
        >
          Copyright © {new Date().getFullYear()} by Lio Nguyen. All rights
          reserved.
        </Text>
      </Stack>
    </Container>
  );
};
