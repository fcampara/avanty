import { ThemeProvider } from "../../styles/ThemeProvider";

export const withTheme = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);
