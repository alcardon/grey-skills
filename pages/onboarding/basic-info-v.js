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
  GridItem,
  Link,
  Progress,
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
          rowSpan={{ base: 7 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 19 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 15 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
        >
          <Box>
            {" "}
            <Heading
              fontWeight={"600"}
              fontSize={{ base: "32", sm: "60", md: "6xl" }}
              lineHeight="107%"
              textAlign={"left"}
              color={"white"}
            >
              Create your <br></br> Grey Skills Identity
            </Heading>
            <Text color="gray.500" textAlign={"left"} fontSize={16} pt={2}>
              Begin building your professional reputation and start owning your
              skills.
            </Text>
          </Box>
        </GridItem>
        <GridItem
          rowSpan={{ base: 2 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 19 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 18 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
        >
          <Box>
            <Heading
              lineHeight="107%"
              textAlign={"left"}
              fontWeight={"500"}
              fontSize={"sm"}
              color={"white"}
            >
              Your Grey Skills Identity will allow you to:
            </Heading>
          </Box>
        </GridItem>

        <GridItem
          rowSpan={{ base: 20 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 2 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 39 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Image
            src="/images/basic-info/points.png"
            alt="points"
            w="75%"
            h={"100%"}
          ></Image>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 18 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 22 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 5 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Text
            color={"white"}
            textAlign={"left"}
            fontWeight={"regular"}
            fontFamily={"Roboto"}
            fontSize="sm"
            noOfLines={2}
          >
            Mint, add and own your skills as dynamic NFTs that grow with
            reputational value stored on the blockchain.
          </Text>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 18 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 27 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 5 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Text
            color={"white"}
            textAlign={"left"}
            fontWeight={"regular"}
            fontFamily={"Roboto"}
            fontSize="sm"
          >
            Apply your skills through new projects or make your own to attract
            verified talent.
          </Text>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 18 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 31 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 5 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Text
            color={"white"}
            textAlign={"left"}
            fontWeight={"regular"}
            fontFamily={"Roboto"}
            fontSize="sm"
          >
            Access and create professional learning experiences to enhance and
            grow current and new skills.
          </Text>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 18 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 36 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 5 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Text
            color={"white"}
            textAlign={"left"}
            fontWeight={"regular"}
            fontFamily={"Roboto"}
            fontSize="sm"
          >
            Manage your skills growth, reputation, and opportunities through
            your Grey Skill Wallet.
          </Text>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 18 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 40 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 5 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Text
            textAlign={"left"}
            fontWeight={"regular"}
            fontFamily={"Roboto"}
            color={"white"}
            fontSize="sm"
          >
            Document verifiable skills and related experiences on a Digital
            Resume.
          </Text>
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
              label={"See what Grey can do"}
              size="lg"
              onClick={() => {
                router.push("/onboarding/video");
                console.log("hola mundo");
              }}
            />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
