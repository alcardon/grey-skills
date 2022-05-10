import { Box, Circle, Flex, Heading, Text, Image } from "@chakra-ui/react";
import styles from "../styles/global.module.css";
import "@fontsource/inter";
function GetFirstLetter(skillName) {
  console.log(skillName);
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

export default function HomeAvatar({ skillName }) {
  return (
    <Flex
      height={"100%"}
      w={"80%"}
      align={"center"}
      justify={"center"}
      zIndex={7}
      position={"relative"}
    >
      <Image
        src={"/images/home/Rectangle 276.png"}
        position={"absolute"}
        height={"140"}
        w={"119"}
        top={0}
        left={0}
        zIndex={8}
        alt={"mobile battery"}
        display={{ base: "inline-block" }}
        borderTopRadius={"md"}
      ></Image>
      <Circle
        bgColor={"blue"}
        boxSize={"59"}
        zIndex={9}
        className={styles.innerCircleGradient}
        position={"absolute"}
        top={"5"}
      >
        {GetFirstLetter(skillName)}
      </Circle>
      <Text
        top={"83px"}
        zIndex={10}
        position={"absolute"}
        textAlign={"center"}
        fontFamily={"kanit"}
        fontSize={"13"}
        fontWeight={"normal"}
        px={"2"}
      >
        {skillName}
      </Text>
    </Flex>
  );
}
