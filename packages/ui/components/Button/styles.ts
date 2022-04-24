import { css, SerializedStyles } from "@emotion/react"
import styled from "@emotion/styled"
import { AvantyTheme } from "../../types/theme"
import { ButtonColor, ButtonStyleProps, ButtonVariant } from "./types"

const Colors: {
  [k in ButtonColor]: {
    [s in ButtonVariant]: (theme: AvantyTheme) => SerializedStyles
  }
} = {
  accent: {
    outlined: (theme: AvantyTheme) => css`
      color: ${theme.colors.accent.medium};
      border-color: ${theme.colors.accent.medium};

      &:hover {
        color: ${theme.colors.primary.light};
        border-color: ${theme.colors.primary.light};
      }

      &:active {
        color: ${theme.colors.primary.medium};
        border-color: ${theme.colors.primary.medium};
      }
    `,
    text: (theme: AvantyTheme) => css`
      color: ${theme.colors.accent.medium};

      &:hover {
        color: ${theme.colors.primary.light};
      }

      &:active {
        color: ${theme.colors.primary.medium};
      }
    `,
  },
  primary: {
    outlined: (theme: AvantyTheme) => css`
      color: ${theme.colors.primary.medium};
      border-color: ${theme.colors.primary.medium};

      &:hover {
        color: ${theme.colors.accent.medium};
        border-color: ${theme.colors.accent.medium};
      }

      &:active {
        color: ${theme.colors.accent.dark};
        border-color: ${theme.colors.accent.dark};
      }
    `,
    text: (theme: AvantyTheme) => css`
      color: ${theme.colors.primary.medium};

      &:hover {
        color: ${theme.colors.primary.medium};
      }

      &:active {
        color: ${theme.colors.primary.medium};
      }
    `,
  },
}

const Sizes = {
  small: css`
    padding: 8px 25px;
  `,
  medium: css`
    padding: 8px 40px;
  `,
}

const Variant: {
  [k in ButtonVariant]: (
    theme: AvantyTheme,
    color: ButtonColor,
  ) => SerializedStyles
} = {
  outlined: (theme: AvantyTheme, color: ButtonColor) => css`
    background-color: ${theme.colors.neutral.transparent};
    border-width: 2px;
    border-style: solid;

    ${Colors[color].outlined(theme)}
  `,
  text: (theme: AvantyTheme, color: ButtonColor) => css`
    background-color: ${theme.colors.neutral.transparent};
    border: none;

    ${Colors[color].text(theme)}
  `,
}

export const Button = styled.button<ButtonStyleProps>`
  font-weight: ${({ theme }) => theme.typography.weight["semi-bold"]};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  height: 36px;
  cursor: pointer;
  transition: ${({ theme }) =>
    `color ${theme.motion.velocity.fast}, border-color ${theme.motion.velocity.fast}`};

  ${({ size }) => size && Sizes[size]}
  ${({ theme, variant, color = "primary" }) =>
    variant && Variant[variant](theme, color)}
`
