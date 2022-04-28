import React from "react";
import { chakraStyles } from "../../components/styles/react-select";
import { Select } from "chakra-react-select";

export default function CustomSelect({ onChange, options, value }) {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <div>
      <Select
        value={defaultValue(options, value)}
        chakraStyles={chakraStyles}
        onChange={(value) => {
          onChange(value);
        }}
        options={options}
      />
    </div>
  );
}
