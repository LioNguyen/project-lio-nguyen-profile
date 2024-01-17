import { Box, BoxProps, Stack, Text } from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";
import { IconType } from "react-icons";

interface StatisticsBoxProps extends BoxProps {
  icon: IconType;
  title: string;
  content: string;
}

export const StatisticsBox: FC<StatisticsBoxProps> = ({
  className = "",
  icon: Icon,
  title,
  content,
  ...props
}) => {
  return (
    <Box
      className={`statistics-box ${className}`}
      flex={1}
      borderRadius={4}
      border="1px"
      borderColor="default.text"
      padding="20px 0"
      {...props}
    >
      <Stack alignItems="center" justifyContent="center" height="100%">
        <Icon size={25} />
        <Text
          color="default.title"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          fontWeight="medium"
        >
          {title}
        </Text>
        <Text
          color="default.text"
          fontSize={{ base: "xs", sm: "sm", md: "md" }}
        >
          {content}
        </Text>
      </Stack>
    </Box>
  );
};
