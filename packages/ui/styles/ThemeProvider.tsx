import {
  css,
  Global,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";
import { font } from "./font";
import { reset } from "./reset";
import tokens from "./tokens";
import { ThemeProviderProps } from "./types";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <>
      <Global
        styles={css`
        ${font}
        ${reset}
        `}
      />
      <EmotionThemeProvider theme={tokens}>{children}</EmotionThemeProvider>
    </>
  );
};
