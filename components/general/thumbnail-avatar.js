import { Box, Circle, Flex, Heading } from "@chakra-ui/react";
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
      fontSize={{ base: "10px", md: "10px" }}
      fontFamily={"inter"}
      fontWeight={"normal"}
      color={"whatsapp.100"}
    >
      {result}
    </Heading>
  );
}

export default function ThumbNailImage({ skillName }) {
  return (
    <Flex
      boxSize={{ base: "50", md: "39" }}
      bgColor={"#443e48"}
      borderRadius={"lg"}
      align={"center"}
      justify={"center"}
      zIndex={10}
      border={"solid #808080 1px"}
    >
      <Circle
        bgColor={"blue"}
        boxSize={{ base: "29", md: "19" }}
        className={styles.innerCircleGradient}
      >
        {GetFirstLetter(skillName)}
      </Circle>
    </Flex>
  );
}
