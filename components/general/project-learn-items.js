import {
  Box,
  Text,
  Heading,
  Icon,
  HStack,
  Flex,
  VStack,
  Center,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import { useUserInfo } from "../../context/user-context";
import { BsListUl } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiOpenBook } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
function Item({ id, nameItem, description, num, type, item }) {
  const router = useRouter();
  const { setItemSelected, setModalStep } = useUserInfo();
  return (
    <Box
      shadow="md"
      bgColor={"rgba(196,196,196,0.2)"}
      position={"relative"}
      borderRadius={"md"}
      fontFamily={"inter"}
      mt={5}
      height={"80px"}
      as={"button"}
      w={"100%"}
      onClick={() => {
        if (item.imgLink) {
          setItemSelected(item);
          router.push("/profile/Browser/");
        }
      }}
    >
      <Flex align={"center"} height={"100%"}>
        <HStack justify={"flex-start"} w={"100%"}>
          <Center
            border={"solid 1px cyan"}
            borderRadius={"md"}
            boxSize={10}
            m={3}
          >
            <Icon
              as={type === "Learn" ? GiOpenBook : AiFillThunderbolt}
              w={6}
              h={6}
            ></Icon>
          </Center>
          <VStack direction={"column"} spacing={0} justify={"flex-start"}>
            <Text
              fontSize="13"
              fontFamily={"inter"}
              color={"whiteAlpha.800"}
              fontWeight={"bold"}
              align={"start"}
              w={"100%"}
            >
              {nameItem}
            </Text>
            <Text fontSize={"12"}>{description}</Text>

            <HStack
              mt={2}
              color={"whiteAlpha.800"}
              justify={"flex-start"}
              w={"100%"}
            >
              <Icon as={BsListUl}></Icon>
              <Text fontSize={"12"}>{num}</Text>
            </HStack>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
}

export default function Items({ itemList }) {
  return (
    <>
      {itemList
        ? itemList.map((item) => {
            return (
              <Item
                key={item.id}
                nameItem={item.nameItem}
                description={item.description}
                num={item.num}
                type={item.type}
                item={item}
              ></Item>
            );
          })
        : null}
    </>
  );
}
