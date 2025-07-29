import { Box, Circle, Divider, Stack, Text } from "@chakra-ui/react";
import { FC, Fragment, HTMLAttributes } from "react";

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {}

export const Timeline: FC<TimelineProps> = ({ className = "", ...props }) => {
  const arr = [
    {
      title: "Frontend Software Engineer",
      subtitle: "EVE HUMAN RESOURCES COMPANY LIMITED",
      time: "2022 - Present",
    },
    {
      title: "Fresher Frontend Software Engineer",
      subtitle: "EVE HUMAN RESOURCES COMPANY LIMITED",
      time: "2020 - 2022",
    },
    {
      title: "Freelance Frontend Software Engineer",
      subtitle: "JOBHOPIN",
      time: "2021 - 2022",
    },
    {
      title: "General Accountant",
      subtitle: "ITL, FRAM^ & Other companies",
      time: "2017 - 2020",
    },
  ];

  const renderTimeline = () => {
    return arr.map((item, index) => {
      return (
        <Fragment key={index}>
          <Box position="relative">
            <Circle bg="gray.700" size="15px" />
            <Box
              position="absolute"
              top="-6px"
              width={{ base: "150px", sm: "280px", md: "350px" }}
              {...(index % 2 === 0
                ? {
                    right: "30px",
                    textAlign: "right",
                  }
                : { left: "30px", textAlign: "left" })}
            >
              <Text
                color="default.titleDark"
                fontSize={{ base: "sm", sm: "lg", md: "xl" }}
                fontWeight="medium"
                lineHeight={{ base: 4, sm: 6, md: 7 }}
              >
                {item.title}
              </Text>
              <Text
                color="default.text"
                fontSize={{ base: "2xs", sm: "sm", md: "md" }}
                lineHeight={{ base: 4, sm: 6, md: 7 }}
                marginTop="5px"
              >
                {item.subtitle}
              </Text>
              <Text
                color="default.text"
                fontSize={{ base: "2xs", sm: "sm", md: "md" }}
                marginTop="10px"
              >
                {item.time}
              </Text>
            </Box>
          </Box>

          {index < arr.length - 1 && (
            <Divider
              bg="gray.700"
              orientation="vertical"
              width="2px"
              height="100px"
            />
          )}
        </Fragment>
      );
    });
  };

  return (
    <Stack
      className={`timeline ${className}`}
      gap={0}
      alignItems="center"
      padding="50px 0 100px"
      {...props}
    >
      {renderTimeline()}
    </Stack>
  );
};
