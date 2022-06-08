import {
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Image,
  Link,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { useRouter } from "next/router";

import { useState, useRef } from "react";

import ModalComp from "../../components/modals/modalComp";
import ModalLayout from "../../components/modals/modalLayout";
import { useUserInfo } from "../../context/user-context";
export default function Browser() {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef();
  const showDrawer = () => {
    setVisible(true);
  };

  const [modalType, setModalType] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    itemSelected,
    modalStep,
    setItemSelected,
    setModalStep,
    levelUpSkill,
  } = useUserInfo();
  const router = useRouter();
  const { TabPane } = Tabs;

  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        borderRadius={"lg"}
        returnFocusOnClose={false}
      >
        <ModalOverlay />
        <ModalContent
          top={60}
          minH={{ base: "40vh", md: "200px" }}
          maxH={{ base: "40vh", md: "400px" }}
          w={"320px"}
        >
          <ModalLayout>
            <ModalComp onClose={onClose}></ModalComp>
          </ModalLayout>

          <ModalCloseButton size={"sm"} zIndex={10} />
        </ModalContent>
      </Modal>
      <GridItem
        gridArea={"Body"}
        colSpan={24}
        borderBottomRadius={"md"}
        ref={inputRef}
      >
        <Grid
          templateRows={{
            base: "18%  1fr",
            md: "18%  1fr",
          }}
          templateColumns="1fr"
          templateAreas={"'Head' 'Main'"}
          zIndex={8}
          w={"100%"}
          borderBottomRadius={"lg"}
          position={"relative"}
          h={"100%"}
          gap={2}
          borderBottom={"solid 1px gray"}
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
            <HStack
              width={"100%"}
              height={"100%"}
              align={"flex-end"}
              justifyContent={"flex-start"}
              borderTopRadius={"md"}
              pb={5}
              borderBottom={"solid 1px gray"}
            >
              <Image
                src="/images/general/logo-white.png"
                alt={"logotype"}
                height={"22px"}
                width={"150px"}
              ></Image>
              <Heading color={"white"} size={"md"}>
                Browser
              </Heading>
            </HStack>
          </GridItem>
          <GridItem
            gridArea={"Main"}
            colSpan={24}
            overflow={"auto"}
            pt={{ base: 5, md: 5 }}
            borderRadius={"md"}
            p={3}
            onClick={() => {
              if (itemSelected.type === "Projects") {
                setModalStep("your-skills");
              }
              if (itemSelected.type === "Learn") {
                setModalStep("completed");
              }
              onOpen();
            }}
          >
            <Box height={"100%"} w="100%">
              <Image
                src={itemSelected.imgLink}
                alt={"logotype"}
                borderRadius={"md"}
              ></Image>
            </Box>
          </GridItem>
        </Grid>
      </GridItem>
    </>
  );
}
