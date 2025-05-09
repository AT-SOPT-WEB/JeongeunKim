import styled from "@emotion/styled";
import { fadeInUp } from "../../styles/animations";

export const LogBox = styled.div`
  width: 40rem;
  padding: 12px 24px;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  animation: ${fadeInUp} 0.3s ease-out;
`;

export const LogBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
