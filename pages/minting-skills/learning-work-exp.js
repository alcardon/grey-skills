import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  Text,
  Box,
  Flex,
  Heading,
  IconButton,
  Center,
  Icon,
  useClipboard,
  VStack,
  Circle,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useState } from "react";

import ModalMain from "../../components/general/modal-main";
import { AddIcon } from "@chakra-ui/icons";
import { BiRocket } from "react-icons/bi";
import { useRouter } from "next/router";
import MainBox from "../../components/layout/app-box";
import WorkModal from "../../components/modals/work-modal";
import LearnModal from "../../components/modals/learn-modal";

export default function LearningWorkExp() {
  const [modalType, setModalType] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const router = useRouter();
  const initialRef = React.useRef();

  const ModalRender = () => {
    if (modalType == "work") {
      return <WorkModal></WorkModal>;
    } else if (modalType == "learn") {
      return <LearnModal></LearnModal>;
    }
  };

  return (
    <MainBox>
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
      <Box p={{ base: 0, md: 10 }}>
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
        <Box pt={10}>
          <Button
            colorScheme="blue"
            bg="blue.400"
            color="white"
            _hover={{
              bg: "blue.500",
            }}
            isFullWidth
            rounded="full"
            onClick={() => {
              router.push("/");
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </MainBox>
  );
}
