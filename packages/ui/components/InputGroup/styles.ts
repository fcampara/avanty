import styled from "@emotion/styled"
import * as StyledInput from "../Input/styles"
import { SelectClassname } from "../Select/styles"

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  flex: 1;

  & > .${StyledInput.InputClassname}, & > .${SelectClassname} {
    flex: 1;
    border: none;
    position: relative;
    z-index: 1;
  }

  .${StyledInput.InputClassname}, .${SelectClassname} {
    &:focus-within:after,
    &:hover:after {
      display: none;
    }
  }

  & > .${StyledInput.InputClassname}:not(:nth-last-of-type(1)):after,
  & > .${SelectClassname}:not(:nth-last-of-type(1)):after {
    content: "";
    position: absolute;
    height: 30px;
    width: 1px;
    right: 0;
    background-color: ${({ theme }) => theme.colors.primary["extra-light"]};
    border-radius: 1px;
  }

  & > .${StyledInput.InputClassname}:nth-of-type(1),
  & > .${SelectClassname}:nth-of-type(1) {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &
    > .${StyledInput.InputClassname}:not(:nth-of-type(1)):not(:nth-last-of-type(1)),
  & > .${SelectClassname}:not(:nth-of-type(1)):not(:nth-last-of-type(1)) {
    border-right: none;
    border-left: none;
    border-radius: 0;
  }

  & > .${StyledInput.InputClassname}:nth-last-of-type(1),
  & > .${SelectClassname}:nth-last-of-type(1) {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const Fieldset = styled.div`
  z-index: 0;
  position: absolute;
  inset: 0 0 0;
  border-radius: 3px;
  border-color: ${({ theme }) => theme.colors.primary["extra-light"]};
  border-style: solid;
  height: 50px;
  margin: 0;
  pointer-events: none;
  padding: 0;
  border-width: 1px;
  min-width: 0%;
`
