import { useDevice } from "@/hooks";
import { Link, Stack, StackProps } from "@chakra-ui/react";
import { FC } from "react";
import { CgNpm } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export interface SocialWidgetProps extends StackProps {}

export const SocialWidget: FC<SocialWidgetProps> = (props) => {
  const { isMobile } = useDevice();

  const socialItems = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={isMobile ? 20 : 25} />,
      href: "https://www.linkedin.com/in/lio-nguyen/",
    },
    {
      name: "Github",
      icon: <FiGithub size={isMobile ? 20 : 25} />,
      href: "https://github.com/LioNguyen",
    },
    {
      name: "Npm",
      icon: <CgNpm size={isMobile ? 20 : 25} />,
      href: "https://www.npmjs.com/~lionguyen",
    },
  ];

  return (
    <Stack
      id="social-widget"
      justifyContent="center"
      gap="30px"
      position="absolute"
      left={0}
      top={0}
      bottom={{ base: "70%", sm: 0 }}
      {...props}
    >
      {socialItems.map((item) => (
        <Link
          key={item.name}
          className="social-widget__item"
          href={item.href}
          isExternal
          aria-label={item.name}
        >
          {item.icon}
        </Link>
      ))}
    </Stack>
  );
};
