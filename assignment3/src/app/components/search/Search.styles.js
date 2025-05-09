import styled from "@emotion/styled";

export const LogButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary}4D;
  border-radius: 9999px; /* calc(infinity * 1px) 대신 안전한 값 */
  border: 1px solid ${({ theme }) => theme.colors.primary};
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
