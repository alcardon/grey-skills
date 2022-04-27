import {
  Image,
  Box,
  FormControl,
  FormLabel,
  Heading,
  InputGroup,
  FormErrorMessage,
  VStack,
  Grid,
  GridItem,
  Flex,
  Text,
  Textarea,
  Spacer,
} from "@chakra-ui/react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import MainBox from "../../components/layout/app-box";

import ButtonGradient from "../../components/general/gradient-button";
import { useUserInfo } from "../../context/user-context";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function PersonalInfo() {
  const { userInfo, createUser, setProgress } = useUserInfo();
  useEffect(() => {
    setProgress(40);
  }, [setProgress]);

  const router = useRouter();

  console.log("User info: ", userInfo);

  return (
    <MainBox>
      <Formik
        initialValues={userInfo}
        enableReinitialize
        validationSchema={Yup.object({
          profesionalBg: Yup.string().max(100, "Must be 45 characters or less"),
          /* .required("Required"), */
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            /*  createUser(values.profesionalBg); */
            router.push("/minting-skills/skills-info");
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
                  md: "2xl",
                }}
                color={"white"}
              >
                Hey{" "}
                <Text as={"span"} color={"#fd9193"}>
                  {userInfo.name},
                </Text>{" "}
                <br></br> tell us something about your professional journey.
              </Heading>
            </GridItem>

            <GridItem
              rowSpan={{ base: 5 /* , md: 6, lg: 25 */ }}
              colSpan={{ base: 5 /* , md: 20, lg: 48  */ }}
              rowEnd={{ base: 21 /* , md: 19, lg: 28 */ }}
              colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
              zIndex={7}
            >
              <VStack>
                {" "}
                <Image
                  pt={"2"}
                  src={"/images/minting-skills/Avatar.png"}
                  alt={"avatar"}
                  w={"80%"}
                  h={"70%"}
                ></Image>
              </VStack>
            </GridItem>
            <GridItem
              rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
              colSpan={{ base: 15 /* , md: 20, lg: 48  */ }}
              rowEnd={{ base: 21 /* , md: 19, lg: 28 */ }}
              colStart={{ base: 9 /* , md: 1, lg: 1 */ }}
              zIndex={7}
            >
              <Flex
                align={"flex-start"}
                justify={"flex-start"}
                direction={"column"}
              >
                <Heading color={"white"} fontSize={"lg"}>
                  {" "}
                  {userInfo.name}
                </Heading>{" "}
                <Spacer />
                <Text color={"gray.500"}>@{userInfo.userName}</Text>
              </Flex>
            </GridItem>
            <GridItem
              rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
              colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
              rowEnd={{ base: 27 /* , md: 19, lg: 28 */ }}
              colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
              zIndex={7}
            >
              <Field name="profesionalBg">
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
                      Give us a brief overview of your professional background:
                    </FormLabel>

                    <InputGroup>
                      <Textarea
                        placeholder="Add details here"
                        {...field}
                        _placeholder={{ color: "gray.500" }}
                        bgColor={"white"}
                        color={"black"}
                      />
                    </InputGroup>
                    <Text
                      pt={3}
                      fontSize="xs"
                      fontFamily={"Roboto"}
                      color={"gray.500"}
                    >
                      Maximum words: 100
                    </Text>
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
              zIndex={7}
            ></GridItem>

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
    </MainBox>
  );
}
