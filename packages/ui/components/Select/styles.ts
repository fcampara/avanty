import styled from "@emotion/styled"
import * as StyledInput from "../Input/styles"

export const Fieldset = styled(StyledInput.Fieldset)``
export const Label = styled(StyledInput.Label)`
  cursor: pointer;
`
export const Select = styled(StyledInput.Input.withComponent("select"))`
  cursor: pointer;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  &:required:invalid {
    ${({ theme }) => StyledInput.PlaceholderStyle(theme)}
  }

  & > option[value=""][disabled] {
    display: none;
  }
`
