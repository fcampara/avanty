import { HTMLAttributes } from "react"

export type ButtonVariant = "text" | "outlined"
type ButtonSize = "small" | "medium"

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export type ButtonStyleProps = Pick<ButtonProps, "variant" | "size">
