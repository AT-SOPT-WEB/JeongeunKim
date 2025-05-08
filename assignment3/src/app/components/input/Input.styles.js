import styled from "@emotion/styled";

export const StyledInput = styled.input`
  font-size: 1em;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary}4D;
  border-radius: 8px;
  width: 40rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
