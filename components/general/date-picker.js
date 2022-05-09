import React from "react";
import { useField, useFormikContext } from "formik";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {
  FormControl,
  FormLabel,
  InputGroup,
  FormErrorMessage,
} from "@chakra-ui/react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function DatePickerField({ label, ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <FormControl color={"black"}>
      <FormLabel
        fontSize={"sm"}
        fontFamily={"Roboto"}
        fontWeight={"regular"}
        color={"whiteAlpha.900"}
      >
        {label}
      </FormLabel>
      <DatePicker
        {...field}
        {...props}
        dateFormat="yyyy/MM/dd"
        showYearDropdown
        placeholderText="Select Date"
        yearDropdownItemNumber={15}
        scrollableYearDropdown
        selected={field.value}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
      />
    </FormControl>
  );
}
