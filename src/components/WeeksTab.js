import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { colors } from "../helpers/colors";
import { CircleIcon } from "./Icon";

const WeeksTab = ({ week }) => {
  return (
    <Tabs rounded={"md"} variant="soft-rounded">
      <TabList
        borderBottom={"1px solid"}
        borderColor={"gray.100"}
        display="flex"
        flexDirection={"column"}
        alignItems={"flex-start"}
      >
        <Box
          fontSize={"xl"}
          bg={"gray.100"}
          rounded={"md"}
          m={"1"}
          w="32"
          h="20"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor={"pointer"}
        >
          <CalendarIcon w="6" h="6" color="gray.500" />
        </Box>
        {week?.map((weekday, i) => (
          <Tab
            key={i}
            fontSize={"md"}
            _selected={{
              color: "white",
              bg: colors["dark-brown"],
              borderRadius: "md",
            }}
            _focus={{
              boxShadow: "none",
            }}
            bg={"gray.100"}
            color={colors["dark-brown"]}
            rounded={"md"}
            w="32"
            mx={"1"}
            mb={"1"}
            h="20"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {weekday?.day} {weekday?.date}
            <CircleIcon boxSize={3} bg="white" rounded="full" />
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

export default WeeksTab;
