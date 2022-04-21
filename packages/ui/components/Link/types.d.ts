import { HTMLAttributes } from "react";

export interface LinkProps extends HTMLAttributes<HTMLLinkElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}
