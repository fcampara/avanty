import { ClassNames } from "@emotion/react"
import { forwardRef, ForwardRefRenderFunction } from "react"
import * as Styled from "./styles"
import { SelectProps } from "./types"

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  props,
  ref,
) => {
  const { label, options, placeholder, className, ...restProps } = props
  return (
    <ClassNames>
      {({ cx }) => (
        <Styled.Fieldset className={cx([className, Styled.SelectClassname])}>
          <Styled.Label>{label}</Styled.Label>
          <Styled.Select
            required
            ref={ref}
            placeholder={placeholder}
            {...restProps}
          >
            <option value="" disabled selected>
              {placeholder}
            </option>
            {options?.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Styled.Select>
        </Styled.Fieldset>
      )}
    </ClassNames>
  )
}

export default forwardRef(Select)
