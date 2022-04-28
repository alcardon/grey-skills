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

import WorkModal from "../../components/modals/work-modal";
import LearnModal from "../../components/modals/learn-modal";
import ButtonGradient from "../../components/general/gradient-button";
import { useUserInfo } from "../../context/user-context";
import { useEffect, useState, useRef } from "react";
import { chakraStyles } from "../../components/styles/react-select";
import { Select } from "chakra-react-select";

export default function LearningWorkExp() {
  const { userInfo, createUser, setProgress } = useUserInfo();

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

  console.log("User info: ", userInfo);

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
      >
        <VStack spacing={{ base: 5, md: 10, lg: 20 }}>
          <VStack spacing={{ base: 5, md: 5, lg: 10 }}>
            {" "}
            <Heading
              fontSize={{
                base: "xl",
                md: "2xl",
              }}
            >
              Tell us more about your skill.
            </Heading>
            <Text fontSize={{ base: 14, md: 14, lg: 16 }}>
              Add relevent experience to your skill to gain reputational value
              for this Skill NFT
            </Text>
            <Flex justifyContent={"Center"} align="center">
              <Circle size="10" bgColor={"orange.500"} m={1}>
                <Icon as={BiRocket} w={5} h={5} color={"white"} />
              </Circle>
              <Spacer />
              <Center m={1}>
                <Heading
                  fontFamily={"revert"}
                  fontSize={{
                    base: "xl",
                    md: "2xl",
                  }}
                >
                  Skill
                </Heading>
              </Center>
            </Flex>
          </VStack>
          <VStack spacing={5}>
            <VStack spacing={2}>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Learning Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("learn");
                    onOpen();
                  }}
                />
              </Flex>
              <Text fontSize={{ base: 12, md: 12, lg: 14 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                cursus dictum convallis.
              </Text>
            </VStack>
            <VStack spacing={2}>
              <Flex direction="row" width={"100%"}>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                >
                  Work Experience
                </Heading>
                <Spacer />
                <IconButton
                  size={"sm"}
                  colorScheme="green"
                  bg="green.500"
                  color="white"
                  _hover={{
                    bg: "green.400",
                  }}
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={() => {
                    setModalType("work");
                    onOpen();
                  }}
                />
              </Flex>
              <Text fontSize={{ base: 12, md: 12, lg: 14 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                cursus dictum convallis.
              </Text>
            </VStack>
          </VStack>
        </VStack>
        <Button
          colorScheme="blue"
          bg="blue.400"
          color="white"
          _hover={{
            bg: "blue.500",
          }}
          position={"absolute"}
          zIndex={8}
          isFullWidth
          bottom={"5%"}
          width={"200px"}
          rounded="full"
          onClick={() => {
            /* router.push("/"); */
          }}
        >
          Continue
        </Button>
      </Box>
    </>
  );
}
