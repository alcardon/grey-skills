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

import style from "../../styles/Home.module.css";

import ButtonGradient from "../../components/general/gradient-button";
import { useUserInfo } from "../../context/user-context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { chakraStyles } from "../../components/styles/react-select";
import { Select } from "chakra-react-select";
import SkillSelect from "../../components/general/skillSelect";
import { getSkills } from "../../components/options-data/options";
import { Field, Form, Formik } from "formik";
import SmallAvatar from "../../components/general/small-avatar";

export default function PersonalInfo() {
  const { skillInfo, createSkillInfo, setProgress, industryInfo } =
    useUserInfo();
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
    <Flex height={{ base: "90vh", md: "660px" }}>
      <Formik
        initialValues={skillInfo}
        enableReinitialize
        validator={() => ({})}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form className={style.form}>
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
              height={{ base: "100%", md: "660px" }}
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
                  fontWeight={"normal"}
                >
                  Mint your skill
                </Heading>
                <Text color="gray.300" textAlign={"left"} fontSize={16} pt={2}>
                  Search for a skill you want to mint.{" "}
                </Text>
              </GridItem>

              <GridItem
                rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
                colSpan={{ base: 20 /* , md: 20, lg: 48  */ }}
                rowEnd={{ base: 26 /* , md: 19, lg: 28 */ }}
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
                    options={getSkills(
                      industryInfo.industry,
                      industryInfo.industryRole
                    )}
                    component={SkillSelect}
                    placeholder="E.g. Data Analysis"
                    isMulti={false}
                    needSlider={true}
                    setIsSliderDisabled={setIsSliderDisabled}
                    setSkillName={setSkillName}
                  />
                </FormControl>
              </GridItem>

              <GridItem
                rowSpan={{ base: 10 /* , md: 6, lg: 25 */ }}
                colSpan={{ base: 10 /* , md: 20, lg: 48  */ }}
                rowEnd={{ base: 20 /* , md: 19, lg: 28 */ }}
                colStart={{ base: 8 /* , md: 1, lg: 1 */ }}
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
                rowEnd={{ base: 33 /* , md: 19, lg: 28 */ }}
                colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
                zIndex={6}
              >
                <FormControl>
                  <FormLabel
                    fontSize={"13px"}
                    fontFamily={"Roboto"}
                    fontWeight={"regular"}
                    color={"gray.200"}
                  >
                    Move the slider to indicate your proficiency in this skill:
                  </FormLabel>
                </FormControl>
              </GridItem>
              <GridItem
                rowSpan={{ base: 2 /* , md: 6, lg: 25 */ }}
                colSpan={{ base: 13 /* , md: 20, lg: 48  */ }}
                rowEnd={{ base: 35 /* , md: 19, lg: 28 */ }}
                colStart={{ base: 3 /* , md: 1, lg: 1 */ }}
                zIndex={6}
              >
                <Flex align={"center"} h={"100%"}>
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
                    </HStack>
                  </InputGroup>
                </Flex>
                {/* <FormErrorMessage>{meta.error}</FormErrorMessage> */}
              </GridItem>
              <GridItem
                rowSpan={{ base: 4 /* , md: 6, lg: 25 */ }}
                colSpan={{ base: 5 /* , md: 20, lg: 48  */ }}
                rowEnd={{ base: 36 /* , md: 19, lg: 28 */ }}
                colStart={{ base: 18 /* , md: 1, lg: 1 */ }}
                zIndex={6}
              >
                <Flex align={"center"} h={"100%"}>
                  <NumberInput
                    size="sm"
                    maxW={{ base: "100%", md: "100%" }}
                    value={skillLevel}
                    onChange={handleChange}
                    fontSize={"md"}
                    alignContent={"center"}
                    justify={"center"}
                    isDisabled={isSliderDisabled}
                    w={"100%"}
                  >
                    <NumberInputField
                      bgColor={"white"}
                      color={"gray.800"}
                      pl={{ base: "15px", md: "15px" }}
                      fontSize={{ base: "14px", md: "14px" }}
                      borderRadius={"md"}
                      w={"100%"}
                    />
                  </NumberInput>
                </Flex>
                {/* <ButtonGradient label={"Continue"}></ButtonGradient> */}
              </GridItem>
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
                    size="md"
                    type="submit"
                    isDisabled={isSliderDisabled}
                  />
                </Box>
              </GridItem>
            </Grid>
          </Form>
        )}
      </Formik>
    </Flex>
  );
}
