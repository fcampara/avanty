import { HTMLAttributes } from "react"

type SeparatorColor = "primary" | "accent"

export interface SeparatorProps
  extends Omit<HTMLAttributes<HTMLHRElement>, "color"> {
  color?: SeparatorColor
}
