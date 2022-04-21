import { css } from "@emotion/react";

export const reset = css`
  html * {
    font-size: 14px;
    font-family: Source Sans Pro;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
`;
