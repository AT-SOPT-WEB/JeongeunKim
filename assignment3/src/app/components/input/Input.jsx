import { StyledInput } from "./Input.styles";

const Input = ({ text, handleInputChange, placeholder, ...props }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={text}
      onChange={handleInputChange}
      {...props}
    />
  );
};

export default Input;
