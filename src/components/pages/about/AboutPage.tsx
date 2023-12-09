import ProfileImage_2 from "@/assets/images/profile_2.jpeg";
import { CV_URL, PROFILE_URL } from "@/constants";
import { Box, Button, Container, Image, Stack, Text } from "@chakra-ui/react";
import { Utils } from "react-minimist-utils";
import { FC, HTMLAttributes } from "react";
import { CgFileDocument } from "react-icons/cg";
import { PiConfetti, PiMedal } from "react-icons/pi";

interface AboutPageProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutPage: FC<AboutPageProps> = (props) => {
  return (
    <Container id="about" variant="pageLayout" {...props}>
      {/* Content section */}
      <Stack className="about__content" height="100%" textAlign="center">
        {/* START: Header */}
        <Text variant="title">About Me</Text>
        <Text variant="subtitle">My Introduction</Text>
        {/* END: Header */}

        {/* START: Body */}
        <Stack
          flex={1}
          justifyContent={{ base: "flex-start", md: "center" }}
          marginTop="20px"
        >
          <Stack
            gap={6}
            height={{ base: "fit-content" }}
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={{ base: "flex-start", md: "space-around" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Box flex={{ base: "none", md: 1 }}>
              <Image
                src={ProfileImage_2}
                alt="My Profile"
                boxSize={{ base: "100%", md: "400px" }}
                borderRadius={8}
                objectFit="cover"
                maxH={{ base: "300px", md: "100%" }}
              />
            </Box>

            <Stack
              flex={{ base: "none", md: 1 }}
              justifyContent={{ base: "flex-start", md: "space-between" }}
              alignItems={{ base: "center", md: "unset" }}
              gap={{ base: 5, md: "none" }}
              height="100%"
            >
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Box
                  flex={1}
                  borderRadius={4}
                  border="1px"
                  borderColor="default.text"
                  padding="20px 0"
                >
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <PiMedal size={25} />
                    <Text
                      color="default.title"
                      fontSize={{ base: "sm", sm: "md", md: "lg" }}
                      fontWeight="medium"
                    >
                      Experience
                    </Text>
                    <Text
                      color="default.text"
                      fontSize={{ base: "xs", sm: "sm", md: "md" }}
                    >
                      2+ Years
                    </Text>
                  </Stack>
                </Box>
                <Box
                  flex={1}
                  borderRadius={4}
                  border="1px"
                  borderColor="default.text"
                  padding="20px 0"
                >
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <PiConfetti size={25} />
                    <Text
                      color="default.title"
                      fontSize={{ base: "sm", sm: "md", md: "lg" }}
                      fontWeight="medium"
                    >
                      Completed
                    </Text>
                    <Text
                      color="default.text"
                      fontSize={{ base: "xs", sm: "sm", md: "md" }}
                    >
                      10+ Projects
                    </Text>
                  </Stack>
                </Box>
              </Stack>
              <Text
                color="default.text"
                fontSize={{ base: "md", sm: "lg", md: "xl" }}
              >
                With a keen eye for design and a mastery of HTML, CSS, and
                JavaScript, I specialize in transforming concepts into
                responsive, interactive, and pixel-perfect websites and
                applications.
                <br />
                <br />I am a self-motivated, hard-working, and goal-oriented
                individual who enjoys working in a team environment. I am a fast
                learner and I am always looking for new challenges.
              </Text>
              <Button
                onClick={() => Utils.Data.downloadFile(CV_URL)}
                rightIcon={<CgFileDocument color="white" size={25} />}
                transform={{ base: "scale(0.8)", sm: "none" }}
                transformOrigin="center"
                width="50%"
              >
                Download CV
              </Button>
            </Stack>
          </Stack>
        </Stack>
        {/* END: Body */}
      </Stack>
    </Container>
  );
};
