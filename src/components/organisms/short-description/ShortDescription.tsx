import * as S from "./ShortDescription.styles";

import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";
import { CgFileDocument } from "react-icons/cg";
import { PiConfetti, PiMedal } from "react-icons/pi";
import { Utils } from "react-minimist-utils";

import ProfileImage_2 from "@/assets/images/profile_2.jpeg";
import { CustomButton, StatisticsBox } from "@/components";
import { CV_URL } from "@/constants";

interface ShortDescriptionProps extends HTMLAttributes<HTMLDivElement> {}

export const ShortDescription: FC<ShortDescriptionProps> = (props) => {
  const statisticsList = [
    {
      icon: PiMedal,
      title: "Experience",
      content: "3+ Years",
    },
    {
      icon: PiConfetti,
      title: "Completed",
      content: "5+ Projects",
    },
  ];

  return (
    <S.Wrapper id="short-description" variant="pageLayout" {...props}>
      {/* Content section */}
      <S.Content className="about__content" height="100%" textAlign="center">
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
            height={{ base: "fit-content" }}
            marginTop="20px"
            textAlign={{ base: "center", md: "left" }}
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={{ base: "flex-start", md: "space-around" }}
            gap={6}
          >
            <S.LeftSideContent flex={{ base: "none", md: 1 }}>
              <Image
                src={ProfileImage_2}
                alt="My Profile"
                boxSize={{ base: "100%", md: "400px" }}
                borderRadius={8}
                objectFit="cover"
                maxH={{ base: "300px", md: "100%" }}
              />
            </S.LeftSideContent>

            <S.RightSideContent
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
                {statisticsList.map((item) => (
                  <StatisticsBox
                    icon={item.icon}
                    title={item.title}
                    content={item.content}
                  />
                ))}
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
              <CustomButton
                onClick={() => Utils.Data.downloadFile(CV_URL)}
                rightIcon={<CgFileDocument color="white" size={25} />}
                transformOrigin="center"
                width="50%"
              >
                Download CV
              </CustomButton>
            </S.RightSideContent>
          </Stack>
        </Stack>
        {/* END: Body */}
      </S.Content>
    </S.Wrapper>
  );
};
