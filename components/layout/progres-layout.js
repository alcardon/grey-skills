import { Box, Image, Container, Flex, Progress } from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";

import Footer from "./footer";
import Header from "./header";

const ProgressLayout = ({ children }) => {
  return (
    <Box
      maxW={{ md: "390px" }}
      maxH={{ md: "844px" }}
      height={{ base: "100vh" }}
      mt={{ base: 0, sm: 10, md: 20 }}
      borderRadius={{ base: "none", sm: "md" }}
      bgImage={"url('/images/general/background.png')"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize={"cover"}
      position={"relative"}
    >
      <Progress size="xs" isIndeterminate />
      <Box h={"12%"} w={"100%"} bgColor="#222021" position={"absolute"} top={0}>
        <Flex direction={"row"}>
          {/*  <ArrowBackIcon /> */}
          <Box bgColor={"white"}>
            {" "}
            <Progress value={80} zIndex={20} position={"absolute"} />
          </Box>
        </Flex>
      </Box>
      {/*  <Header /> */}
      <Image
        src={"/images/general/cover.png"}
        position={"absolute"}
        objectFit="cover"
        alt="cover"
        w={"100%"}
        height={"100%"}
        zIndex={5}
      ></Image>
      {children}

      {/*  <Footer /> */}
    </Box>
  );
};

export default ProgressLayout;
