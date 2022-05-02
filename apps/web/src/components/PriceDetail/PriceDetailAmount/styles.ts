import styled from "@emotion/styled"

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.primary.medium};
  font-weight: ${({ theme }) => theme.typography.weight["semi-bold"]};
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.01em;
`
