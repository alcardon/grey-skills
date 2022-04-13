import styles from "../components/styles/404styles.module.css";
import { Box, Heading, Image, VStack } from "@chakra-ui/react";
const Page404 = () => {
  return (
    <>
      <Box
        m={0}
        p={0}
        h={"50vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        overflow={"hidden"}
      >
        <VStack
          justifyContent={"center"}
          alignItems={"center"}
          position={"absolute"}
          top={"10%"}
        >
          <Heading as={"h2"} size={"xl"}>
            ERROR
          </Heading>
          <Heading as={"h2"} size={"xl"}>
            404
          </Heading>
          <hr />
          <Heading as={"h3"} size={"lg"}>
            {" "}
            Page Not Found
          </Heading>
        </VStack>

        <div className={styles.astronaut}>
          <Image
            src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
            alt="astronaut"
            className={styles.astronautimg}
          />
        </div>
      </Box>
    </>
  );
};

export default Page404;
