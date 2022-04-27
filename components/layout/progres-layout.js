import {
  Box,
  Image,
  Container,
  Flex,
  HStack,
  IconButton,
} from "@chakra-ui/react";

import { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useUserInfo } from "../../context/user-context";
import { Progress } from "antd";
import { useRouter } from "next/router";

const ProgressLayout = ({ children }) => {
  const { progress } = useUserInfo();
  const router = useRouter();

  return (
    <Box
      maxW={{ md: "390px" }}
      maxH={{ md: "844px" }}
      height={{ base: "100vh" }}
      mt={{ base: 0, sm: 10, md: 20 }}
      borderRadius={{ base: "none", sm: "md" }}
      bgImage={"url('/images/general/background.png')"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize={"cover"}
      w={"100%"}
      position={"relative"}
    >
      <Box position={"absolute"} top={8} left={5} zIndex={6}>
        <IconButton
          variant={"ghost"}
          aria-label={"back"}
          onClick={() => router.back()}
          icon={<ArrowBackIcon boxSize={"27px"} />}
        />
      </Box>

      <HStack h={"12%"} w={"100%"} bgColor="#222021" px={"19%"}>
        <Progress
          showInfo={false}
          strokeColor={{
            "0%": "#4b0da9",
            "100%": "#fd9193",
          }}
          trailColor={"#535152"}
          percent={progress}
        />
      </HStack>
      {/*  <Header /> */}
      <Image
        src={"/images/general/cover.png"}
        position={"absolute"}
        objectFit="cover"
        alt="cover"
        w={"100%"}
        height={"100%"}
        zIndex={5}
        top={0}
      ></Image>
      <Box position={"absolute"} top={0} w={"100%"}>
        {" "}
        {children}
      </Box>

      {/*  <Footer /> */}
    </Box>
  );
};

export default ProgressLayout;
