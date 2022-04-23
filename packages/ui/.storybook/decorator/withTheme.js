import { ThemeProvider } from "../../styles/ThemeProvider";
import { font } from "../../styles/font"
import { Global } from "@emotion/react";

export const withTheme = Story => (
  <ThemeProvider>
    <Global styles={font} />
    <Story />
  </ThemeProvider>
)
