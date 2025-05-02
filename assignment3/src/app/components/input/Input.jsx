import PropTypes from "prop-types";
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

Input.propTypes = {
  text: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
