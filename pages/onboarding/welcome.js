import Illustration from "../../components/ilustrations/illustration";

import "@fontsource/kanit/500.css";

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
  Progress,
  Center,
} from "@chakra-ui/react";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/onboarding/basic-info-v");
    }, 2000);
  });

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
          rowSpan={{ base: 1 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 24 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 1 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 2 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          zIndex={10}
        >
          <Progress colorScheme="cyan" size="xs" isIndeterminate />
        </GridItem>

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
          rowSpan={{ base: 12 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 24 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 49 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 1 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Image
            src="/images/welcome/hero-bg.png"
            alt={"stripes"}
            objectFit={"cover"}
            width={"100%"}
            minHeight={"100%"}
          ></Image>
        </GridItem>
        <GridItem
          rowSpan={{ base: 13 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 18 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 25 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Heading
            fontWeight={"600"}
            fontSize={{ base: "46", sm: "55", md: "6xl" }}
            lineHeight="107%"
            textAlign={"left"}
            color={"white"}
          >
            Professional Growth Redefined
          </Heading>
          <Text color="gray.500" textAlign={"left"} fontSize={19} pt={4}>
            With Grey Skills Protocol
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}
