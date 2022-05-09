import Illustration from "../../components/ilustrations/illustration";

import "@fontsource/kanit/500.css";
import "@fontsource/kanit/400.css";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Box,
  Button,
  Image,
  Grid,
  Circle,
  GridItem,
  Link,
  Progress,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Lottie from "react-lottie";

import { useEffect } from "react";
import animationData from "../../public/lottie/minting.json";
import futuristicLoader from "../../public/lottie/95274-futuristic-loader.json";

export default function Minting() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/processing-skills/minting-suc");
    }, 7000);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: futuristicLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Grid
        templateRows={{
          base: "repeat(48, 1fr)" /* ,
    md: "repeat(24, 1fr)",
    lg: "repeat(48, 1fr)", */,
        }}
        templateColumns={{
          base: "repeat(24, 1fr)" /* ,
    md: "repeat(20, 1fr)",
    lg: "repeat(48, 1fr)", */,
        }}
        height={{ base: "100%", md: "100%" }}
        width={"100%"}
        gap={0}
      >
        <GridItem
          rowSpan={{ base: 3 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 20 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 9 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          align={"center"}
          justify={"center"}
        >
          {" "}
          <Heading
            fontSize={{
              base: "2xl",
              md: "xl",
            }}
            color={"white"}
            fontWeight={"normal"}
            width={"100%"}
          >
            Minting your Skill
          </Heading>
        </GridItem>
        <GridItem
          rowSpan={{ base: 16 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 16 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 5 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 26 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
          zIndex={8}
        >
          <Lottie options={defaultOptions} height={220} width={220} />
        </GridItem>
        <GridItem
          rowSpan={{ base: 20 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 20 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 28 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
          zIndex={7}
        >
          <Lottie options={defaultOptions2} height={300} width={300} />
        </GridItem>

        <GridItem
          rowSpan={{ base: 2 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 2 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 31 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 7 /* , md: 2, lg: 3 */ }}
        >
          <Center>
            <Circle size="22px" bg="#ff9393" />
          </Center>
        </GridItem>
        <GridItem
          rowSpan={{ base: 2 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 2 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 36 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 7 /* , md: 2, lg: 3 */ }}
        >
          <Center>
            <Circle size="22px" bg="#ff9393" />
          </Center>
        </GridItem>
        <GridItem
          rowSpan={{ base: 2 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 2 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 40 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 7 /* , md: 2, lg: 3 */ }}
        >
          <Center>
            <Circle size="22px" bg="#ff9393" />
          </Center>
        </GridItem>

        <GridItem
          rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 17 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 33 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 6 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Text
            color={"whiteAlpha.800"}
            textAlign={"left"}
            fontWeight={"regular"}
            fontFamily={"Roboto"}
            fontSize="13"
          >
            Mint, add and own your skills as dynamic NFTs that grow with
            reputational value stored on the blockchain.
          </Text>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 17 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 37 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 6 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Text
            color={"whiteAlpha.800"}
            textAlign={"left"}
            fontWeight={"regular"}
            fontFamily={"Roboto"}
            fontSize="13"
          >
            Apply your skills through new projects or make your own to attract
            verified talent.
          </Text>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 17 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 41 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 6 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Text
            color={"whiteAlpha.800"}
            textAlign={"left"}
            fontWeight={"regular"}
            fontFamily={"Roboto"}
            fontSize="13"
          >
            Access and create professional learning experiences to enhance and
            grow current and new skills.
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}
