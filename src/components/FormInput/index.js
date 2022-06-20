import { InputWrapper, Select } from "./FormInput.styles";

export const Input = ({ type, value, ...rest }) => (
  <InputWrapper type={type} {...rest} />
);
export const Dropdown = ({ type, options = [], ...rest }) => (
  <Select type={type} {...rest}>
    <option value={0}>Select</option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </Select>
);
