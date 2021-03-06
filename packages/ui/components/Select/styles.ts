import styled from "@emotion/styled"
import * as StyledInput from "../Input/styles"

export const SelectClassname = "avanty-select"
export const Fieldset = styled(StyledInput.Fieldset)``
export const Label = styled(StyledInput.Label)`
  cursor: pointer;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 8px;
  justify-content: space-between;

  & > select {
    flex: 1;
  }
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
