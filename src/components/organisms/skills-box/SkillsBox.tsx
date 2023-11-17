import { Box, BoxProps, Circle, Flex, Spacer, Text } from "@chakra-ui/react";
import { Utils } from "minimist-react-library";
import { FC } from "react";

interface SkillsBoxProps extends BoxProps {
  boxTitle: string;
  data: any[];
}

export const SkillsBox: FC<SkillsBoxProps> = ({
  className = "",
  boxTitle,
  data,
  ...props
}) => {
  const { list: sortedList } = Utils.Array.sortList({
    list: data,
    field: "rate",
    sortType: "desc",
  });

  const renderRating = () => {
    return sortedList.map((item) => {
      return (
        <Flex key={item.name} alignItems="center" marginBottom="5px">
          <Text
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            fontWeight="medium"
          >
            {item.name}
          </Text>
          <Spacer />

          <Flex gap="5px">
            {new Array(10).fill("").map((_, dotIndex) => (
              <Circle
                size={{ base: "10px", sm: "15px" }}
                bg={dotIndex <= item.rate - 1 ? "gray.700" : "gray.300"}
              />
            ))}
          </Flex>
        </Flex>
      );
    });
  };

  return (
    <Box
      className={`skills-box ${className}`}
      border="1px"
      borderRadius="8px"
      flex={1}
      minWidth="300px"
      maxWidth="420px"
      padding="15px 30px"
      textAlign="center"
      width="100%"
      {...props}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="semibold"
        marginBottom="30px"
      >
        {boxTitle}
      </Text>

      {renderRating()}
    </Box>
  );
};
