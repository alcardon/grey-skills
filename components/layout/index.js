import { Box, Image, Container, Flex } from "@chakra-ui/react";

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
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

export default Layout;
