import { Box, Circle, Flex, Heading } from "@chakra-ui/react";
import styles from "../styles/global.module.css";

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
    <Heading fontSize={{ base: "20px", md: "16px" }} color={"whatsapp.100"}>
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
      border={"solid #808080 1px"}
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
    </Flex>
  );
}
