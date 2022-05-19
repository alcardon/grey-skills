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
} from "@chakra-ui/react";
import Lottie from "react-lottie";

import { MdGraphicEq } from "react-icons/md";
import { AddIcon } from "@chakra-ui/icons";
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
import {
  useSubstrateState,
  useSubstrate
} from "../../context/substrate-context";

import animationData from "../../public/lottie/minting.json";
import futuristicLoader
  from "../../public/lottie/95274-futuristic-loader.json";

const ProcessingModal = ({ status }) => (
  <Flex height={{ base: "90vh", md: "660px" }} position={"relative"}>
    <Grid
      templateRows={{
        base: "repeat(48, 1fr)"
      }}
      templateColumns={{
        base: "repeat(24, 1fr)"
      }}
      height={{ base: "100%", md: "100%" }}
      width={"100%"}
      gap={0}
    >
      <GridItem
        rowSpan={{ base: 3 }}
        colSpan={{ base: 20 }}
        colStart={{ base: 3 }}
        rowEnd={{ base: 6 }}
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
        rowSpan={{ base: 4 }}
        colSpan={{ base: 20 }}
        colStart={{ base: 3 }}
        rowEnd={{ base: 9 }}
        zIndex={{ base: 3 }}
        align={"center"}
        justify={"center"}
      >
        <Text
          color={"whiteAlpha.800"}
          textAlign={"center"}
          fontWeight={"regular"}
          fontFamily={"Roboto"}
          fontSize="13"
        >
          {status}
        </Text>
      </GridItem>
      <GridItem
        rowSpan={{ base: 16 }}
        colSpan={{ base: 16 }}
        colStart={{ base: 5 }}
        rowEnd={{ base: 26 }}
        display={"flex"}
        alignItems={"center"}
        justify={"center"}
        zIndex={8}
      >
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={220}
          width={220}
        />
      </GridItem>
      <GridItem
        rowSpan={{ base: 20 }}
        colSpan={{ base: 20 }}
        colStart={{ base: 3 }}
        rowEnd={{ base: 28 }}
        display={"flex"}
        alignItems={"center"}
        justify={"center"}
        zIndex={7}
      >
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: futuristicLoader,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={300}
          width={300}
        />
      </GridItem>

      <GridItem
        rowSpan={{ base: 2 }}
        colSpan={{ base: 2 }}
        rowEnd={{ base: 31 }}
        colStart={{ base: 3 }}
        zIndex={{ base: 7 }}
      >
        <Center>
          <Circle size="22px" bg="#ff9393" />
        </Center>
      </GridItem>
      <GridItem
        rowSpan={{ base: 2 }}
        colSpan={{ base: 2 }}
        rowEnd={{ base: 36 }}
        colStart={{ base: 3 }}
        zIndex={{ base: 7 }}
      >
        <Center>
          <Circle size="22px" bg="#ff9393" />
        </Center>
      </GridItem>
      <GridItem
        rowSpan={{ base: 2 }}
        colSpan={{ base: 2 }}
        rowEnd={{ base: 40 }}
        colStart={{ base: 3 }}
        zIndex={{ base: 7 }}
      >
        <Center>
          <Circle size="22px" bg="#ff9393" />
        </Center>
      </GridItem>

      <GridItem
        rowSpan={{ base: 4 }}
        colSpan={{ base: 17 }}
        rowEnd={{ base: 33 }}
        colStart={{ base: 6 }}
        zIndex={{ base: 3 }}
      >
        <Text
          color={"whiteAlpha.800"}
          textAlign={"left"}
          fontWeight={"regular"}
          fontFamily={"Roboto"}
          fontSize="13"
        >
          Mint, add and own your skills as dynamic assets that grow with
          reputational value stored on the blockchain.
        </Text>
      </GridItem>
      <GridItem
        rowSpan={{ base: 3 }}
        colSpan={{ base: 17 }}
        rowEnd={{ base: 37 }}
        colStart={{ base: 6 }}
        zIndex={{ base: 3 }}
      >
        <Text
          color={"whiteAlpha.800"}
          textAlign={"left"}
          fontWeight={"regular"}
          fontFamily={"Roboto"}
          fontSize="13"
        >
          Apply your skills through new projects or make your own to 
          attract verified talent.
        </Text>
      </GridItem>
      <GridItem
        rowSpan={{ base: 3 }}
        colSpan={{ base: 17 }}
        rowEnd={{ base: 41 }}
        colStart={{ base: 6 }}
        zIndex={{ base: 3 }}
      >
        <Text
          color={"whiteAlpha.800"}
          textAlign={"left"}
          fontWeight={"regular"}
          fontFamily={"Roboto"}
          fontSize="13"
        >
          Access and create professional learning experiences to enhance
          and grow current and new skills.
        </Text>
      </GridItem>
    </Grid>
  </Flex>
)

export default function LearningWorkExp() {
  const {
    userInfo, industryInfo, skillInfo, createUser, setProgress
  } = useUserInfo();
  const { api, apiState, currentAccount, mintingStatus } = useSubstrateState();

  const { setMintingStatus } = useSubstrate();
  const [showProcessingModal, setShowProcessingModal] = useState(false);

  const [modalType, setModalType] = useState(null);
  const [status, setStatus] = useState(null);
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
  useEffect(() => {
    setProgress(80);
  }, [setProgress]);

  const getFromAcct = async () => {
    const {
      address,
      meta: { source, isInjected },
    } = currentAccount

    if (!isInjected) {
      return [currentAccount]
    }

    // currentAccount is injected from polkadot-JS extension, need to return
    // the addr and signer object.
    // ref: https://polkadot.js.org/docs/extension/cookbook#sign-and-send-a-transaction
    const { web3FromSource } = (await import('@polkadot/extension-dapp'))
    const injector = await web3FromSource(source)
    return [address, { signer: injector.signer }]
  }

  const txResHandler = ({ status }) =>
    status.isFinalized
      ? router.push("/processing-skills/minting-suc")
      : setMintingStatus(`Current transaction status: ${status.type}`)

  const txErrHandler = err =>
    setMintingStatus(`😞 Transaction Failed: ${err.toString()}`)

  const mintSkill = async () => {
    if (apiState !== 'READY') return

    try{
      const fromAcct = await getFromAcct()
      const extCreateSkill = api.tx.substrateGrey.createSkill(
        industryInfo.industry, // industry
        industryInfo.industryRole, // role
        skillInfo.skillName, // name
        skillInfo.skillLevel // reputation
      );
      setShowProcessingModal(true)
      setMintingStatus('Signing and sending transaction')
      const unsub = await extCreateSkill
        .signAndSend(...fromAcct, txResHandler)
        .catch(txErrHandler);
    }
    catch(error){
      console.log(error);
    }
  }

  if(showProcessingModal) return <ProcessingModal status={mintingStatus} />

  return (
    <Flex height={{ base: "90vh", md: "660px" }} position={"relative"}>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        initialFocusRef={initialRef}
        borderRadius={"lg"}
        returnFocusOnClose={false}
      >
        <ModalOverlay />
        <ModalContent
          top={10}
          height={{ base: "90vh", md: "700px" }}
          w={"340px"}
        >
          <ModalCloseButton size={"lg"} zIndex={10} />
          {ModalRender()}
        </ModalContent>
      </Modal>

      <Grid
        templateRows={{
          base: "29% 21% 1fr 21% 1fr 29%",
          md: "29% 21% 1fr 21% 1fr 29%",
        }}
        templateColumns="1fr"
        templateAreas={
          "'Head' 'Learning' 'Learning-items' 'Work' 'Work-items' 'foot'"
        }
        gap={0}
        zIndex={8}
        w={"100%"}
        overflow={"auto"}
        borderBottomRadius={"lg"}
        p={7}
      >
        <GridItem
          gridArea={"Head"}
          colSpan={24}
          borderBottom={"solid gray 0.01px"}
        >
          <Grid
            templateRows={{
              base: "repeat(2, 50%)",
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
            <GridItem rowSpan={{ base: 1 }} colStart={{ base: 1 }}>
              {" "}
              <Heading
                fontSize={{
                  base: "2xl",
                  md: "xl",
                }}
                color={"white"}
                fontWeight={"normal"}
              >
                Tell us more about your skill
              </Heading>
              <Text
                fontSize={{ base: 16, md: 14 }}
                pt={2}
                fontFamily={"inter"}
                fontWeight={"light"}
              >
                Add relevent experience to your skill to gain reputational
                value for this Skill Asset
              </Text>
            </GridItem>{" "}
            <GridItem rowSpan={{ base: 1 }} zIndex={7}>
              <Grid
                templateRows={{
                  base: "repeat(1, 1fr)",
                }}
                templateColumns={{
                  base: "20% 1fr 23%",
                  md: "17% 1fr 23%",
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
                    <ThumbNailImage skillName={skillInfo.skillName} />
                  </Flex>
                </GridItem>
                <GridItem
                  rowSpan={{ base: 1 }}
                  colSpan={{ base: 1 }}
                  colStart={{ base: 2 }}
                  zIndex={7}
                >
                  <Flex align={"center"} h={"100%"} justify={"flex-start"}>
                    <Heading
                      verticalAlign="middle"
                      fontFamily={"kanit"}
                      fontWeight={"regular"}
                      fontSize={"15"}
                      color={"white"}
                    >
                      {skillInfo.skillName}
                    </Heading>
                  </Flex>
                </GridItem>
                <GridItem
                  rowSpan={{ base: 1 }}
                  colSpan={{ base: 1 }}
                  colStart={{ base: 3 }}
                  zIndex={7}
                >
                  <Flex align={"center"} h={"100%"} justify={"flex-end"}>
                    <NextLink href="/minting-skills/skills-info" passHref>
                      <Link>
                        <Text
                          pt={"2px"}
                          fontSize={"11"}
                          fontWeight={"semibold"}
                          fontFamily={"inter"}
                        >
                          Change skill
                        </Text>
                      </Link>
                    </NextLink>
                  </Flex>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem gridArea={"Learning"} colSpan={24}>
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
                    base: "2xl",
                    md: "xl",
                  }}
                  color={"white"}
                  fontWeight={"normal"}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"md"}
                  variant={"ghost"}
                  color="white"
                  aria-label="Add Learning experiece"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
            </GridItem>{" "}
            <GridItem rowSpan={{ base: 1 }} zIndex={7} alignSelf={"start"}>
              <Text
                fontSize={{ base: 15, md: 13 }}
                color={"gray.500"}
                width={"90%"}
              >
                Add learning experiences associated with this skill
                (courses/certificates/workshops/etc.)
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem gridArea={"Learning-items"} colSpan={24}>
          <LearningItems />
        </GridItem>
        <GridItem gridArea={"Work"} colSpan={24}>
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
                    base: "2xl",
                    md: "xl",
                  }}
                  color={"white"}
                  fontWeight={"normal"}
                >
                  Work Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"md"}
                  variant={"ghost"}
                  color="white"
                  aria-label="Add Work experiece"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("work");
                    onOpen();
                  }}
                />
              </Flex>
            </GridItem>{" "}
            <GridItem rowSpan={{ base: 1 }} zIndex={7} alignSelf={"start"}>
              <Text
                fontSize={{ base: 15, md: 13 }}
                color={"gray.500"}
                width={"90%"}
              >
                Add work experience associated with this skill
                (jobs/projects/freelance gigs/etc.)
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem gridArea={"Work-items"} colSpan={24}>
          <WorkItems></WorkItems>
        </GridItem>

        <GridItem
          gridArea={"foot"}
          colSpan={24}
          borderTop={"solid gray 0.01px"}
          mt={5}
        >
          <Grid
            templateRows={{
              base: "repeat(2, 50%)",
            }}
            templateColumns={{
              base: "repeat(1, 1fr)",
            }}
            gap={{ base: 2, md: 2 }}
            zIndex={8}
            w={"100%"}
            h={"100%"}
          >
            <GridItem
              rowSpan={{ base: 1 }}
              colStart={{ base: 1 }}
              alignSelf={"end"}
            >
              <ButtonGradient
                label={"Mint my skill"}
                size="md"
                onClick={() => mintSkill()}
              />
            </GridItem>{" "}
            <GridItem rowSpan={{ base: 1 }} zIndex={7} alignSelf={"start"}>
              <Text
                fontSize={{ base: 13 }}
                color={"gray.500"}
                textAlign={"center"}
                pt={{ base: 2, md: 0 }}
              >
                If you don’t have relevant experience, you can simply mint
                your skill without experience.
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Flex>
  );
}
