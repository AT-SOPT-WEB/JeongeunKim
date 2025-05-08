import styled from "@emotion/styled";

export const ErrorText = styled.p`
  color: red;
`;

export const ResultText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
`;
