import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

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
  gap: 2rem;
  padding: 2rem;
  background-color: ${colors.background};
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
