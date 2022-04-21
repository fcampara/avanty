import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { AvantyTheme } from "../../types/theme";
import { ButtonStyleProps, ButtonVariant } from "./types";

const Sizes = {
  small: css`
    padding: 8px 25px;
  `,
  medium: css`
    padding: 8px 40px;
  `,
};

const Variant: {
  [k in ButtonVariant]: (theme: AvantyTheme) => SerializedStyles;
} = {
  outlined: (theme: AvantyTheme) => css`
    background-color: ${theme.colors.neutral.transparent};
    color: ${theme.colors.accent.medium};
    border-width: 2px;
    border-style: solid;
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
    background-color: ${theme.colors.neutral.transparent};
    color: ${theme.colors.accent.medium};
    border: none;

    &:hover {
      color: ${theme.colors.primary.light};
    }

    &:active {
      color: ${theme.colors.primary.medium};
    }
  `,
};

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
  ${({ theme, variant }) => variant && Variant[variant](theme)}
`;
