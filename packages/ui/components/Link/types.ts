import { HTMLAttributes } from "react"

export type LinkProps = HTMLAttributes<HTMLLinkElement> & {
  active?: boolean
}
