import {
  Image,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  FormErrorMessage,
  VStack,
  Alert,
} from "@chakra-ui/react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import MainBox from "../../components/layout/app-box";

import { useUserInfo } from "../../context/user-context";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function PersonalInfo() {
  const initialValues = {
    name: "",
    userName: "",
    email: "",
  };

  const { userInfo, createUser } = useUserInfo();
  const router = useRouter();

  console.log("User info: ", userInfo);

  return (
    <MainBox>
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
            router.push("/minting-skills/industry-info");
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Box display={"table"} justifyContent={"center"} align={"center"}>
              {" "}
              <Heading
                display={"table-cell"}
                verticalAlign="middle"
                fontSize={{
                  base: "xl",
                  md: "2xl",
                }}
              >
                Let&apos;s start with your personal information
              </Heading>
            </Box>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Box>
                <VStack spacing={5}>
                  <Image
                    src={"/images/Group1.png"}
                    boxSize="150px"
                    m={5}
                    alt={"Just a robot"}
                  ></Image>
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
                        <FormLabel fontSize={"sm"}>Name</FormLabel>

                        <InputGroup>
                          <InputLeftElement>
                            <BsPerson />
                          </InputLeftElement>

                          <Input
                            type="text"
                            placeholder="Your Name"
                            {...field}
                          />
                        </InputGroup>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="userName">
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <FormControl isInvalid={meta.error && meta.touched}>
                        <FormLabel fontSize={"sm"}>Username</FormLabel>

                        <InputGroup>
                          <InputLeftElement>
                            <AiOutlineRobot />
                          </InputLeftElement>
                          <Input
                            type="text"
                            placeholder="your user"
                            {...field}
                          />
                        </InputGroup>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <FormControl isInvalid={meta.error && meta.touched}>
                        <FormLabel fontSize={"sm"}>Email</FormLabel>

                        <InputGroup>
                          <InputLeftElement>
                            <MdEmail />
                          </InputLeftElement>

                          <Input
                            type="email"
                            placeholder="Your email"
                            {...field}
                          />
                        </InputGroup>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </VStack>
                <Box pt={8} pb={3}>
                  <Button
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: "blue.500",
                    }}
                    isFullWidth
                    rounded="full"
                    type="submit"
                  >
                    Continue
                  </Button>
                </Box>
              </Box>
            </Stack>
          </VStack>
        </Form>
      </Formik>
    </MainBox>
  );
}
