import { Timeline } from "@/components";
import { Container, ContainerProps, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { RiGraduationCapLine } from "react-icons/ri";

interface QualificationPageProps extends ContainerProps {}

export const QualificationPage: FC<QualificationPageProps> = (props) => {
  return (
    <Container id="qualification" variant="pageLayout" {...props}>
      <Stack
        className="qualification__content"
        height={"100%"}
        textAlign="center"
      >
        {/* START: Header */}
        <Text variant="title">Qualification</Text>
        <Text variant="subtitle">My personal journey</Text>
        {/* END: Header */}

        {/* START: Body */}
        <Stack
          flex={1}
          justifyContent={{ base: "flex-start", md: "center" }}
          alignItems="center"
          marginTop="20px"
        >
          <Timeline />
        </Stack>
      </Stack>
    </Container>
  );
};
