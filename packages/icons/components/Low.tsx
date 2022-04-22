import { forwardRef, ForwardRefRenderFunction } from "react";
import { IconSVG } from "../types/icons";

const Low: ForwardRefRenderFunction<SVGElement, IconSVG> = (props, ref) => (
  <svg
    ref={ref}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="0.3">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.7067 9.20419L8.00154 12.5L4.29492 9.20434L4.95939 8.45702L7.5 10.716V4H8.5V10.7182L11.0421 8.45701L11.7067 9.20419Z"
        fill="#022B54"
      />
    </g>
  </svg>
);

export default forwardRef(Low);
