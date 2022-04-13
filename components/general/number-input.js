import { useState } from "react";
import {
  Box,
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
  Center,
} from "@chakra-ui/react";

import { MdGraphicEq } from "react-icons/md";

export default function SliderInput() {
  const [value, setValue] = useState(0);
  const handleChange = (value) => setValue(value);

  return (
    <HStack direction={"row"}>
      <Slider
        aria-label="slider-ex-4"
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}
        defaultValue={70}
      >
        <SliderTrack bg="green.100">
          <SliderFilledTrack bg="green.400" />
        </SliderTrack>
        <SliderThumb boxSize={6} zIndex={0}>
          <Box color="green.400" as={MdGraphicEq}>
            {value}
          </Box>
        </SliderThumb>
      </Slider>
      <NumberInput
        size="md"
        maxW={{ base: "25%", md: "18%" }}
        value={value}
        onChange={handleChange}
        fontSize={"sm"}
        alignContent={"center"}
        justify={"center"}
      >
        <Center>
          <NumberInputField
            px="0"
            pl="10px"
            fontSize={{ base: "12px", md: "16px" }}
          />
        </Center>
      </NumberInput>
    </HStack>
  );
}
