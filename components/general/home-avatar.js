import { Circle, Flex, Heading, Text } from "@chakra-ui/react";
import styles from "../styles/global.module.css";
import "@fontsource/inter";

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

export default function HomeAvatar({ skillName, skillLevel }) {
  return (
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
    >
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
  );
}
