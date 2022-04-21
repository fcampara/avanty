type BreakpointSizes = "xs" | "sm" | "md" | "lg" | "xl";

type TypographyWeights = "regular" | "light" | "semi-bold";

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
  transparent: string;
  black: string;
  white: string;
};

export type AvantyTheme = {
  breakpoints: Breakpoints;
  colors: {
    primary: ColorPrimary;
    neutral: ColorNeutral;
  };
  typography: {
    fontFamily: string;
    weight: {
      [k in TypographyWeights]: string;
    };
  };
  spacing: any;
};
