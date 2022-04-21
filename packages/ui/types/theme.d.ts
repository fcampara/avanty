type BreakpointSizes = "xs" | "sm" | "md" | "lg" | "xl";

type ColorPaths = "primary" | "netraul";

type Breakpoints = {
  [k in BreakpointSizes]: string;
};

type ColorPrimary = {
  light: string;
  "extra-light": string;
  medium: string;
};

type ColorNeutral = {
  black: string;
  white: string;
};

export type AvantyTheme = {
  breakpoints: Breakpoints;
  colors: {
    primary: ColorPrimary;
    neutral: COlorNeutral;
  };
};
