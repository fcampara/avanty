type BreakpointSizes = "xs" | "sm" | "md" | "lg" | "xl"

type TypographyWeights = "regular" | "light" | "semi-bold"

type ColorPaths = "primary" | "netraul"

type MotionVelocity = "fast"

type Breakpoints = {
  [k in BreakpointSizes]: string
}

type ColorPrimary = {
  light: string
  "extra-light": string
  medium: string
}

type ColorAccent = {
  light: string
  "extra-light": string
  medium: string
  dark: string
}

type ColorNeutral = {
  "extra-light": string
  transparent: string
  black: string
  white: string
  "extra-dark": string
}

export type AvantyTheme = {
  breakpoints: Breakpoints
  colors: {
    primary: ColorPrimary
    accent: ColorAccent
    neutral: ColorNeutral
  }
  typography: {
    fontFamily: string
    weight: {
      [k in TypographyWeights]: string
    }
  }
  motion: {
    velocity: {
      [k in MotionVelocity]: string
    }
  }
}
