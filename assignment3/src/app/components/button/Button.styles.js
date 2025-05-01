import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export const StyledButton = styled("button")(({ isSelected }) => ({
  backgroundColor: isSelected ? colors.primary : colors.background,
  color: colors.text,
  border: "none",
  padding: "12px 24px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.25s",
  "&:hover": {
    backgroundColor: colors.primary,
  },
}));
