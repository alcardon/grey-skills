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

export default function LearningWorkExp() {
  const { userInfo, skillInfo, createUser, setProgress } = useUserInfo();

  const [modalType, setModalType] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const initialRef = useRef();

  const ModalRender = () => {
    if (modalType == "work") {
      return <WorkModal></WorkModal>;
    } else if (modalType == "learn") {
      return <LearnModal></LearnModal>;
    }
  };

  const handleChange = (value) => setValue(value);
  useEffect(() => {
    setProgress(80);
  }, [setProgress]);

  console.log("SkillInfo: ", skillInfo);

  return (
    <>
      <Flex height={{ base: "90vh", md: "660px" }} position={"relative"}>
        <Modal onClose={onClose} isOpen={isOpen} borderRadius={"lg"} isCentered>
          <ModalOverlay />
          <ModalContent
            top={3}
            height={{ base: "90vh", md: "700px" }}
            w={"340px"}
          >
            <ModalCloseButton size={"lg"} zIndex={10} />
            {ModalRender()}
          </ModalContent>
        </Modal>

        <Grid
          templateRows={{
            base: "repeat(48, 1fr)",
          }}
          templateColumns={{
            base: "repeat(24, 1fr)" /* ,
  md: "repeat(20, 1fr)",
  lg: "repeat(48, 1fr)", */,
          }}
          gap={0}
          zIndex={8}
          w={"100%"}
          overflow={"auto"}
        >
          <GridItem
            rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 7 /* , md: 19, lg: 28 */ }}
            colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
            zIndex={7}
          >
            {" "}
            <Heading
              fontSize={{
                base: "xl",
                md: "xl",
              }}
              color={"white"}
            >
              Tell us more about your skill
            </Heading>
            <Text fontSize={{ base: 14, md: 15 }} pt={2} fontFamily={"inter"}>
              Add relevent experience to your skill to gain reputational value
              for this Skill NFT
            </Text>
          </GridItem>{" "}
          <GridItem
            rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 3 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 14 /* , md: 19, lg: 28 */ }}
            colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
            zIndex={7}
          >
            {" "}
            <ThumbNailImage skillName={skillInfo.skillName} />
          </GridItem>
          <GridItem
            rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 12 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 14 /* , md: 19, lg: 28 */ }}
            colStart={{ base: 6 /* , md: 1, lg: 1 */ }}
            zIndex={7}
          >
            <Flex align={"center"} h={"100%"} justify={"flex-start"}>
              <Heading
                verticalAlign="middle"
                fontFamily={"kanit"}
                fontWeight={"normal"}
                fontSize={"15"}
                color={"white"}
                pl={2}
              >
                {skillInfo.skillName}
              </Heading>
            </Flex>
          </GridItem>
          <GridItem
            rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 5 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 14 /* , md: 19, lg: 28 */ }}
            colEnd={{ base: 23 /* , md: 1, lg: 1 */ }}
            zIndex={7}
          >
            <Flex align={"center"} h={"100%"} justify={"flex-end"}>
              <NextLink href="/minting-skills/skills-info" passHref>
                <Link>
                  <Text
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
          <GridItem
            rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 24 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 20 /* , md: 19, lg: 28 */ }}
            colStart={{ base: 1 /* , md: 1, lg: 1 */ }}
            zIndex={7}
          >
            {" "}
            <Box borderTop={"solid gray 0.01px"} w={"100%"}></Box>{" "}
          </GridItem>
          <GridItem
            rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 22 /* , md: 19, lg: 28 */ }}
            colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
            zIndex={7}
          >
            {" "}
            <Flex direction="row" width={"100%"} zIndex={7} align={"center"}>
              <Heading
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
                color={"white"}
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
            <Text fontSize={{ base: 12.5 }} color={"gray.500"} width={"90%"}>
              Add learning experiences associated with this skill
              (courses/certificates/workshops/etc.)
            </Text>
          </GridItem>
          {/*  <GridItem colSpan={12}>
            {" "}
            <Text fontSize={{ base: 12, md: 12, lg: 14 }} color={"gray.300"}>
              Add learning experiences associated with this skill
              (courses/certificates/workshops/etc.) Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Text>
          </GridItem> */}
          <GridItem
            rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 24 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 41 /* , md: 19, lg: 28 */ }}
            colStart={{ base: 1 /* , md: 1, lg: 1 */ }}
            zIndex={7}
          >
            <Box borderTop={"solid gray 0.01px"} w={"100%"}></Box>
          </GridItem>
          <GridItem
            rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 32 /* , md: 19, lg: 28 */ }}
            colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
            zIndex={7}
          >
            {" "}
            <Flex direction="row" width={"100%"} zIndex={7} align={"center"}>
              <Heading
                color={"white"}
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
              >
                Work Experience
              </Heading>
              <Spacer />
              <IconButton
                size={"md"}
                variant={"ghost"}
                color="white"
                aria-label="Add work experience"
                icon={<AddIcon />}
                onClick={() => {
                  setModalType("work");
                  onOpen();
                }}
              />
            </Flex>
            <Text fontSize={{ base: 12.5 }} color={"gray.500"} width={"90%"}>
              Add work experience associated with this skill
              (jobs/projects/freelance gigs/etc.)
            </Text>
          </GridItem>
          <GridItem
            rowSpan={{ base: 2 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 28 /* , md: 19, lg: 28 */ }}
            colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
            zIndex={7}
          ></GridItem>
          <GridItem
            rowSpan={{ base: 2 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 36 /* , md: 19, lg: 28 */ }}
            colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
            zIndex={7}
          ></GridItem>
          <GridItem
            rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 43 /* , md: 19, lg: 28 */ }}
            colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
            zIndex={7}
          >
            <ButtonGradient label={"Mint my skill"} size="md" type="submit" />
            <Text
              fontSize={{ base: 13 }}
              color={"gray.500"}
              pt={4}
              textAlign={"center"}
            >
              If you don’t have relevant experience, you can simply mint your
              skill without experience.
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
