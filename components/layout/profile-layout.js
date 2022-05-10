import {
  Box,
  Image,
  Container,
  Spacer,
  Flex,
  HStack,
  IconButton,
  Grid,
  GridItem,
  Button,
  Center,
} from "@chakra-ui/react";

import { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useUserInfo } from "../../context/user-context";
import { Progress } from "antd";
import { useRouter } from "next/router";

const ProfileLayout = ({ children }) => {
  const { progress } = useUserInfo();
  const router = useRouter();

  return (
    <Flex h={"100%"} w={"100%"} justify={"center"} align={"center"}>
      <Box
        minW={{ base: "100%", md: "360px" }}
        maxW={{ md: "360px" }}
        maxH={{ md: "760px" }}
        height={{ base: "100vh", md: "760px" }}
        mt={{ base: 0, sm: 10, md: 20 }}
        borderRadius={{ base: "none", sm: "xl" }}
        bgImage={"url('/images/general/background.png')"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgSize={"cover"}
        className={"main-Lay-progress"}
        position={"relative"}
        mb={{ base: "0", md: "0" }}
        boxShadow={"0px 0px 20px -12px rgba(255,255,255,1)"}
      >
        {/*  <Header /> */}
        {/*   <Image
          src={"/images/general/cover.png"}
          position={"absolute"}
          objectFit="cover"
          alt="cover"
          w={"100%"}
          height={"100%"}
          zIndex={5}
          top={0}
        ></Image> */}
        {children}

        {/*  <Footer /> */}
      </Box>
    </Flex>
  );
};

export default ProfileLayout;
