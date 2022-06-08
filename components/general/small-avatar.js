import { Box, Circle, Flex, Heading, Text } from "@chakra-ui/react";
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

export default function SmallAvatar({ skillName }) {
  return (
    <Flex
      height={"100%"}
      w={"80%"}
      bgColor={"#443e48"}
      borderRadius={"lg"}
      align={"center"}
      justify={"center"}
      zIndex={10}
      border={"solid #808080 2px"}
      position={"relative"}
    >
      <Circle
        bgColor={"blue"}
        boxSize={"49"}
        className={styles.innerCircleGradient}
        position={"absolute"}
        top={"5"}
      >
        {GetFirstLetter(skillName)}
      </Circle>
      <Text
        top={"75px"}
        position={"absolute"}
        textAlign={"center"}
        fontFamily={"kanit"}
        fontSize={"15"}
        fontWeight={"normal"}
        px={"2"}
      >
        {skillName}
      </Text>
    </Flex>
  );
}
