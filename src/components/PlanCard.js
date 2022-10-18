import { Avatar, Box, Tag, Text } from "@chakra-ui/react";

const PlanCard = ({ schedule, colors }) => {
  return (
    <Box
      bg={colors.bg}
      overflow={"hidden"}
      rounded={"md"}
      mr={"1.5"}
      mb={"1.5"}
      p={"2"}
      minW={"360px"}
      cursor={"pointer"}
      h="20"
      display={"flex"}
    >
      <Avatar
        src="#!"
        name="Dan Abrahmov"
        bg={colors.color}
        color={"white"}
        size={"sm"}
        mr={"4"}
      />
      <Box display={"flex"} flexDirection="column" mr={"6"}>
        <Text fontSize={"md"} color={colors.color}>
          {schedule?.title}
        </Text>
        <Text fontSize={"sm"} color={colors.color}>
          {schedule?.subtitle}
        </Text>
        <Text fontSize={"sm"} color={colors.color}>
          {schedule?.start_time} - {schedule?.end_time}
        </Text>
      </Box>
      <Tag bg={"white"} h="4" w="auto" color={colors.color}>
        {schedule?.location}
      </Tag>
    </Box>
  );
};

export default PlanCard;
