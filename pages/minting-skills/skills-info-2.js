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
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import ButtonGradient from "../../components/general/gradient-button";
import { useUserInfo } from "../../context/user-context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { chakraStyles } from "../../components/styles/react-select";
import { Select } from "chakra-react-select";
import CustomSelect from "../../components/general/custom-select";
import { SoftwareDevelopment } from "../../components/options-data/options";

export default function PersonalInfo() {
  const { skillInfo, createSkillInfo, setProgress } = useUserInfo();
  const [skillName, setSkillName] = useState(skillInfo.skillName);
  const [skillLevel, setSkillLevel] = useState(skillInfo.skillLevel);
  const [value, setValue] = useState(70);

  const handleChange = (value) => setValue(value);
  useEffect(() => {
    setProgress(60);
  }, [setProgress]);

  const router = useRouter();

  const handleSubmit = (skillName, skillLevel) => {
    createSkillInfo(skillName, skillLevel);
  };

  const formik = useFormik({
    initialValues: skillInfo,
    onSubmit: (values) => {
      setSkillName(values.skillName);
      setSkillLevel(values.skillLevel);
      console.log(skillInfo);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} enableReinitialize>
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
          <FormControl>
            <FormLabel
              fontSize={"md"}
              fontFamily={"Roboto"}
              fontWeight={"regular"}
            >
              Search your skill*
            </FormLabel>

            <CustomSelect
              className="input"
              onChange={(value) =>
                formik.setFieldValue("skillName", value.value)
              }
              value={formik.values.skillName}
              options={SoftwareDevelopment}
            />

            <FormErrorMessage>{formik.errors.job}</FormErrorMessage>
          </FormControl>
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
              size="lg"
              type="submit"
            />
          </Box>
        </GridItem>
      </Grid>
    </form>
  );
}
