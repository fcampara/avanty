import { forwardRef, ForwardRefRenderFunction } from "react";
import * as Styled from "./styles";
import { SelectProps } from "./types";

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  props,
  ref
) => {
  const { children, label, options, placeholder, ...restProps } = props;
  return (
    <Styled.Fieldset>
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
          <option value={value}>{label}</option>
        ))}
      </Styled.Select>
    </Styled.Fieldset>
  );
};

export default forwardRef(Select);
