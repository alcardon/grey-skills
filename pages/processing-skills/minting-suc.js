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
import BigAvatar from "../../components/general/big-Avatar";
import { useUserInfo } from "../../context/user-context";
import ButtonGradient from "../../components/general/gradient-button";

export default function MintingSuccesfull() {
  const { skillInfo } = useUserInfo();
  const router = useRouter();

  setTimeout(() => {
    router.push("/processing-skills/minting-suc");
  }, 5000);

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
          rowSpan={{ base: 7 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 20 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 11 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
        >
          <Box>
            {" "}
            <Heading
              fontSize={{
                base: "2xl",
                md: "xl",
              }}
              color={"white"}
              fontWeight={"normal"}
            >
              Minting your Skill
            </Heading>
          </Box>
        </GridItem>

        <GridItem
          rowSpan={{ base: 16 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 16 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 5 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 26 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          alignItems={"center"}
          justify={"center"}
          zIndex={7}
        >
          <BigAvatar skillName={skillInfo.skillName}></BigAvatar>
        </GridItem>

        <GridItem
          rowSpan={{ base: 7 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 20 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 3 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 34 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
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
            {skillInfo.skillName}
          </Heading>
        </GridItem>
        <GridItem
          rowSpan={{ base: 7 /* , md: 2, lg: 3, xl: 3, "2xl": 3 */ }}
          colSpan={{ base: 18 /*  md: 2, lg: 2, xl: 2, "2xl": 2 */ }}
          colStart={{ base: 4 /* , md: 2, lg: 4, xl: 4, "2xl": 4  */ }}
          rowEnd={{ base: 41 /* , md: 4, lg: 8, xl: 8, "2xl": 8 */ }}
          display={"flex"}
          align={"center"}
          justify={"center"}
        >
          {" "}
          <Heading
            fontSize={{
              base: "md",
              md: "md",
            }}
            color={"whiteAlpha.800"}
            fontWeight={"normal"}
            width={"100%"}
            lineHeight={1.5}
          >
            Congrats! You minted your first skill with Grey!
          </Heading>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
          colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
          rowEnd={{ base: 45 /* , md: 19, lg: 28 */ }}
          colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
          zIndex={7}
        >
          <Box>
            <ButtonGradient
              label={"Start your journey with Grey!"}
              size="md"
              onClick={() => {
                router.push("/profile/home");
              }}
            />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
