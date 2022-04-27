import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  FormErrorMessage,
  Grid,
  Center,
  GridItem,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { MdGraphicEq } from "react-icons/md";
import { AddIcon } from "@chakra-ui/icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import WorkModal from "../../components/modals/work-modal";
import LearnModal from "../../components/modals/learn-modal";
import ButtonGradient from "../../components/general/gradient-button";
import { useUserInfo } from "../../context/user-context";
import { useEffect, useState, useRef } from "react";
import { chakraStyles } from "../../components/styles/react-select";
import { Select } from "chakra-react-select";

export default function LearningWorkExp() {
  const { userInfo, createUser, setProgress } = useUserInfo();

  const [modalType, setModalType] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const initialRef = useRef();

  const ModalRender = () => {
    if (modalType == "work") {
      return <WorkModal></WorkModal>;
    } else if (modalType == "learn") {
      return <LearnModal></LearnModal>;
    }
  };

  const handleChange = (value) => setValue(value);
  useEffect(() => {
    setProgress(60);
  }, [setProgress]);

  console.log("User info: ", userInfo);

  return (
    <>
      {" "}
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={"xs"}
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent top={100}>
          <ModalCloseButton size={"sm"} top={3} />
          {ModalRender()}
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button ref={initialRef} colorScheme="blue">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>{" "}
      <Formik
        initialValues={userInfo}
        enableReinitialize
        validationSchema={Yup.object({
          name: Yup.string()
            .max(45, "Must be 45 characters or less")
            .required("Required"),
          userName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            createUser(values.name, values.userName, values.email);
            router.push("/");
          }, 400);
        }}
      >
        <Form>
          <Grid
            templateRows={{
              base: "repeat(48, 1fr)" /* ,
    md: "repeat(24, 1fr)",
    lg: "repeat(48, 1fr)", */,
            }}
            templateColumns={{
              base: "repeat(24, 1fr)" /* ,
    md: "repeat(20, 1fr)",
    lg: "repeat(48, 1fr)", */,
            }}
            height={{ base: "100vh" /* , md: "100vh"  */ }}
            width={"100%"}
            gap={0}
          >
            <GridItem
              rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
              colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
              rowEnd={{ base: 12 /* , md: 19, lg: 28 */ }}
              colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
              zIndex={7}
            >
              {" "}
              <Heading
                display={"table-cell"}
                verticalAlign="middle"
                fontSize={{
                  base: "xl",
                }}
                color={"white"}
              >
                Mint your skill
              </Heading>
              <Text color="gray.300" textAlign={"left"} fontSize={16} pt={2}>
                Search for a skill you want to mint.{" "}
              </Text>
            </GridItem>
            <GridItem
              rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
              colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
              rowEnd={{ base: 20 /* , md: 19, lg: 28 */ }}
              colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
              zIndex={7}
            >
              <Center>
                {" "}
                <Text color="gray.600" textAlign={"left"} fontSize={14} pt={2}>
                  Your Skill badge will appear here.
                </Text>
              </Center>
            </GridItem>

            <GridItem
              rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
              colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
              rowEnd={{ base: 27 /* , md: 19, lg: 28 */ }}
              colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
              zIndex={7}
            >
              <Field name="userName">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <FormControl isInvalid={meta.error && meta.touched}>
                    <FormLabel
                      fontSize={"sm"}
                      fontFamily={"Roboto"}
                      fontWeight={"regular"}
                    >
                      Search your skill*
                    </FormLabel>

                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </GridItem>

            <GridItem
              rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
              colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
              rowEnd={{ base: 34 /* , md: 19, lg: 28 */ }}
              colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
              zIndex={6}
            >
              {" "}
              <Field name="name">
                {({
                  field,
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <FormControl
                    isInvalid={
                      meta.error
                    } /* This could be an option to avoid change of color */
                  >
                    <FormLabel
                      fontSize={"sm"}
                      fontFamily={"Roboto"}
                      fontWeight={"regular"}
                      color={"gray.200"}
                    >
                      How experienced are you in this skill?
                    </FormLabel>

                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </GridItem>

            {/* <ButtonGradient label={"Continue"}></ButtonGradient> */}

            <GridItem
              rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
              colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
              rowEnd={{ base: 46 /* , md: 19, lg: 28 */ }}
              colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
              zIndex={6}
            >
              <Box>
                <ButtonGradient
                  label={"Proceed to next step"}
                  size="lg"
                  type="submit"
                />
              </Box>
            </GridItem>
          </Grid>
        </Form>
      </Formik>
    </>
  );
}
