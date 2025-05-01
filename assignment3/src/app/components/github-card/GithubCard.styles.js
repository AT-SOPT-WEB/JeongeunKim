import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export const Card = styled.div`
  position: relative;
  color: white;
  padding: 2rem 4rem;
  background-color: ${colors.background};
  border-radius: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  gap: 4rem;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 18rem;
  border-radius: calc(infinity * 1px);
`;

export const Chip = styled.div`
  padding-inline: 1rem;
  border-radius: 8px;
  color: ${colors.primary};
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
