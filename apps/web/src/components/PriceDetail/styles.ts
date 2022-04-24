import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Low } from "icons"
import { PriceDetailSeasonArrowProps } from "./types"

export const Arrow = styled(Low)<PriceDetailSeasonArrowProps>`
  ${({ season }) => {
    if (season === "high")
      return css`
        transform: rotate(180deg);
      `
  }}
`

export const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
`

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.primary.medium};
  font-weight: ${({ theme }) => theme.typography.weight["semi-bold"]};
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.01em;
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
