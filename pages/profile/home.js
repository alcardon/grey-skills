import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  FormErrorMessage,
  Grid,
  Center,
  GridItem,
  Button,
  Text,
  Circle,
  Icon,
  Flex,
  VStack,
  Spacer,
  IconButton,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Container,
  Image,
  HStack,
} from "@chakra-ui/react";

import { MdGraphicEq } from "react-icons/md";
import { SettingsIcon } from "@chakra-ui/icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import { BiRocket } from "react-icons/bi";
import NextLink from "next/link";

import WorkModal from "../../components/modals/work-modal";
import LearnModal from "../../components/modals/learn-modal";
import ButtonGradient from "../../components/general/gradient-button";
import { useUserInfo } from "../../context/user-context";
import { useEffect, useState, useRef } from "react";
import { chakraStyles } from "../../components/styles/react-select";
import { Select } from "chakra-react-select";
import ThumbNailImage from "../../components/general/thumbnail-avatar";
import LearningItems from "../../components/general/learning-items";
import WorkItems from "../../components/general/work-items";
import { Progress } from "antd";
import SmallAvatar from "../../components/general/small-avatar";

import { FiEdit3, FiUpload } from "react-icons/fi";

export default function LearningWorkExp() {
  const { userInfo, skillInfo, industryInfo } = useUserInfo();

  const [modalType, setModalType] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const initialRef = useRef();

  const ModalRender = () => {
    if (modalType == "work") {
      return <WorkModal initialRef={initialRef} onClose={onClose}></WorkModal>;
    } else if (modalType == "learn") {
      return (
        <LearnModal initialRef={initialRef} onClose={onClose}></LearnModal>
      );
    }
  };

  const handleChange = (value) => setValue(value);

  console.log("SkillInfo: ", skillInfo);

  return (
    <>
      <Flex
        height={{ base: "100vh", md: "760px" }}
        bgColor={"#222021"}
        borderRadius={"md"}
      >
        <Grid
          templateRows={{
            base: "32% 17% 26% 12% 1fr 13%",
            md: "32% 17% 26% 12% 1fr 13%",
          }}
          templateColumns="1fr"
          templateAreas={
            "'Head' 'About' 'Wallet' 'Reputation' 'Learn-experience' 'Foot'"
          }
          gap={2}
          zIndex={8}
          w={"100%"}
          overflow={"auto"}
          borderBottomRadius={"lg"}
          position={"relative"}
        >
          <Image
            src={"/images/home/iPhone 13.png"}
            position={"absolute"}
            w={"100%"}
            top={0}
            left={0}
            height={"40px"}
            zIndex={10}
            alt={"mobile battery"}
            display={{ base: "none", md: "inline-block" }}
            borderTopRadius={"md"}
          ></Image>
          <GridItem
            gridArea={"Head"}
            colSpan={24}
            borderBottom={"solid gray 0.01px"}
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
                borderTopRadius={"md"}
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
                    height={"24px"}
                    width={"165px"}
                    mb={2}
                  ></Image>
                  <IconButton
                    pr={"7"}
                    size={"md"}
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
                        fontSize={"2xl"}
                        color={"white"}
                      >
                        Your Resume
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
                        size={"md"}
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
                      size={"md"}
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
                <HStack px={7} height={"100%"}>
                  <Flex h={"100%"} align={"center"}>
                    {" "}
                    <Image
                      src={"/images/home/avatar.png"}
                      alt={"avatar"}
                      w={"65px"}
                      h={"65px"}
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
                      fontSize={{ base: "md", md: "md" }}
                      fontWeight={"normal"}
                    >
                      {industryInfo.industryRole !== ""
                        ? industryInfo.industryRole
                        : industryInfo.industryRole}{" "}
                    </Heading>
                  </Flex>
                </HStack>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem gridArea={"About"} colSpan={24} px={7}>
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
                  <Flex
                    width={"100%"}
                    height={"100%"}
                    align={"flex-end"}
                    justifyContent={"space-between"}
                  >
                    <Center h={"100%"}>
                      <Heading
                        fontSize={{
                          base: "22px",
                          md: "22px",
                        }}
                        color={"white"}
                        fontWeight={"normal"}
                      >
                        About
                      </Heading>
                    </Center>
                    <IconButton
                      size={"md"}
                      variant={"ghost"}
                      color="white"
                      aria-label="Add Work experiece"
                      icon={<Icon as={FiEdit3} />}
                    />
                  </Flex>
                  <Spacer />
                </Flex>
              </GridItem>{" "}
              <GridItem rowSpan={{ base: 1 }} zIndex={7} alignSelf={"start"}>
                <Text
                  fontSize={{ base: 15, md: 13 }}
                  color={"gray.500"}
                  width={"92%"}
                >
                  Mint, add and own your skills as dynamic NFTs that grow with
                  reputational value stored on the blockchain. ....See more.
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
              pt={5}
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
                    align={"flex-end"}
                    justifyContent={"space-between"}
                  >
                    <Center h={"100%"}>
                      <Heading
                        fontSize={{
                          base: "22px",
                          md: "22px",
                        }}
                        color={"white"}
                        fontWeight={"normal"}
                      >
                        Skills Wallet
                      </Heading>
                    </Center>
                  </Flex>
                </Flex>
              </GridItem>{" "}
              <GridItem rowSpan={{ base: 1 }} zIndex={7} alignSelf={"center"}>
                {" "}
                <Box h={"125px"} w="140px">
                  <SmallAvatar skillName={skillInfo.skillName}></SmallAvatar>
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem gridArea={"Reputation"} colSpan={24} px={7} pt={2}>
            <Grid
              templateRows={{
                base: "repeat(2, 50%)",
              }}
              templateColumns={{
                base: "repeat(1, 1fr)",
              }}
              gap={{ base: 1, md: 1 }}
              zIndex={8}
              w={"100%"}
              h={"100%"}
              alignItems={"center"}
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
                      base: "22px",
                      md: "22px",
                    }}
                    color={"white"}
                    fontWeight={"normal"}
                  >
                    Skill Reputation
                  </Heading>
                  <Spacer />
                </Flex>
              </GridItem>{" "}
              <GridItem rowSpan={{ base: 1 }} zIndex={7} alignSelf={"start"}>
                {" "}
                <Flex alignItems={"center"} h={"100%"} pt={"3"}>
                  <HStack width={"100%"}>
                    <Progress
                      showInfo={false}
                      strokeColor={{
                        "0%": "#4b0da9",
                        "100%": "#fd9193",
                      }}
                      trailColor={"#535152"}
                      percent={skillInfo.skillLevel}
                      zIndex={8}
                    />
                  </HStack>
                </Flex>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            gridArea={"Learn-experience"}
            colSpan={24}
            px={7}
            rowSpan={{ base: 1 }}
            colStart={{ base: 1 }}
            alignSelf={"end"}
            pt={"5"}
          >
            <Flex direction="column" width={"100%"} zIndex={7} align={"center"}>
              <Flex
                width={"100%"}
                height={"100%"}
                align={"flex-end"}
                justifyContent={"space-between"}
              >
                <Flex justify={"center"} align={"center"}>
                  <Heading
                    fontSize={{
                      base: "22px",
                      md: "22px",
                    }}
                    color={"white"}
                    fontWeight={"normal"}
                    pb={"2"}
                  >
                    Learning Experience
                  </Heading>
                </Flex>
                <IconButton
                  size={"md"}
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
            gridArea={"Foot"}
            colSpan={24}
            borderTop={"solid gray 0.01px"}
            pt={5}
          >
            <Box
              pt={3}
              p={2}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              bgSize={"cover"}
              bgImage={"url('/images/home/Group 17.png')"}
              borderTopRadius={"md"}
              height={"100%"}
              w={"100%"}
            ></Box>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
