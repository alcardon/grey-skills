import {
  Box,
  Image,
  Container,
  Spacer,
  Flex,
  HStack,
  IconButton,
  Grid,
  GridItem,
  Button,
  Center,
} from "@chakra-ui/react";

import { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useUserInfo } from "../../context/user-context";
import { Progress } from "antd";
import { useRouter } from "next/router";
import NavOptions from "../general/main-menu/nav-options";

const ProfileLayout = ({ children }) => {
  const [menuOption, setMenuOption] = useState("Identity");
  const { progress } = useUserInfo();
  const router = useRouter();

  return (
    <Flex h={"100%"} w={"100%"} justify={"center"} align={"center"}>
      <Box
        minW={{ base: "100%", md: "360px" }}
        maxW={{ md: "360px" }}
        maxH={{ md: "760px" }}
        height={{ base: "100vh", md: "760px" }}
        mt={{ base: 0, sm: 10, md: 20 }}
        borderRadius={{ base: "none", sm: "xl" }}
        bgImage={"url('/images/general/background.png')"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgSize={"cover"}
        className={"main-Lay-progress"}
        position={"relative"}
        mb={{ base: "0", md: "0" }}
        boxShadow={"0px 0px 20px -12px rgba(255,255,255,1)"}
      >
        <Flex height={{ base: "100vh", md: "760px" }} position={"relative"}>
          <Grid
            templateRows={{
              base: "88% 12%",
              md: "88% 12%",
            }}
            templateColumns="1fr"
            templateAreas={"'Body' 'Menu'"}
            zIndex={8}
            w={"100%"}
            borderBottomRadius={"lg"}
            position={"relative"}
          >
            <Image
              src={"/images/home/iPhone 13.png"}
              position={"absolute"}
              w={"100%"}
              top={0}
              left={0}
              height={"40px"}
              zIndex={10}
              alt={"mobile battery"}
              display={{ base: "none", md: "inline-block" }}
              borderTopRadius={"md"}
            ></Image>

            {children}
            <GridItem
              gridArea={"Menu"}
              colSpan={24}
              borderBottomRadius={"md"}
              borderTopColor={"gray.700"}
              borderTopWidth={"0.1px"}
            >
              <NavOptions
                menuOption={menuOption}
                setMenuOption={setMenuOption}
              ></NavOptions>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProfileLayout;
