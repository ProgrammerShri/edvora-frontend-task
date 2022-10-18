import { Box, Text } from "@chakra-ui/react";

const TimelineContainer = () => {
  const times = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];
  return (
    <Box display={"flex"} w={900}>
      {times.map((time) => {
        return <TimelineCard time={time} />;
      })}
    </Box>
  );
};

export default TimelineContainer;

const TimelineCard = ({ time }) => {
  return (
    <div>
      <Box
        rounded={"md"}
        mr={"1.5"}
        mb={"1.5"}
        p={"2"}
        h="20"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text
          fontSize={"md"}
          style={{
            width: "80px",
          }}
        >
          {time}
        </Text>
        <Text
          fontSize={"md"}
          style={{
            width: "80px",
          }}
        >
          ╵
        </Text>
        <Text
          fontSize={"md"}
          style={{
            width: "80px",
          }}
        >
          │
        </Text>
        <Text
          fontSize={"md"}
          style={{
            width: "80px",
          }}
        >
          ╵
        </Text>
      </Box>
    </div>
  );
};
