import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export const LogBox = styled.div`
  width: 40rem;
  padding: 12px 24px;
  background-color: white;
  color: ${colors.primary};
  text-align: center;
  border-radius: 12px;
  border: 1px solid ${colors.primary};
`;

export const LogBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
