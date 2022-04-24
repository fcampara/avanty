import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { AvantyTheme } from "../../types/theme"
import { SeparatorProps } from "./types"

const Colors = {
  primary: (theme: AvantyTheme) => css`
    background-color: ${theme.colors.primary.medium};
    opacity: 0.3;
  `,
  accent: (theme: AvantyTheme) => css`
    background-color: ${theme.colors.accent.light};
  `,
}

export const Separator = styled.hr<SeparatorProps>`
  width: 3px;
  height: 3px;
  display: inline-block;
  margin: 0 6px;
  border: none;
  border-radius: 50%;
  ${({ theme, color = "primary" }) => Colors[color](theme)};
`
