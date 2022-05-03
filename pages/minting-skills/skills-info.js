import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  FormErrorMessage,
  Grid,
  Center,
  GridItem,
  Text,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  NumberInput,
  SliderThumb,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { MdGraphicEq } from "react-icons/md";
import { useFormik } from "formik";

import * as Yup from "yup";

import ButtonGradient from "../../components/general/gradient-button";
import { useUserInfo } from "../../context/user-context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { chakraStyles } from "../../components/styles/react-select";
import { Select } from "chakra-react-select";
import SkillSelect from "../../components/general/skillSelect";
import { SoftwareDevelopment } from "../../components/options-data/options";
import { Field, Form, Formik } from "formik";
import SmallAvatar from "../../components/general/small-avatar";

export default function PersonalInfo() {
  const { skillInfo, createSkillInfo, setProgress } = useUserInfo();
  const [skillName, setSkillName] = useState(
    skillInfo.skillName ? skillInfo.skillName : ""
  );
  const [skillLevel, setSkillLevel] = useState(skillInfo.skillLevel);
  const [isSliderDisabled, setIsSliderDisabled] = useState(true);
  const handleChange = (value) => setSkillLevel(value);
  useEffect(() => {
    setProgress(60);
    if (skillInfo.skillName !== "") {
      setIsSliderDisabled(false);
    }
  }, [skillInfo, setProgress, setIsSliderDisabled]);

  const router = useRouter();

  const onSubmit = (values, actions) => {
    setTimeout(() => {
      createSkillInfo(values.skillName, skillLevel);
      router.push("/minting-skills/learning-work-exp");
      actions.setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={skillInfo}
      enableReinitialize
      validator={() => ({})}
      onSubmit={onSubmit}
    >
      {(props) => (
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
              display={skillName !== "" ? "inline-grid" : "none"}
            >
              <Center>
                {" "}
                <Text
                  color="gray.600"
                  textAlign={"left"}
                  fontSize={14}
                  pt={2}
                  display={skillName == "" ? "inline-block" : "none"}
                >
                  Your Skill badge will appear here.
                </Text>
              </Center>
            </GridItem>

            <GridItem
              rowSpan={{ base: 7 /* , md: 6, lg: 25 */ }}
              colSpan={{ base: 8 /* , md: 20, lg: 48  */ }}
              rowEnd={{ base: 21 /* , md: 19, lg: 28 */ }}
              colStart={{ base: 9 /* , md: 1, lg: 1 */ }}
              zIndex={7}
              display={skillName == "" ? "none" : "inline-block"}
            >
              <Center w={"100%"} h={"100%"}>
                <SmallAvatar skillName={skillName}></SmallAvatar>
              </Center>
            </GridItem>

            <GridItem
              rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
              colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
              rowEnd={{ base: 27 /* , md: 19, lg: 28 */ }}
              colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
              zIndex={7}
            >
              <FormControl>
                <FormLabel
                  fontSize={"md"}
                  fontFamily={"Roboto"}
                  fontWeight={"regular"}
                >
                  Search your skill*
                </FormLabel>
                <Field
                  name="skillName"
                  options={SoftwareDevelopment}
                  component={SkillSelect}
                  placeholder="Select a language..."
                  isMulti={false}
                  needSlider={true}
                  setIsSliderDisabled={setIsSliderDisabled}
                  setSkillName={setSkillName}
                />
              </FormControl>
            </GridItem>

            <GridItem
              rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
              colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
              rowEnd={{ base: 34 /* , md: 19, lg: 28 */ }}
              colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
              zIndex={6}
            >
              <FormControl>
                <FormLabel
                  fontSize={"md"}
                  fontFamily={"Roboto"}
                  fontWeight={"regular"}
                  color={"gray.200"}
                >
                  How experienced are you in this skill?
                </FormLabel>

                <InputGroup>
                  <HStack direction={"row"} spacing={7} w={"100%"}>
                    <Slider
                      focusThumbOnChange={false}
                      value={skillLevel}
                      onChange={handleChange}
                      defaultValue={skillLevel}
                      isDisabled={isSliderDisabled}
                    >
                      <SliderTrack bg={"gray.100"}>
                        <SliderFilledTrack bgGradient="linear(to-r,#4b0da9, #fd9193)" />
                      </SliderTrack>
                      <SliderThumb boxSize={4} zIndex={0} />
                    </Slider>

                    <NumberInput
                      size="sm"
                      maxW={{ base: "25%", md: "18%" }}
                      value={skillLevel}
                      onChange={handleChange}
                      fontSize={"md"}
                      alignContent={"center"}
                      justify={"center"}
                      isDisabled={isSliderDisabled}
                    >
                      <NumberInputField
                        bgColor={"white"}
                        color={"gray.800"}
                        pl="25px"
                        fontSize={{ base: "14px", md: "16px" }}
                        borderRadius={"md"}
                      />
                    </NumberInput>
                  </HStack>
                </InputGroup>
                {/* <FormErrorMessage>{meta.error}</FormErrorMessage> */}
              </FormControl>
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
                  isDisabled={isSliderDisabled}
                />
              </Box>
            </GridItem>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
