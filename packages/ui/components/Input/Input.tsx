import { forwardRef, ForwardRefRenderFunction } from "react"
import * as Styled from "./styles"
import { InputProps } from "./types"

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref,
) => {
  const { label, id, ...restProps } = props
  return (
    <Styled.Fieldset>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
      <Styled.Input id={id} ref={ref} {...restProps} />
    </Styled.Fieldset>
  )
}

export default forwardRef(Input)
