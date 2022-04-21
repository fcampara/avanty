import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.neutral.transparent};
  font-weight: ${({ theme }) => theme.typography.weight["semi-bold"]};
  font-size: 14px;
  padding: 8px 40px;
`;
