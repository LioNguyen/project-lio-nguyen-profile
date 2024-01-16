import { Container, Stack, Text } from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";

interface ContactProps extends HTMLAttributes<HTMLDivElement> {}

export const Contact: FC<ContactProps> = (props) => {
  return (
    <Container id="contact" variant="pageLayout" {...props}>
      {/* Content section */}
      <Stack className="contact__content" height={"100%"} textAlign="center">
        {/* START: Header */}
        <Text variant="title">My Contact</Text>
        <Text variant="subtitle">My Introduction</Text>
        {/* END: Header */}
      </Stack>
    </Container>
  );
};
