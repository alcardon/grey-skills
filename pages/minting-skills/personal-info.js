import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  FormErrorMessage,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import ButtonGradient from "../../components/general/gradient-button";
import { useUserInfo } from "../../context/user-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PersonalInfo() {
  const { userInfo, createUser, setProgress } = useUserInfo();
  useEffect(() => {
    setProgress(20);
  }, [setProgress]);

  const router = useRouter();

  console.log("User info: ", userInfo);

  return (
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
        email: Yup.string().email("Invalid email address").required("Required"),
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
          height={{ base: "100vh" /* , md: "100vh"  */ }}
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
              Let&apos;s start with your personal information.
            </Heading>
          </GridItem>

          <GridItem
            rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
            colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
            rowEnd={{ base: 19 /* , md: 19, lg: 28 */ }}
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
                    Create a username
                  </FormLabel>

                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="E.g. Jonathan512"
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
            rowEnd={{ base: 26 /* , md: 19, lg: 28 */ }}
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
                    Your Email Address*
                  </FormLabel>

                  <InputGroup>
                    <Input
                      type="email"
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
            rowEnd={{ base: 33 /* , md: 19, lg: 28 */ }}
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
                    Your full Name
                  </FormLabel>

                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="E.g. Jonathan"
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
                label={"Proceed to next step"}
                size="lg"
                type="submit"
              />
            </Box>
          </GridItem>
        </Grid>
      </Form>
    </Formik>
  );
}
