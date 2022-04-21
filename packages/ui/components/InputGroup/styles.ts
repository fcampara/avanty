import styled from "@emotion/styled/macro";
import * as StyledInput from "../Input/styles";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: fit-content;

  & > ${StyledInput.Fieldset} {
    flex: 1;
    border: none;
    position: relative;
    z-index: 1;
  }

   ${StyledInput.Fieldset} {
     &:focus-within:after, &:hover:after {
       display: none;
     }
   }

  & > ${StyledInput.Fieldset}:not(:nth-last-of-type(1)) {
    &:after {
      content: "";
      position: absolute;
      height: 30px;
      width: 1px;
      right: 0;
      background-color: ${({ theme }) => theme.colors.primary["extra-light"]};
      border-radius: 1px;
    }
  }

  & > ${StyledInput.Fieldset}:nth-of-type(1) {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > ${StyledInput.Fieldset}:not(:nth-of-type(1)):not(:nth-last-of-type(1)) {
    border-right: none;
    border-left: none;
    border-radius: 0;
  }

  & > ${StyledInput.Fieldset}:nth-last-of-type(1) {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

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
`;
