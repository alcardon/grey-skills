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

const ProgressLayout = ({ children }) => {
  const { progress } = useUserInfo();
  const router = useRouter();

  return (
    <Flex h={"100%"} w={"100%"} justify={"center"} align={"center"}>
      <Box
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
        <Box>
          <Flex
            bgColor="#222021"
            h={{ base: "10vh", md: "100px" }}
            w={"100%"}
            px={"6%"}
            zIndex={7}
            top={0}
            position={"relative"}
            borderTopRadius={{ base: "none", md: "xl" }}
          >
            <Image
              src={"/images/general/mobile-navbar.png"}
              position={"absolute"}
              w={"100%"}
              top={0}
              left={0}
              height={"40px"}
              zIndex={8}
              alt={"mobile battery"}
              display={{ base: "none", md: "inline-block" }}
            ></Image>
            <Grid
              templateRows="repeat(5, 1fr)"
              templateColumns="repeat(12, 1fr)"
              gap={0}
              zIndex={7}
              w={"100%"}
              h={"100%"}
            >
              <GridItem
                rowSpan={1}
                colSpan={1}
                rowStart={{ base: "3", md: "4" }}
              >
                <Flex alignItems={"center"} h={"100%"}>
                  <IconButton
                    variant={"ghost"}
                    aria-label={"back"}
                    onClick={() => {
                      /* if (router.pathname.endsWith == "learning-work-exp") {
                        if (skillInfo.length >= 1) {
                          skillInfo.pop();
                        }
                      } */
                      router.back();
                    }}
                    icon={<ArrowBackIcon boxSize={"27px"} />}
                    zIndex={8}
                  />
                </Flex>
              </GridItem>
              <GridItem
                rowSpan={1}
                colSpan={8}
                colStart={3}
                rowStart={{ base: "3", md: "4" }}
              >
                <Flex alignItems={"center"} h={"100%"}>
                  <HStack width={"100%"}>
                    <Progress
                      showInfo={false}
                      strokeColor={{
                        "0%": "#4b0da9",
                        "100%": "#fd9193",
                      }}
                      trailColor={"#535152"}
                      percent={progress}
                      zIndex={8}
                    />
                  </HStack>
                </Flex>
              </GridItem>
            </Grid>
          </Flex>
        </Box>
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

export default ProgressLayout;
