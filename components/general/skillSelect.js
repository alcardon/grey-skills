import { FieldProps } from "formik";
import React from "react";

import { chakraStyles } from "../../components/styles/react-select";
import { Select } from "chakra-react-select";
export const SkillSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
  needSlider = false,
  setIsSliderDisabled,
  setSkillName,
}) => {
  const onChange = (option) => {
    setSkillName(option.value);
    if (needSlider) {
      setIsSliderDisabled(false);
    }
    form.setFieldValue(
      field.name,
      isMulti ? option.map((item) => item.value) : option.value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : "";
    }
  };

  return (
    <Select
      chakraStyles={chakraStyles}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
    />
  );
};

export default SkillSelect;
