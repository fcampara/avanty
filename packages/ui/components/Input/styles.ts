import styled from "@emotion/styled";

export const Fieldset = styled.fieldset`
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary["extra-light"]};
  transition-property: border-color, box-shadow;
  transition-duration: ${({ theme }) => theme.motion.velocity.fast};
  height: 50px;
  padding: 8px 15px;
  gap: 2px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent["extra-light"]};
    box-shadow:  ${({ theme }) =>
      theme.colors.accent["extra-light"]} 0px 0px 0px 1px inset;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent.light};
    box-shadow:  ${({ theme }) =>
      theme.colors.accent.light} 0px 0px 0px 1px inset;
  }
`;
export const Label = styled.label`
  line-height: 13px;
  font-size: 11px;
  letter-spacing: -0.01em;
  cursor: text;
  outline: none;
  color: ${({ theme }) => theme.colors.accent.medium};
`;

export const Input = styled.input`
  font-style: normal;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.primary.medium};
  border: none;
  outline: none;
  padding: 0;

  &::placeholder {
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.primary.medium};
    opacity: 0.3;
  }
`;
