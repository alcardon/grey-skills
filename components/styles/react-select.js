export const chakraStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "whiteAlpha.900",
    borderColor: "gray.100",
    borderRadius: "md",
  }),
  input: (provided, state) => ({
    ...provided,
    color: "black",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    color: "gray.800",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "gray.400",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    borderColor: "gray.300",
    bgColor: "gray.200",
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    color: "red",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "black",
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: "md",
  }),
};
