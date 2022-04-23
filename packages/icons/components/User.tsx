import { forwardRef, ForwardRefRenderFunction } from "react"
import { IconSVG } from "../types/icons"

const User: ForwardRefRenderFunction<SVGElement, IconSVG> = (props, ref) => (
  <svg
    ref={ref}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="11.5" cy="9.5" r="3" stroke="#022B54" />
    <path
      d="M16.5 18C16.5 15.2386 14.5376 12.5 11.5 12.5C8.46243 12.5 6.5 15.2386 6.5 18"
      stroke="#022B54"
    />
    <path
      d="M14.5 13.5C14.5 13.5 13.8146 15.5 11.5 15.5C9.18538 15.5 8.5 13.5 8.5 13.5"
      stroke="#022B54"
    />
  </svg>
)

export default forwardRef(User)
