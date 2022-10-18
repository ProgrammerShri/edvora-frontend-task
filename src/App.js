/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import moment from "moment";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import WeeksTab from "./components/WeeksTab";
import PlanCard from "./components/PlanCard";
import { colors } from "./helpers/colors";
import TimelineContainer from "./components/TimelineContainer";
import { data } from "./helpers/data";

const App = () => {
  return <AppBox />;
};

export default App;

const AppBox = () => {
  return (
    <div
      style={{
        backgroundColor: "#e5e5e5",
      }}
    >
      <Box
        rounded={"md"}
        py={"2"}
        px={"6"}
        // m={"4"}
        mt={"4"}
        mx={"4"}
        mb={"1"}
        bg={"white"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Text fontSize={"xl"} fontWeight={"bold"} color={colors["dark-brown"]}>
          January 2021
        </Text>

        <Wrap spacing={2}>
          <WrapItem bg={"gray.100"} p="2" cursor={"pointer"} rounded={"lg"}>
            <ChevronLeftIcon w="4" h="4" />
          </WrapItem>
          <WrapItem bg={"gray.100"} p="2" cursor={"pointer"} rounded={"lg"}>
            <ChevronRightIcon w="4" h="4" />
          </WrapItem>
        </Wrap>
      </Box>
      <Body />
    </div>
  );
};

const Body = () => {
  const [week, setWeek] = React.useState([]);

  function getCurrentWeek() {
    var currentDate = moment();
    let week = [];

    if (week.length !== 7) {
      for (var i = 1; i <= 7; i++) {
        week.push({
          day: currentDate.format("ddd"),
          date: currentDate.format("DD"),
          dateObj: currentDate.format("ddd MMM DD YYYY"),
        });
        currentDate = currentDate.add(1, "days");
      }
    }
    setWeek(week);
  }

  useEffect(() => {
    getCurrentWeek();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "#e5e5e5",
      }}
    >
      <Box bg="#e5e5e5" w="full" mx="4" rounded={"md"} display="flex">
        <Box rounded={"md"} mr="1" bg="white">
          <WeeksTab week={week} />
        </Box>

        <Box rounded={"md"} bg="white" w={"full"}>
          <Box
            w="full"
            h="20"
            mb="2"
            borderBottom="1px solid #e5e5e5"
            style={{
              overflowX: "scroll",
              overflowY: "hidden",
            }}
          >
            <TimelineContainer />
          </Box>

          {week?.map((day, index) =>
            data?.map((item, idx) => {
              return (
                <Box
                  key={index}
                  rounded={"md"}
                  w={1320}
                  h="auto"
                  display={"flex"}
                  style={{
                    overflowX: "scroll",
                    overflowY: "hidden",
                  }}
                >
                  {item?.scheduled?.map((schedule, i) => {
                    if (item?.date === day?.dateObj) {
                      return (
                        <PlanCard
                          key={i}
                          schedule={schedule}
                          colors={{
                            color: schedule?.color,
                            bg: schedule?.background,
                          }}
                        />
                      );
                    }
                  })}
                </Box>
              );
            })
          )}
        </Box>
      </Box>
    </div>
  );
};
