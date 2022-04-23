import { forwardRef, ForwardRefRenderFunction } from "react"
import { IconSVG } from "../types/icons"

const ChevronDrown: ForwardRefRenderFunction<SVGElement, IconSVG> = (
  props: IconSVG,
) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity="0.3"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 9.49112L11.4026 6.18306C11.6536 5.93898 12.0607 5.93898 12.3117 6.18306C12.5628 6.42714 12.5628 6.82286 12.3117 7.06694L8.45457 10.8169C8.20352 11.061 7.79648 11.061 7.54543 10.8169L3.68829 7.06694C3.43724 6.82286 3.43724 6.42714 3.68829 6.18306C3.93934 5.93898 4.34637 5.93898 4.59743 6.18306L8 9.49112Z"
      fill="#022B54"
    />
  </svg>
)

export default forwardRef(ChevronDrown)
