import PropTypes from "prop-types";
import { StyledButton } from "./Button.styles";

const Button = ({ text, ...props }) => {
  return (
    <StyledButton value={text} {...props}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
