import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export const LogButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  color: ${colors.primary};
  padding: 0.5rem 1rem;
  background-color: ${colors.primary}4D;
  border-radius: calc(infinity * 1px);
  border: 1px solid ${colors.primary};
  display: flex;
  gap: 1rem;
`;

export const LogButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40rem;
`;

export const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
