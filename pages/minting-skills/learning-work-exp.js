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
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={"xs"}
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent top={100}>
          <ModalCloseButton size={"sm"} top={3} />
          {ModalRender()}
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button ref={initialRef} colorScheme="blue">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        maxW={"sm"}
        p={{ base: 7, md: 10 }}
        position={"absolute"}
        height={"100%"}
        className={"law-container"}
        top={24}
      >
        <VStack spacing={{ base: 5, md: 10, lg: 20 }}>
          <VStack spacing={{ base: 5, md: 5, lg: 10 }}>
            {" "}
            <Flex justify={"flex-start"}>
              <Heading
                fontSize={{
                  base: "xl",
                  md: "2xl",
                }}
                color={"white"}
              >
                Tell us more about your skill.
              </Heading>
            </Flex>
            <Text fontSize={{ base: 14, md: 14, lg: 16 }}>
              Add relevent experience to your skill to gain reputational value
              for this Skill NFT
            </Text>
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(12, 1fr)"
              gap={0}
              zIndex={8}
              w={"100%"}
            >
              {" "}
              <GridItem rowSpan={1} colSpan={1}>
                {" "}
                <ThumbNailImage skillName={skillInfo.skillName} />
              </GridItem>
              <GridItem rowSpan={1} colSpan={7} colStart={3}>
                <Flex align={"center"} h={"100%"} justify={"flex-start"}>
                  <Heading
                    verticalAlign="middle"
                    fontSize={{
                      base: "md",
                      md: "lg",
                    }}
                    color={"white"}
                  >
                    {skillInfo.skillName}
                  </Heading>
                </Flex>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3} colStart={10}>
                <Flex align={"center"} h={"100%"} justify={"flex-end"}>
                  <NextLink href="/minting-skills/skills-info" passHref>
                    <Link>
                      <Text fontSize={"xs"} fontWeight={"bold"}>
                        Edit Skill
                      </Text>
                    </Link>
                  </NextLink>
                </Flex>
              </GridItem>
            </Grid>
          </VStack>
          <Box borderTop={"solid gray 0.01px"} w={"100%"}></Box>
          <VStack spacing={5}>
            <VStack spacing={2}>
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

              <Text fontSize={{ base: 12, md: 12, lg: 14 }} color={"gray.300"}>
                Add learning experiences associated with this skill
                (courses/certificates/workshops/etc.)
              </Text>
            </VStack>

            <VStack spacing={2}>
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
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Text fontSize={{ base: 12, md: 12, lg: 14 }} color={"gray.300"}>
                Add work experience associated with this skill
                (jobs/projects/freelance gigs/etc.)
              </Text>
            </VStack>
          </VStack>
          <Box borderTop={"solid gray 1px"} w={"100%"}></Box>
        </VStack>
        <Box
          position={"absolute"}
          bottom={20}
          left={"50%"}
          transform={"translate(-50%, 0)"}
          w={"80%"}
        >
          <ButtonGradient
            label={"Proceed to next step"}
            size="lg"
            type="submit"
          />
        </Box>
        <Text
          fontSize={{ base: 12, md: 12, lg: 14 }}
          position={"absolute"}
          bottom={5}
          left={"50%"}
          transform={"translate(-50%, 0)"}
          w={"80%"}
          color={"gray.500"}
        >
          If you don’t have relevant experience, you can simply mint your skill
          without experience.
        </Text>
      </Box>
    </>
  );
}
