import { forwardRef, ForwardRefRenderFunction } from "react"
import * as Styled from "./styles"
import { InputGroupProps } from "./types"

const InputGroup: ForwardRefRenderFunction<HTMLDivElement, InputGroupProps> = (
  props,
  ref,
) => {
  const { children } = props
  return (
    <Styled.Wrapper ref={ref}>
      {children}
      <Styled.Fieldset />
    </Styled.Wrapper>
  )
}

export default forwardRef(InputGroup)
