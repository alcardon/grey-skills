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

import { Formik, Form, Field, useField, useFormikContext } from "formik";
import * as Yup from "yup";

import ButtonGradient from "../../../components/general/gradient-button";
import { useUserInfo } from "../../../context/user-context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import DatePickerField from "../../general/date-picker";

import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import parse from "date-fns/parse";

function ConvertDate(date) {
  let result = format(date, "dd-MM-yyyy");

  return result;
}

export default function LearnModal({ initialRef, onClose }) {
  const { learnInfo, createLearnInfo } = useUserInfo();

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
            initialValues={{}}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                createLearnInfo(
                  values.nameLearn,
                  values.provider,
                  ConvertDate(values.startDate),
                  ConvertDate(values.endDate),
                  values.active,
                  values.credentials
                );
                onClose();
                setSubmitting(false);
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
                  rowEnd={{ base: 6 /* , md: 19, lg: 28 */ }}
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
                  rowEnd={{ base: 11 /* , md: 19, lg: 28 */ }}
                  colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
                  zIndex={7}
                >
                  <Field name="nameLearn">
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
                            size={"md"}
                            borderRadius={"md"}
                            ref={initialRef}
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
                  rowEnd={{ base: 17 /* , md: 19, lg: 28 */ }}
                  colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
                  zIndex={7}
                >
                  <Field name="provider">
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
                          Name of Institution/Platform
                        </FormLabel>

                        <InputGroup>
                          <Input
                            size={"md"}
                            borderRadius={"md"}
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
                  rowEnd={{ base: 23 /* , md: 19, lg: 28 */ }}
                  colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
                  zIndex={11}
                >
                  <DatePickerField
                    name={"startDate"}
                    label={"Start Date"}
                  ></DatePickerField>
                </GridItem>
                <GridItem
                  rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
                  colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
                  rowEnd={{ base: 29 /* , md: 19, lg: 28 */ }}
                  colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
                  zIndex={10}
                >
                  {" "}
                  <DatePickerField
                    name={"endDate"}
                    label={"End Date"}
                  ></DatePickerField>
                </GridItem>

                <GridItem
                  rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
                  colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
                  rowEnd={{ base: 38 /* , md: 19, lg: 28 */ }}
                  colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
                  zIndex={7}
                >
                  <Field name="credentials">
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
                            size={"sm"}
                            borderRadius={"md"}
                            type="text"
                            placeholder="Enter credentials/link"
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
                      size="md"
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
