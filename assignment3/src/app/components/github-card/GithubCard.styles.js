import styled from "@emotion/styled";
import { colors } from "../../constants/colors";
import { fadeInUp } from "../../styles/animations";

export const Card = styled.div`
  position: relative;
  color: white;
  padding: 2rem 3rem;
  background-color: ${colors.background};
  border-radius: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  animation: ${fadeInUp} 0.3s ease-out;
`;

export const Avatar = styled.img`
  width: 12rem;
  border-radius: calc(infinity * 1px);
`;

export const Chip = styled.div`
  padding: 0.5rem 1rem;
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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
