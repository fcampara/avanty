import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Low } from "icons"
import { PriceDetailSeasonArrowProps } from "../types"

export const Arrow = styled(Low)<PriceDetailSeasonArrowProps>`
  ${({ season }) => {
    if (season === "high")
      return css`
        transform: rotate(180deg);
      `
  }}
`
