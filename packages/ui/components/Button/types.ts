import { HTMLAttributes } from "react"

export type ButtonVariant = "text" | "outlined"
export type ButtonColor = "accent" | "primary"
type ButtonSize = "small" | "medium"

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "color"> {
  variant?: ButtonVariant
  size?: ButtonSize
  color?: ButtonColor
}

export type ButtonStyleProps = Pick<ButtonProps, "variant" | "size" | "color">
