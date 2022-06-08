import {
  Box,
  Heading,
  Grid,
  Center,
  GridItem,
  Text,
  Icon,
  Flex,
  Spacer,
  IconButton,
  Button,
  Image,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";

import { MdGraphicEq } from "react-icons/md";
import { AddIcon, SettingsIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";

import { BiRocket } from "react-icons/bi";
import NextLink from "next/link";

import { useUserInfo } from "../../context/user-context";
import { useEffect, useState, useRef } from "react";
import { chakraStyles } from "../../components/styles/react-select";
import LearningItems from "../../components/general/learning-items";
import WorkItems from "../../components/general/work-items";
import { Progress } from "antd";
import HomeAvatar from "../../components/general/home-avatar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiEdit3, FiUpload } from "react-icons/fi";

export default function Identity() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const { userInfo, skillInfo, industryInfo, GSLevel, setGSLevel } =
    useUserInfo();

  const router = useRouter();
  const initialRef = useRef();

  useEffect(() => {
    var result = 0;
    if (skillInfo !== []) {
      if (skillInfo.length === 1) {
        skillInfo.map((skill) => {
          result = skill.skillLevel;
        });
      } else if (skillInfo.length > 1) {
        console.log(skillInfo);
        skillInfo.map((skill) => {
          result += skill.skillLevel;
        });
        result /= skillInfo.length;
      }

      setGSLevel(result);
    }
  }, [skillInfo, GSLevel]);

  return (
    <>
      <GridItem gridArea={"Body"} colSpan={24} borderBottomRadius={"md"}>
        <Grid
          templateRows={{
            base: "40%  1fr",
            md: "40%  1fr",
          }}
          templateColumns="1fr"
          templateAreas={"'Head' 'Main'"}
          zIndex={8}
          w={"100%"}
          borderBottomRadius={"lg"}
          position={"relative"}
          h={"100%"}
        >
          <GridItem
            gridArea={"Head"}
            colSpan={24}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            bgSize={"cover"}
            bgImage={"url('/images/home/topbg.png')"}
            borderTopRadius={"md"}
          >
            <Grid
              templateRows={{
                base: "39% 22% 39%",
              }}
              templateColumns={{
                base: "repeat(1, 1fr)",
              }}
              gap={0}
              zIndex={8}
              w={"100%"}
              h={"100%"}
              alignItems={"center"}
            >
              <GridItem
                rowSpan={{ base: 1 }}
                colStart={{ base: 1 }}
                height={"100%"}
                width={"100%"}
              >
                {" "}
                <Flex
                  width={"100%"}
                  height={"100%"}
                  align={"flex-end"}
                  justifyContent={"space-between"}
                  borderTopRadius={"md"}
                >
                  <Image
                    src="/images/general/logo-white.png"
                    alt={"logotype"}
                    height={"23px"}
                    width={"150px"}
                    mb={2}
                  ></Image>
                  <IconButton
                    pr={"7"}
                    size={"lg"}
                    variant={"ghost"}
                    color="white"
                    aria-label="Add Work experiece"
                    icon={<SettingsIcon />}
                  />
                </Flex>
              </GridItem>
              <GridItem rowSpan={{ base: 1 }} zIndex={7} px={7}>
                <Grid
                  templateRows={{
                    base: "repeat(1, 1fr)",
                  }}
                  templateColumns={{
                    base: "80% 10% 10%",
                    md: "80% 10% 10%",
                  }}
                  zIndex={8}
                  w={"100%"}
                  h={"100%"}
                >
                  <GridItem
                    rowSpan={{ base: 1 }}
                    colSpan={{ base: 1 }}
                    colStart={{ base: 1 }}
                    zIndex={7}
                  >
                    {" "}
                    <Flex align={"center"} h={"100%"} justify={"flex-start"}>
                      {" "}
                      <Heading
                        verticalAlign="middle"
                        fontFamily={"kanit"}
                        fontWeight={"regular"}
                        fontSize={{ base: "2xl", md: "22" }}
                        color={"white"}
                      >
                        Your Skills Identity
                      </Heading>
                    </Flex>
                  </GridItem>
                  <GridItem
                    rowSpan={{ base: 1 }}
                    colSpan={{ base: 1 }}
                    colStart={{ base: 2 }}
                    zIndex={7}
                  >
                    <Flex align={"center"} h={"100%"} justify={"flex-start"}>
                      {" "}
                      <IconButton
                        size={"lg"}
                        variant={"ghost"}
                        color="white"
                        aria-label="Add Work experiece"
                        icon={<Icon as={FiEdit3} />}
                      />
                    </Flex>
                  </GridItem>
                  <GridItem
                    rowSpan={{ base: 1 }}
                    colSpan={{ base: 1 }}
                    colStart={{ base: 3 }}
                    zIndex={7}
                  >
                    <IconButton
                      size={"lg"}
                      variant={"ghost"}
                      color="white"
                      aria-label="Add Work experiece"
                      icon={<Icon as={FiUpload} />}
                    />
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem
                rowSpan={{ base: 1 }}
                colStart={{ base: 1 }}
                height={"100%"}
                width={"100%"}
              >
                {" "}
                <HStack px={7} height={"100%"} pb={"10px"}>
                  <Flex h={"100%"} align={"center"}>
                    {" "}
                    <Image
                      src={"/images/home/avatar.png"}
                      alt={"avatar"}
                      w={"60px"}
                      h={"60px"}
                    ></Image>
                  </Flex>
                  <Flex
                    align={"flex-start"}
                    justify={"flex-start"}
                    direction={"column"}
                    pl={4}
                    py={1}
                  >
                    <Heading
                      color={"white"}
                      fontSize={{ base: "lg", md: "lg" }}
                      fontWeight={"normal"}
                    >
                      {userInfo.name !== "" ? userInfo.name : userInfo.userName}
                    </Heading>
                    <Spacer />
                    <Text color={"gray.500"}>@{userInfo.userName}</Text>
                    <Spacer />
                    <Heading
                      color={"white"}
                      fontSize={{ base: "15", md: "15" }}
                      fontWeight={"normal"}
                    >
                      {industryInfo.industry
                        ? industryInfo.industry + " | "
                        : ""}
                      {industryInfo.industryRole !== ""
                        ? industryInfo.industryRole
                        : industryInfo.industryRole}{" "}
                    </Heading>
                  </Flex>
                </HStack>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            gridArea={"Main"}
            colSpan={24}
            overflow={"auto"}
            pt={{ base: 5, md: "30px" }}
            mb={{ base: 5, md: 5 }}
            borderBottomRadius={"md"}
          >
            <Grid
              templateRows={{
                base: "1fr 1fr 1fr 1fr 1fr",
              }}
              templateColumns={{
                base: "repeat(1, 1fr)",
              }}
              templateAreas={
                "'About' 'Wallet' 'Reputation''Learn-experience' 'work-experience'"
              }
              zIndex={8}
              w={"100%"}
              h={"100%"}
              alignItems={"center"}
              gap={"30px"}
              borderBottomRadius={"md"}
            >
              <GridItem gridArea={"About"} colSpan={24} px={7} pt={2}>
                <Grid
                  templateRows={{
                    base: "50% 50%",
                  }}
                  templateColumns={{
                    base: "1, 1fr",
                  }}
                  templateAreas={
                    "'About' 'Wallet' 'Reputation' 'Learn-experience'"
                  }
                  zIndex={8}
                  w={"100%"}
                  h={"100%"}
                  alignItems={"center"}
                  gap={0}
                >
                  <GridItem
                    rowSpan={{ base: 1 }}
                    colStart={{ base: 1 }}
                    alignSelf={"end"}
                  >
                    <Flex
                      direction="row"
                      width={"100%"}
                      zIndex={7}
                      align={"center"}
                    >
                      <Flex
                        width={"100%"}
                        height={"100%"}
                        align={"center"}
                        justifyContent={"space-between"}
                      >
                        <Flex alignItems={"center"} h={"100%"}>
                          <Heading
                            fontSize={{
                              base: "22px",
                              md: "20px",
                            }}
                            color={"white"}
                            fontWeight={"normal"}
                          >
                            About
                          </Heading>
                        </Flex>
                        <IconButton
                          size={"lg"}
                          variant={"ghost"}
                          color="white"
                          aria-label="edit about"
                          icon={<Icon as={FiEdit3} />}
                        />
                      </Flex>
                      <Spacer />
                    </Flex>
                  </GridItem>{" "}
                  <GridItem
                    rowSpan={{ base: 1 }}
                    zIndex={7}
                    alignSelf={"start"}
                  >
                    <Text
                      fontSize={{ base: 15, md: 13 }}
                      color={"gray.500"}
                      width={"92%"}
                    >
                      {industryInfo.profesionalBg}
                    </Text>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem gridArea={"Wallet"} colSpan={24} px={7}>
                <Grid
                  templateRows={{
                    base: "25% 75%",
                  }}
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                  }}
                  zIndex={8}
                  w={"100%"}
                  h={"100%"}
                  alignItems={"center"}
                  gap={3}
                >
                  <GridItem
                    rowSpan={{ base: 1 }}
                    colStart={{ base: 1 }}
                    alignSelf={"center"}
                  >
                    <Flex
                      direction="row"
                      width={"100%"}
                      zIndex={7}
                      align={"center"}
                    >
                      <Flex
                        width={"100%"}
                        height={"100%"}
                        align={"center"}
                        justifyContent={"space-between"}
                      >
                        <Center h={"100%"}>
                          <Heading
                            fontSize={{
                              base: "22px",
                              md: "20px",
                            }}
                            color={"white"}
                            fontWeight={"normal"}
                          >
                            Skills Wallet
                          </Heading>
                        </Center>
                        <IconButton
                          size={"md"}
                          variant={"ghost"}
                          color="white"
                          aria-label="Add Work experiece"
                          icon={<AddIcon />}
                          onClick={() => {
                            router.push("/minting-skills/skills-info");
                          }}
                        />
                      </Flex>
                    </Flex>
                  </GridItem>{" "}
                  <GridItem
                    rowSpan={{ base: 1 }}
                    zIndex={7}
                    alignSelf={"center"}
                    maxW={{ base: "100%", md: "290px" }}
                  >
                    <Carousel responsive={responsive}>
                      {skillInfo.map((skill) => {
                        return (
                          <Box
                            key={skill}
                            height={"135px"}
                            width={"105px"}
                            px={"8px"}
                          >
                            <HomeAvatar
                              key={skill}
                              skillName={skill.skillName}
                              skillLevel={skill.skillLevel}
                            ></HomeAvatar>
                          </Box>
                        );
                      })}
                    </Carousel>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem gridArea={"Reputation"} colSpan={24} pt={6} px={7}>
                <Grid
                  templateRows={{
                    base: "repeat(2, 50%)",
                  }}
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                  }}
                  zIndex={8}
                  w={"100%"}
                  h={"100%"}
                  alignItems={"center"}
                  gap={3}
                >
                  <GridItem
                    rowSpan={{ base: 1 }}
                    colStart={{ base: 1 }}
                    alignSelf={"end"}
                  >
                    <Flex
                      direction="row"
                      width={"100%"}
                      zIndex={7}
                      align={"center"}
                    >
                      <Heading
                        fontSize={{
                          base: "20px",
                          md: "20px",
                        }}
                        color={"white"}
                        fontWeight={"normal"}
                      >
                        Skill Reputation
                      </Heading>
                      <Spacer />
                    </Flex>
                  </GridItem>{" "}
                  <GridItem
                    rowSpan={{ base: 1 }}
                    zIndex={7}
                    alignSelf={"start"}
                  >
                    {" "}
                    <Flex alignItems={"center"} h={"100%"}>
                      <HStack width={"100%"}>
                        <Progress
                          showInfo={false}
                          strokeColor={{
                            "0%": "#4b0da9",
                            "100%": "#fd9193",
                          }}
                          trailColor={"#535152"}
                          percent={GSLevel}
                          zIndex={8}
                        />
                        <Text color="white">{GSLevel}%</Text>
                      </HStack>
                    </Flex>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem
                gridArea={"Learn-experience"}
                colSpan={24}
                rowSpan={{ base: 1 }}
                colStart={{ base: 1 }}
                alignSelf={"end"}
                px={7}
                pt={4}
              >
                <Flex
                  direction="column"
                  width={"100%"}
                  zIndex={7}
                  align={"center"}
                >
                  <Flex
                    width={"100%"}
                    height={"100%"}
                    align={"center"}
                    justifyContent={"space-between"}
                  >
                    <Flex justify={"center"} align={"center"}>
                      <Heading
                        fontSize={{
                          base: "20px",
                          md: "20px",
                        }}
                        color={"white"}
                        fontWeight={"normal"}
                        pb={"2"}
                      >
                        Learning Experience
                      </Heading>
                    </Flex>
                    <IconButton
                      size={"lg"}
                      variant={"ghost"}
                      color="white"
                      aria-label="Add Work experiece"
                      icon={<Icon as={FiEdit3} />}
                    />
                  </Flex>
                  <Spacer />
                  <Box h={"100%"} w={"100%"}>
                    {" "}
                    <LearningItems style={"black"} />
                  </Box>
                </Flex>
              </GridItem>
              <GridItem
                gridArea={"work-experience"}
                colSpan={24}
                rowSpan={{ base: 1 }}
                colStart={{ base: 1 }}
                alignSelf={"end"}
                px={7}
                pt={4}
              >
                <Flex
                  direction="column"
                  width={"100%"}
                  zIndex={7}
                  align={"center"}
                >
                  <Flex
                    width={"100%"}
                    height={"100%"}
                    align={"center"}
                    justifyContent={"space-between"}
                  >
                    <Flex justify={"center"} align={"center"}>
                      <Heading
                        fontSize={{
                          base: "20px",
                          md: "20px",
                        }}
                        color={"white"}
                        fontWeight={"normal"}
                        pb={"2"}
                      >
                        Work Experience
                      </Heading>
                    </Flex>
                    <IconButton
                      size={"lg"}
                      variant={"ghost"}
                      color="white"
                      aria-label="Add Work experiece"
                      icon={<Icon as={FiEdit3} />}
                    />
                  </Flex>
                  <Spacer />
                  <Box h={"100%"} w={"100%"}>
                    {" "}
                    <WorkItems style={"black"} />
                  </Box>
                </Flex>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </GridItem>
    </>
  );
}
