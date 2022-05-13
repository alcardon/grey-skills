import { Box, Image, Container, Flex, Center } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex h={"100%"} w={"100%"} justify={"center"} align={"center"}>
      <Box
        maxW={{ md: "360px" }}
        maxH={{ md: "760px" }}
        height={{ base: "100vh", md: "844px" }}
        mt={{ base: 0, sm: 10, md: 20 }}
        borderRadius={{ base: "none", sm: "xl" }}
        bgImage={"url('/images/general/background.png')"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgSize={"cover"}
        position={"relative"}
        mb={{ base: "0", md: "20" }}
        boxShadow={"0px 0px 20px -12px rgba(255,255,255,1)"}
      >
        <Image
          src={"/images/general/mobile-navbar.png"}
          position={"absolute"}
          w={"100%"}
          top={0}
          height={"40px"}
          zIndex={5}
          alt={"mobile battery"}
          display={{ base: "none", md: "inline-block" }}
        ></Image>

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
      </Box>
    </Flex>
  );
};

export default Layout;
