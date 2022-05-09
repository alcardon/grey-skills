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
import ButtonGradient from "../../components/general/gradient-button";

export default function BasicInfo() {
  const router = useRouter();

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
          rowSpan={{ base: 7 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 20 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 16 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
        >
          <Box>
            {" "}
            <Heading
              fontSize={{ base: "28", md: "28" }}
              lineHeight="107%"
              textAlign={"left"}
              color={"white"}
              fontWeight={"semibold"}
            >
              Create your <br></br> Grey Skills Identity
            </Heading>
            <Text
              color="gray.500"
              textAlign={"left"}
              fontSize={16}
              pt={2}
              fontFamily={"kanit"}
            >
              Begin building your professional reputation and start owning your
              skills.
            </Text>
          </Box>
        </GridItem>
        <GridItem
          rowSpan={{ base: 2 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 19 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 20 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
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
          rowSpan={{ base: 17 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 2 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 38 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 7 /* , md: 2, lg: 3 */ }}
        >
          <Center h={"100%"}>
            <Image
              src="/images/basic-info/points.png"
              alt="points"
              w="10%"
              objectFit={"cover"}
              h={"100%"}
            ></Image>
          </Center>
        </GridItem>

        <GridItem
          rowSpan={{ base: 2 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 2 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 23 /* , md: 19, lg: 28 */ }}
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
          rowEnd={{ base: 27 /* , md: 19, lg: 28 */ }}
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
          rowEnd={{ base: 35 /* , md: 19, lg: 28 */ }}
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
          rowEnd={{ base: 39 /* , md: 19, lg: 28 */ }}
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
          rowEnd={{ base: 25 /* , md: 19, lg: 28 */ }}
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
          rowEnd={{ base: 28 /* , md: 19, lg: 28 */ }}
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
          rowEnd={{ base: 32 /* , md: 19, lg: 28 */ }}
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
        <GridItem
          rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 17 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 36 /* , md: 19, lg: 28 */ }}
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
            Manage your skills growth, reputation, and opportunities through
            your Grey Skill Wallet.
          </Text>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 17 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 40 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 6 /* , md: 1, lg: 1 */ }}
          zIndex={{ base: 3 /* , md: 2, lg: 3 */ }}
        >
          <Text
            textAlign={"left"}
            fontWeight={"regular"}
            fontFamily={"Roboto"}
            color={"whiteAlpha.800"}
            fontSize="13"
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
              size="md"
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
