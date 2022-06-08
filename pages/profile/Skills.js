import {
  Box,
  Heading,
  Grid,
  Center,
  GridItem,
  Text,
  Icon,
  Flex,
  Spacer,
  IconButton,
  Image,
  useDisclosure,
  Link,
  HStack,
} from "@chakra-ui/react";

import { MdGraphicEq } from "react-icons/md";
import { SettingsIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";

import { BiRocket } from "react-icons/bi";
import NextLink from "next/link";

import { useUserInfo } from "../../context/user-context";
import { useEffect, useState, useRef } from "react";
import { chakraStyles } from "../../components/styles/react-select";
import LearningItems from "../../components/general/learning-items";
import WorkItems from "../../components/general/work-items";
import { Progress } from "antd";
import HomeAvatar from "../../components/general/home-avatar";

import { FiEdit3, FiUpload } from "react-icons/fi";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    borderX={"solid red 1px"}
    bgColor={"white"}
    color={"black"}
    _hover={{
      textDecoration: "none",
      bg: "gray.700",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Skills() {
  const { userInfo, skillInfo, industryInfo } = useUserInfo();

  const router = useRouter();
  const initialRef = useRef();

  const handleChange = (value) => setValue(value);

  return (
    <>
      <GridItem gridArea={"Body"} colSpan={24} borderBottomRadius={"md"}>
        <Grid
          templateRows={{
            base: "40%  1fr",
            md: "40%  1fr",
          }}
          templateColumns="1fr"
          templateAreas={"'Head' 'Main'"}
          zIndex={8}
          w={"100%"}
          borderBottomRadius={"lg"}
          position={"relative"}
          h={"100%"}
        >
          <GridItem
            gridArea={"Head"}
            colSpan={24}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            bgSize={"cover"}
            bgImage={"url('/images/home/topbg.png')"}
            borderTopRadius={"md"}
          >
            <Grid
              templateRows={{
                base: "35% 20% 20% 20%",
              }}
              templateColumns={{
                base: "repeat(1, 1fr)",
              }}
              gap={0}
              zIndex={8}
              w={"100%"}
              h={"100%"}
              alignItems={"center"}
            >
              <GridItem
                rowSpan={{ base: 1 }}
                colStart={{ base: 1 }}
                height={"100%"}
                width={"100%"}
              >
                {" "}
                <Flex
                  width={"100%"}
                  height={"100%"}
                  align={"flex-end"}
                  justifyContent={"start"}
                  borderTopRadius={"md"}
                >
                  <Image
                    src="/images/general/logo-white.png"
                    alt={"logotype"}
                    height={"24px"}
                    width={"165px"}
                    mb={2}
                  ></Image>
                </Flex>
              </GridItem>
              <GridItem rowSpan={{ base: 1 }} zIndex={7} px={7}>
                <Grid
                  templateRows={{
                    base: "repeat(1, 1fr)",
                  }}
                  templateColumns={{
                    base: "80% 10% 10%",
                    md: "80% 10% 10%",
                  }}
                  zIndex={8}
                  w={"100%"}
                  h={"100%"}
                >
                  <GridItem
                    rowSpan={{ base: 1 }}
                    colSpan={{ base: 1 }}
                    colStart={{ base: 1 }}
                    zIndex={7}
                  >
                    {" "}
                    <Flex align={"center"} h={"100%"} justify={"flex-start"}>
                      {" "}
                      <Heading
                        verticalAlign="middle"
                        fontFamily={"kanit"}
                        fontWeight={"regular"}
                        fontSize={{ base: "2xl", md: "22" }}
                        color={"white"}
                      >
                        Project Providers
                      </Heading>
                    </Flex>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem
                rowSpan={{ base: 1 }}
                colStart={{ base: 1 }}
                height={"100%"}
                width={"100%"}
              >
                {" "}
                <HStack px={7} height={"100%"} pb={"10px"}>
                  <Text>
                    {" "}
                    Explore and apply to Grey projects or to projects from our
                    partners
                  </Text>
                </HStack>
              </GridItem>
              <GridItem rowSpan={{ base: 1 }} zIndex={7} px={7}>
                <HStack
                  as={"nav"}
                  display={{ base: "none", md: "flex" }}
                  justify={"center"}
                  spacing={"0"}
                >
                  <Box border={"solid red 1px"} p={0} m={0} bgColor={"white"}>
                    {Links.map((link) => (
                      <NavLink key={link}>{link}</NavLink>
                    ))}
                  </Box>
                </HStack>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            gridArea={"Main"}
            colSpan={24}
            overflow={"auto"}
            pt={{ base: 5, md: "30px" }}
            mb={{ base: 5, md: 5 }}
            borderBottomRadius={"md"}
          ></GridItem>
        </Grid>
      </GridItem>
    </>
  );
}
