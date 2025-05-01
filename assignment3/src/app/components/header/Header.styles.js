import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export const HeaderButton = styled("button")(({ isSelected }) => ({
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

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  text-align: center;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background-color: ${colors.background};
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  gap: 4px;
`;
