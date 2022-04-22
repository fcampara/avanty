import { forwardRef, ForwardRefRenderFunction } from "react";
import { IconSVG } from "../types/icons";

const ChevronUp: ForwardRefRenderFunction<SVGElement, IconSVG> = (
  props,
  ref
) => (
  <svg
    ref={ref}
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
      d="M8 6.50888L4.59743 9.81694C4.34637 10.061 3.93934 10.061 3.68829 9.81694C3.43724 9.57286 3.43724 9.17714 3.68829 8.93306L7.54543 5.18306C7.79648 4.93898 8.20352 4.93898 8.45457 5.18306L12.3117 8.93306C12.5628 9.17714 12.5628 9.57286 12.3117 9.81694C12.0607 10.061 11.6536 10.061 11.4026 9.81694L8 6.50888Z"
      fill="#022B54"
    />
  </svg>
);

export default forwardRef(ChevronUp);
