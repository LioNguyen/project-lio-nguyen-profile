import { SkillsBox } from "@/components";
import { Container, Stack, Text } from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";

interface SkillsPageProps extends HTMLAttributes<HTMLDivElement> {}

export const SkillsPage: FC<SkillsPageProps> = ({ children, ...props }) => {
  const frontendData = [
    {
      name: "HTML/CSS",
      rate: 9,
    },
    {
      name: "ReactJS",
      rate: 9,
    },
    {
      name: "React Native",
      rate: 5,
    },
    {
      name: "Typescript",
      rate: 8,
    },
    {
      name: "Javascript",
      rate: 8,
    },
    {
      name: "Ionic",
      rate: 6,
    },
    {
      name: "NextJS",
      rate: 4,
    },
    {
      name: "Storybook",
      rate: 7,
    },
    {
      name: "Playwright",
      rate: 3,
    },
  ];
  const backendData = [
    {
      name: "SQL",
      rate: 2,
    },
    {
      name: "NodeJS",
      rate: 3,
    },
  ];

  return (
    <Container id="skills" variant="pageLayout" {...props}>
      {/* Content section */}
      <Stack className="skills__content" height={"100%"} textAlign="center">
        {/* START: Header */}
        <Text variant="title">My Skills</Text>
        <Text variant="subtitle">My technical level</Text>
        {/* END: Header */}

        {/* START: Body */}
        <Stack
          flex={1}
          justifyContent={{ base: "flex-start", md: "center" }}
          marginTop="20px"
        >
          <Stack
            gap={6}
            height={{ base: "fit-content", md: "400px" }}
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={{ base: "flex-start", md: "space-around" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <SkillsBox boxTitle="Frontend" data={frontendData} />
            <SkillsBox boxTitle="Backend" data={backendData} />
          </Stack>
        </Stack>
        {/* END: Body */}
      </Stack>
    </Container>
  );
};
