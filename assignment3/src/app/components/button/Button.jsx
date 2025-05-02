import PropTypes from "prop-types";
import { StyledButton } from "./Button.styles";

const Button = ({ text, onClickButton, ...props }) => {
  return (
    <StyledButton onClick={onClickButton} value={text} {...props}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default Button;
