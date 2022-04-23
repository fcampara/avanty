import { forwardRef, ForwardRefRenderFunction } from "react"
import { IconSVG } from "../types/icons"

const Rooms: ForwardRefRenderFunction<SVGElement, IconSVG> = (props, ref) => (
  <svg
    ref={ref}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="11" r="0.5" stroke="#022B54" />
    <path d="M17 17.5H5" stroke="#022B54" />
    <path d="M14.5 18V6.5H7.5V18" stroke="#022B54" />
  </svg>
)

export default forwardRef(Rooms)