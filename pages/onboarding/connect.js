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
import Connection from "../../components/integration/connection";

export default function BasicInfo() {
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
        height={{ base: "100%", md: "100%" }}
        width={"100%"}
        gap={0}
      >
        <GridItem
          rowSpan={{ base: 2 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 7 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 7 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
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
          rowSpan={{ base: 14 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 17 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colEnd={{ base: 27 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowStart={{ base: 3 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
          zIndex={5}
        >
          <Image
            src="/images/connect/polkadot.png"
            alt={"stripes"}
            objectFit={"cover"}
            width={"100%"}
            minHeight={"100%"}
          ></Image>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 13 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 22 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          zIndex={8}
        >
          {" "}
          <Image
            src="/images/connect/dot-logo.png"
            alt={"stripes"}
            width={"100%"}
            minHeight={"100%"}
            pt={2}
          ></Image>
        </GridItem>
        <GridItem
          rowSpan={{ base: 7 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 18 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 32 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
        >
          <Box>
            {" "}
            <Heading
              fontWeight={"600"}
              fontSize={{ base: "3xl", sm: "3xl", md: "3xl" }}
              lineHeight="107%"
              textAlign={"left"}
              color={"white"}
            >
              Connect your Polkadot JS Wallet
            </Heading>
            <Text color="gray.500" textAlign={"left"} fontSize={15} pt={6}>
              Begin building your professional reputation and start owning your
              skills.
            </Text>
          </Box>
        </GridItem>
        {Connection()}
      </Grid>
    </>
  );
}
