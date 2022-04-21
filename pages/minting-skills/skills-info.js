import {
  Image,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  VStack,
} from "@chakra-ui/react";
import SliderInput from "../../components/general/number-input";
import MainBox from "../../components/layout/app-box";
import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";

import {
  areas,
  SoftwareDevelopment,
} from "../../components/options-data/options";

import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaIndustry, FaDumbbell } from "react-icons/fa";
import { useRouter } from "next/router";

export default function SkillsInfo() {
  const router = useRouter();

  return (
    <MainBox>
      <VStack spacing={{ base: 8, md: 8, lg: 10 }}>
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
            Mint your skills.
          </Heading>
        </Box>

        <Image
          src={"/images/Group2.png"}
          boxSize="150px"
          m={5}
          alt={"Just a robot"}
        ></Image>
        <FormControl isRequired>
          <FormLabel fontSize={"sm"}>What skills do you have?</FormLabel>

          <Select isSearchable options={SoftwareDevelopment} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={"sm"}>
            How experienced are you in this skill?
          </FormLabel>

          <SliderInput></SliderInput>
        </FormControl>
      </VStack>
      <Box pt={5}>
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
            router.push("/minting-skills/learning-work-exp");
          }}
        >
          Mint my skill
        </Button>
      </Box>
    </MainBox>
  );
}
