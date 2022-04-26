import Illustration from "../../components/ilustrations/illustration";

import "@fontsource/kanit/500.css";
import "@fontsource/kanit/400.css";

import "@fontsource/roboto-condensed";
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
  GridItem,
  Link,
  Progress,
  Circle,
  Center,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import ButtonGradient from "../../components/general/gradient-button";

export default function BasicInfo() {
  const router = useRouter();
  /* setTimeout(() => {
    router.push("/minting-skills/personal-info");
  }, 2000); */

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
        height={{ base: "100vh" /* , md: "100vh"  */ }}
        gap={0}
      >
        <GridItem
          rowSpan={{ base: 2 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 7 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 5 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
        >
          <Image
            src="/images/general/logo-white.png"
            alt={"logotype"}
            objectFit={"cover"}
            width={"100%"}
            minHeight={"80%"}
          ></Image>
        </GridItem>

        <GridItem
          rowSpan={{ base: 20 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 24 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 1 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 28 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
          bgGradient="linear(to-r, #421c5f, #286486)"
          zIndex={6}
        ></GridItem>
        <GridItem
          rowSpan={{ base: 4 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 5 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 11 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 20 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
          zIndex={7}
        >
          {" "}
          <Circle size="75px" bg={"white"}>
            {" "}
            <Image
              src="/images/video/playButton.png"
              alt={"stripes"}
              objectFit={"cover"}
              width={"30%"}
              minHeight={"30%"}
            ></Image>
          </Circle>
        </GridItem>
        <GridItem
          rowSpan={{ base: 5 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 20 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 31 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          zIndex={8}
        >
          {" "}
          <Image
            src="/images/video/controls.png"
            alt={"stripes"}
            width={"100%"}
            minHeight={"40%"}
            pt={2}
          ></Image>
        </GridItem>

        <GridItem
          rowSpan={{ base: 7 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 18 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 40 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
        >
          <Box>
            {" "}
            <Heading
              fontWeight={"600"}
              fontSize={{ base: "30", sm: "60", md: "6xl" }}
              lineHeight="107%"
              textAlign={"left"}
            >
              Get to know Grey
            </Heading>
            <Text
              color="gray.500"
              textAlign={"left"}
              fontFamily={"Roboto Condensed"}
              fontSize={17}
              pt={2}
            >
              Learn how Grey works to increase your professional reputation and
              verifies the ownership, management and growth of your skills.
            </Text>
          </Box>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 46 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
          zIndex={7}
        >
          <Box>
            <ButtonGradient
              label={"Let's Get Started"}
              size="lg"
              onClick={() => {
                router.push("/minting-skills/connect");
                console.log("hola mundo");
              }}
            />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
