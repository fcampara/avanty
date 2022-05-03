import styled from "@emotion/styled"

export const Main = styled.main`
  padding-top: 40px;
  width: min(100% - 5rem, ${({ theme }) => theme.breakpoints.md});
  margin-inline: auto;
`
