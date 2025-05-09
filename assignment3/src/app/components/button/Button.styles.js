import styled from "@emotion/styled";

export const StyledButton = styled("button")(({ isSelected, theme }) => ({
  backgroundColor: isSelected ? theme.colors.primary : theme.colors.background,
  color: theme.colors.text,
  border: "none",
  padding: "12px 24px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.25s",
  "&:hover": {
    backgroundColor: theme.colors.primary,
  },
}));
