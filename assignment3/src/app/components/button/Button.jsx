import { StyledButton } from "./Button.styles";

const Button = ({ text, onClickButton, ...props }) => {
  return (
    <StyledButton onClick={onClickButton} value={text} {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
