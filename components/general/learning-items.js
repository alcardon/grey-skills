import {
  Box,
  Text,
  Heading,
  IconButton,
  HStack,
  Flex,
  VStack,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import { useUserInfo } from "../../context/user-context";

import { useState, useEffect } from "react";

function Item({ id, nameLearn, initialDate, endDate, style }) {
  const { deleteLearnInfo } = useUserInfo();
  return (
    <Box
      shadow="md"
      bgColor={style === "black" ? "black" : "rgba(196,196,196,0.2)"}
      position={"relative"}
      borderRadius={"md"}
      fontFamily={"inter"}
      mt={5}
      height={"80px"}
    >
      <IconButton
        size={"md"}
        variant={"ghost"}
        color="white"
        aria-label="Delete Learning exp"
        icon={<CloseIcon boxSize={"3"} />}
        onClick={() => {
          deleteLearnInfo(id);
        }}
        position={"absolute"}
        top={0}
        right={0}
      />
      <Flex align={"center"} height={"100%"} p={4}>
        <VStack direction={"column"}>
          <Flex justify={"flex-start"} w={"100%"}>
            <Text
              fontSize="13"
              fontFamily={"inter"}
              color={"whiteAlpha.800"}
              fontWeight={"normal"}
            >
              {nameLearn}
            </Text>
          </Flex>

          <HStack
            mt={2}
            color={"whiteAlpha.800"}
            justify={"flex-start"}
            w={"100%"}
          >
            <Text fontSize={"12"}>{initialDate}</Text>{" "}
            <Text fontSize={"12"}> - {endDate}</Text>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default function LearningItems({ style }) {
  const { learnInfo } = useUserInfo();
  const [learnItems, setLearnItems] = useState(null);
  useEffect(() => {
    setLearnItems(learnInfo);
  }, [learnInfo]);

  return (
    <>
      {learnItems
        ? learnItems.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                nameLearn={item.nameLearn}
                initialDate={item.startDate}
                endDate={item.endDate}
                style={style}
              ></Item>
            );
          })
        : null}
    </>
  );
}
