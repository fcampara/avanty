import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import tokens from "./tokens";
import { ThemeProviderProps } from "./types";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={tokens}>{children}</EmotionThemeProvider>;
};
