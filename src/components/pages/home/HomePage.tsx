import ProfileImage_1 from "@/assets/images/profile_1.jpeg";
import { HAND_ICON_URL } from "@/constants";
import {
  Button,
  Center,
  Container,
  ContainerProps,
  Divider,
  Image,
  keyframes,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Hooks } from "react-minimist-utils";
import { FC, useState } from "react";
import { BiMouse } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa6";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { SocialWidget } from "@/components";

interface HomePageProps extends ContainerProps {}

const profileAnimate = keyframes`
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
`;

const profileAnimation = `${profileAnimate} 8s ease-in-out infinite alternate;`;

const downAnimate = keyframes`
    0% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(3px);
    }
`;

const arrowAnimation = `${downAnimate} 0.8s ease-in-out infinite alternate;`;

export const HomePage: FC<HomePageProps> = (props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { scrollTo } = Hooks.Window.useScrollTo();

  return (
    <Container
      id="home"
      variant="pageLayout"
      height={{ base: "unset", sm: "100vh" }}
      minH={{ base: "unset", sm: "700px" }}
      {...props}
    >
      {/* Content section */}
      <Stack
        className="home__content"
        height={"100%"}
        gap={6}
        position="relative"
        alignItems="center"
        flexDirection={{ base: "column-reverse", sm: "row" }}
        paddingLeft={{ base: 0, sm: 20 }}
      >
        <SocialWidget />
        {/* Left side */}
        <Stack
          className="home__left"
          flex={1}
          alignItems={"flex-start"}
          gap={5}
        >
          <Stack direction="row" width="100%" alignItems="center" gap={4}>
            <Text variant="title" whiteSpace="nowrap">
              Nghi Nguyen
            </Text>
            <Image src={HAND_ICON_URL} alt="hand-icon" />
          </Stack>

          <Stack direction="row" width="100%" alignItems="center" gap={4}>
            <Divider
              borderBottomWidth={2}
              display={{ base: "none", md: "block" }}
              width={{ base: 0, sm: "50px" }}
            />
            <Text
              variant="subtitle"
              color="default.titleDark"
              whiteSpace={{ base: "unset", md: "nowrap" }}
            >
              Frontend Software Engineer
            </Text>
          </Stack>
          <Text color="default.text" fontSize={{ base: "sm", sm: "md" }}>
            Coding is not just a skill. It's my avenue for expressing creativity
            and turning ideas into reality.
          </Text>

          <Button
            as="a"
            href="#about"
            marginTop={{ base: 5, sm: 10 }}
            rightIcon={<PiPaperPlaneTilt color="white" size={25} />}
            transform={{ base: "scale(0.8)", sm: "none" }}
            transformOrigin="left"
          >
            Say Hello
          </Button>
        </Stack>

        {/* Right side */}
        <Center className="home__right" flex={1}>
          <Image
            display={isImageLoaded ? "block" : "none"}
            onLoad={() => setIsImageLoaded(true)}
            animation={profileAnimation}
            boxSize={{ base: 150, sm: 320, md: 420 }}
            boxShadow="dark-lg"
            objectFit="cover"
            margin="auto"
            src={ProfileImage_1}
            fallbackSrc="https://via.placeholder.com/150"
            alt="My Profile"
            borderRadius="full"
          />
        </Center>
      </Stack>

      {/* Arrow down section */}
      <Stack
        as="button"
        display={{ base: "none", sm: "flex" }}
        flexDirection="row"
        alignItems="center"
        position="absolute"
        left={3}
        bottom={50}
        sx={{
          ".arrow-down": {
            animation: arrowAnimation,
          },
        }}
        onClick={() => scrollTo(window.innerHeight || 1000, 0)}
      >
        <BiMouse size={50} /> <Text>Scroll Down</Text>{" "}
        <FaArrowDown className="arrow-down" size={20} />
      </Stack>
    </Container>
  );
};
