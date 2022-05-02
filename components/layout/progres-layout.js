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
    <Container
      as={"body"}
      p={{ base: 0, md: 16 }}
      maxW={"sm"}
      maxH={{ sm: "844px" }}
      height={{ base: "100vh" }}
      borderRadius={{ base: "none", sm: "md" }}
      backgroundPosition="center"
      backgroundRepeat="repeat"
      bgSize={"cover"}
      width="100vw"
      bgImage={"url('/images/general/background.png')"}
      className={"main-Lay-progress"}
      fontFamily={"Kanit, sans-serif"}
    >
      <Box
        h={"100%"}
        position={"relative"}
        boxSizing="border-box"
        className="bigRelative"
      >
        <Flex
          alignItems={"center"}
          bgColor="#222021"
          h={"12%"}
          w={"100%"}
          px={"6%"}
          zIndex={8}
          top={0}
          position={"fixed"}
        >
          <Grid
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(12, 1fr)"
            gap={0}
            zIndex={8}
            w={"100%"}
          >
            <GridItem rowSpan={1} colSpan={1}>
              <IconButton
                variant={"ghost"}
                aria-label={"back"}
                onClick={() => router.back()}
                icon={<ArrowBackIcon boxSize={"27px"} />}
                zIndex={8}
              />
            </GridItem>
            <GridItem rowSpan={1} colSpan={8} colStart={3}>
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
        {children}

        {/*  <Footer /> */}
      </Box>
    </Container>
  );
};

export default ProgressLayout;
