import { Box, Circle, Flex, Heading, Text, Image } from "@chakra-ui/react";
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
      fontSize={{ base: "40px", md: "40px" }}
      fontFamily={"inter"}
      color={"whatsapp.100"}
    >
      {result}
    </Heading>
  );
}

export default function BigAvatar({ skillName }) {
  return (
    <Flex
      height={"100%"}
      w={"100%"}
      align={"center"}
      justify={"center"}
      zIndex={10}
      position={"relative"}
    >
      <Image
        src="../../images/succesfull/Skill NFT.png"
        alt={"stripes"}
        objectFit={"cover"}
        width={"100%"}
        minHeight={"100%"}
        position={"absolute"}
      ></Image>
      <Circle
        bgColor={"blue"}
        boxSize={"108"}
        className={styles.innerCircleGradient}
        position={"absolute"}
        left="50%"
        top="50%"
        transform="translate(-50%,-50%)"
      >
        {GetFirstLetter(skillName)}
      </Circle>
    </Flex>
  );
}
