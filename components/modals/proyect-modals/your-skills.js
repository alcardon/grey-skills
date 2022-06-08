import {
  Box,
  Text,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Button,
  Heading,
  Flex,
  Circle,
  Checkbox,
  VStack,
  useCheckbox,
} from "@chakra-ui/react";

import styles from "../../styles/global.module.css";
import { useUserInfo } from "../../../context/user-context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCheckboxGroup } from "@chakra-ui/react";

function GetFirstLetter(skillName) {
  let result;
  if (skillName) {
    result = skillName.match(/\b(\w)/g);
    result = result.join("").toString().toUpperCase();
  } else {
    result = null;
  }
  return (
    <Heading
      fontSize={{ base: "17px", md: "17px" }}
      fontFamily={"inter"}
      color={"whatsapp.100"}
    >
      {result}
    </Heading>
  );
}

function HomeAvatar({ skillName, skillLevel, props }) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <Box {...htmlProps} width={"100%"} h={"100%"}>
      <Flex
        direction={"column"}
        height={"100%"}
        w={"100%"}
        align={"center"}
        justify={"center"}
        zIndex={7}
        bgColor="black"
        bgImage={"url('/images/home/Rectangle 276.png')"}
        backgroundPosition="center"
        bgSize={"cover"}
        borderRadius={"lg"}
        position={"relative"}
        {...getCheckboxProps()}
      >
        <input {...getInputProps()} hidden />
        {state.isChecked && <Box w={2} h={2} bg="green.500" zIndex={12} />}
        <Circle
          bgColor={"blue"}
          boxSize={"50"}
          zIndex={9}
          className={styles.innerCircleGradient}
          top={"5"}
        >
          {GetFirstLetter(skillName)}
        </Circle>
        <Text
          top={"83px"}
          zIndex={10}
          textAlign={"center"}
          fontFamily={"kanit"}
          fontSize={"13"}
          fontWeight={"normal"}
          px={"5"}
          pt={2}
        >
          {skillName}
        </Text>
      </Flex>
    </Box>
  );
}

export default function YourSkills({
  initialRef,
  onClose,
  title,
  content,
  link,
}) {
  const { router } = useRouter();
  const { skillInfo, setModalStep } = useUserInfo();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <Box
        h={"100%"}
        position={"relative"}
        boxSizing="border-box"
        className="bigRelative"
      >
        <ModalHeader>Your Skills</ModalHeader>

        <ModalBody>
          <VStack spacing={5}>
            <Text>
              These are skills related to the project you’re working on. Select
              the ones you would like to be applied to this project.
            </Text>
            <Box
              maxW={{ base: "100%", md: "290px" }}
              height={"160px"}
              width={{ base: "290px", md: "240px" }}
              pt={"9px"}
            >
              <Carousel responsive={responsive}>
                {skillInfo.map((skill) => {
                  return (
                    <Box key={skill} height={"125px"} width={"95px"}>
                      <HomeAvatar
                        key={skill}
                        skillName={skill.skillName}
                        skillLevel={skill.skillLevel}
                      ></HomeAvatar>
                    </Box>
                  );
                })}
              </Carousel>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              setModalStep("completed");
            }}
            fontWeight={"normal"}
            bgGradient="linear(to-r,#4b0da9, #fd9193)"
          >
            Level up
          </Button>{" "}
        </ModalFooter>
      </Box>
    </>
  );
}
