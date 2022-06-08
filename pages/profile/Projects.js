import {
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
  Flex,
  Image,
  Link,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { useRouter } from "next/router";

import { useUserInfo } from "../../context/user-context";
import { useState, useRef } from "react";

import Items from "../../components/general/project-learn-items";

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

const ProjectsItems = [
  {
    id: uuidv4(),
    nameItem: "Contra",
    description: "This is a description of contra",
    num: "06",
    type: "Projects",
    link: "contra",
    imgLink: "/images/home/contra.png",
    relSkills: ["Web3", "UX Design", "Smart Contracts"],
  },
  {
    id: uuidv4(),
    nameItem: "Gitcoin",
    description: "This is a description of Gitcoin",
    num: "22",
    type: "Projects",
    link: null,
  },
  {
    id: uuidv4(),
    nameItem: "Upwork",
    description: "This is a description of Upwork",
    num: "02",
    type: "Projects",
    link: null,
  },
  {
    id: uuidv4(),
    nameItem: "Grey",
    description: "This is a description of Grey",
    num: "11",
    type: "Projects",
    link: null,
  },
];

export default function Projects() {
  const { userInfo, skillInfo, industryInfo } = useUserInfo();

  const router = useRouter();
  const initialRef = useRef();
  const { TabPane } = Tabs;

  const handleChange = (value) => setValue(value);

  return (
    <>
      <GridItem gridArea={"Body"} colSpan={24} borderBottomRadius={"md"}>
        <Grid
          templateRows={{
            base: "35%  1fr",
            md: "35%  1fr",
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
            /*  backgroundPosition="center"
            backgroundRepeat="no-repeat"
            bgSize={"cover"}
            bgImage={"url('/images/home/topbg2.png')"} */
            borderTopRadius={"md"}
          >
            <Grid
              templateRows={{
                base: "48% 1fr 1fr",
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
                    height={"22px"}
                    width={"150px"}
                    mb={2}
                  ></Image>
                </Flex>
              </GridItem>
              <GridItem rowSpan={{ base: 1 }} zIndex={7} px={7}>
                {" "}
                <Flex h={"100%"} justify={"flex-start"} align={"center"}>
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
              <GridItem
                rowSpan={{ base: 1 }}
                colStart={{ base: 1 }}
                height={"100%"}
                width={"100%"}
              >
                {" "}
                <HStack px={7} height={"100%"}>
                  <Text>
                    {" "}
                    Explore and apply to Grey projects or to projects from our
                    partners
                  </Text>
                </HStack>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            gridArea={"Main"}
            colSpan={24}
            pt={{ base: 5, md: 5 }}
            mb={{ base: 5, md: 5 }}
            borderBottomRadius={"md"}
            overflow={"auto"}
          >
            {" "}
            <Flex justify={"center"}>
              <Tabs variant="enclosed" width={"85%"}>
                <TabList mb="1em">
                  <Tab>New</Tab>
                  <Tab isDisabled>Trending</Tab>
                  <Tab isDisabled>By Skills</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel p={1}>
                    <Items itemList={ProjectsItems} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </GridItem>
        </Grid>
      </GridItem>
    </>
  );
}
