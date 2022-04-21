import {
  Image,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";
import React from "react";
import { industries, roles } from "../../components/options-data/options";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaIndustry, FaDumbbell } from "react-icons/fa";
import MainBox from "../../components/layout/app-box";

import { useUserInfo } from "../../context/user-context";
import { useRouter } from "next/router";

export default function IndustryInfo() {
  const router = useRouter();
  const { userInfo } = useUserInfo();
  console.log(userInfo);

  return (
    <MainBox>
      <Box>
        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
          <Box display={"table"} justifyContent={"center"} align={"center"}>
            {" "}
            <Heading
              display={"table-cell"}
              verticalAlign="middle"
              fontSize={{
                base: "xl",
                md: "2xl",
              }}
            >
              Tell us what is your industry and your role in it.
            </Heading>
          </Box>
          <Stack
            spacing={{ base: 4, md: 8, lg: 20 }}
            direction={{ base: "column", md: "row" }}
          >
            <Box>
              <VStack spacing={5}>
                <Image
                  src={"/images/Group3.png"}
                  boxSize="150px"
                  m={5}
                  alt={"Just a robot"}
                ></Image>
                <FormControl isRequired>
                  <FormLabel fontSize={"sm"}>
                    What industry do you have experience in?
                  </FormLabel>

                  <Select isSearchable options={industries} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize={"sm"}>
                    What&apos;s your role in this industry?
                  </FormLabel>

                  <Select isMulti isSearchable options={roles} />
                </FormControl>
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
                  onClick={() => router.push("/minting-skills/skills-info")}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Stack>
        </VStack>
      </Box>
    </MainBox>
  );
}
