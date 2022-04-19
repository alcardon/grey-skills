import {
  Text,
  Image,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Icon,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Circle,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";
import React from "react";

import { AddIcon } from "@chakra-ui/icons";
import { BiRocket } from "react-icons/Bi";

import MainBox from "../../components/layout/app-box";

export default function LearningWorkExp() {
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <MainBox>
      <Box p={{ base: 0, md: 10 }}>
        <VStack spacing={{ base: 10, md: 10, lg: 20 }}>
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
            <HStack spacing={5}>
              <Circle size="10" bgColor={"orange.500"}>
                <Icon as={BiRocket} w={5} h={5} color={"white"} />
              </Circle>

              <Heading
                fontFamily={"revert"}
                fontSize={{
                  base: "xl",
                  md: "2xl",
                }}
              >
                Skill
              </Heading>
            </HStack>
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
          <Link href={"/minting-skills/skills-info"}>
            <Button
              colorScheme="blue"
              bg="blue.400"
              color="white"
              _hover={{
                bg: "blue.500",
              }}
              isFullWidth
              rounded="full"
            >
              Continue
            </Button>
          </Link>
        </Box>
      </Box>
    </MainBox>
  );
}
