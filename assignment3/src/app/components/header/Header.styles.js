import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  text-align: center;
`;

export const HeaderContainer = styled.header(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  padding: "2rem",
  backgroundColor: theme.colors.background,
}));

export const HeaderButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
