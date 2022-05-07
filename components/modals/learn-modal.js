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
  Input,
  FormControl,
  FormLabel,
  Heading,
  InputGroup,
  FormErrorMessage,
} from "@chakra-ui/react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import ButtonGradient from "../../components/general/gradient-button";
import { useUserInfo } from "../../context/user-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function WorkModal() {
  const { userInfo, createUser, setProgress } = useUserInfo();
  return (
    <>
      <Box
        height={{ base: "90vh", md: "760px" }}
        borderRadius={{ base: "none", sm: "md" }}
        backgroundPosition="center"
        backgroundRepeat="repeat"
        bgSize={"cover"}
        bgImage={"url('/images/general/background.png')"}
        className={"main-Lay-progress"}
        fontFamily={"Kanit, sans-serif"}
        overflow={"auto"}
      >
        <Box
          h={"100%"}
          position={"relative"}
          boxSizing="border-box"
          className="bigRelative"
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
            top={0}
          ></Image>
          <Formik
            enableReinitialize
            validationSchema={Yup.object({
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
                router.push("/minting-skills/profesional-bg");
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
                height={{ base: "89vh", md: "700px" }}
                width={"100%"}
                gap={0}
              >
                <GridItem
                  rowSpan={{ base: 3 /* , md: 6, lg: 25 */ }}
                  colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
                  rowEnd={{ base: 7 /* , md: 19, lg: 28 */ }}
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
                    Add Learning Experience.
                  </Heading>
                </GridItem>
                <GridItem
                  rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
                  colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
                  rowEnd={{ base: 12 /* , md: 19, lg: 28 */ }}
                  colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
                  zIndex={7}
                >
                  <Field name="NameCourse">
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
                          Name of the course
                        </FormLabel>

                        <InputGroup>
                          <Input
                            type="text"
                            placeholder="Type here"
                            _placeholder={{ color: "gray.500" }}
                            bgColor={"white"}
                            color={"gray.800"}
                            {...field}
                          />
                        </InputGroup>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>

                <GridItem
                  rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
                  colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
                  rowEnd={{ base: 18 /* , md: 19, lg: 28 */ }}
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
                          Name of institution/Platform
                        </FormLabel>

                        <InputGroup>
                          <Input
                            type="text"
                            placeholder="Type here"
                            _placeholder={{ color: "gray.500" }}
                            bgColor={"white"}
                            color={"gray.800"}
                            {...field}
                          />
                        </InputGroup>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>

                <GridItem
                  rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
                  colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
                  rowEnd={{ base: 24 /* , md: 19, lg: 28 */ }}
                  colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
                  zIndex={7}
                >
                  <Field name="email">
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
                          Start Date
                        </FormLabel>

                        <InputGroup>
                          <Input
                            type="date"
                            placeholder="E.g. Jonathan@grey.com"
                            _placeholder={{ color: "gray.500" }}
                            bgColor={"white"}
                            color={"gray.800"}
                            {...field}
                          />
                        </InputGroup>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem
                  rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
                  colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
                  rowEnd={{ base: 30 /* , md: 19, lg: 28 */ }}
                  colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
                  zIndex={7}
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
                        >
                          End Date
                        </FormLabel>

                        <InputGroup>
                          <Input
                            type="date"
                            placeholder="Select Date"
                            _placeholder={{ color: "gray.500" }}
                            bgColor={"white"}
                            color={"gray.800"}
                            {...field}
                          />
                        </InputGroup>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>

                <GridItem
                  rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
                  colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
                  rowEnd={{ base: 38 /* , md: 19, lg: 28 */ }}
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
                          Enter your course credentials here for verification
                        </FormLabel>

                        <InputGroup>
                          <Input
                            type="text"
                            placeholder="Type here"
                            _placeholder={{ color: "gray.500" }}
                            bgColor={"white"}
                            color={"gray.800"}
                            {...field}
                          />
                        </InputGroup>
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
                  zIndex={7}
                >
                  <Box>
                    <ButtonGradient
                      label={"Add Learning Experience"}
                      size="lg"
                      type="submit"
                    />
                  </Box>
                </GridItem>
              </Grid>
            </Form>
          </Formik>

          {/*  <Footer /> */}
        </Box>
      </Box>
    </>
  );
}
