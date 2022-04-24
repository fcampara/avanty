import { ClassNames } from "@emotion/react"
import { forwardRef, ForwardRefRenderFunction } from "react"
import * as Styled from "./styles"
import { InputProps } from "./types"

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref,
) => {
  const { label, id, className, ...restProps } = props
  return (
    <ClassNames>
      {({ cx }) => (
        <Styled.Fieldset className={cx(Styled.InputClassname, className)}>
          <Styled.Label htmlFor={id}>{label}</Styled.Label>
          <Styled.Input id={id} ref={ref} {...restProps} />
        </Styled.Fieldset>
      )}
    </ClassNames>
  )
}

export default forwardRef(Input)
