import styled from "@emotion/styled"

export const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
`

export const Information = styled.span`
  color: ${({ theme }) => theme.colors.primary.medium};
  opacity: 0.3;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
`
