import { forwardRef, ForwardRefRenderFunction } from "react"
import * as Styled from "./styles"
import { ButtonProps } from "./types"

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  props,
  ref,
) => {
  const {
    children,
    color,
    size = "medium",
    variant = "outlined",
    ...restProps
  } = props

  return (
    <Styled.Button
      color={color}
      size={size}
      variant={variant}
      {...restProps}
      ref={ref}
    >
      {children}
    </Styled.Button>
  )
}

export default forwardRef(Button)
