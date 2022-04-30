import { AvantyTheme } from "../types/theme"

const tokens: AvantyTheme = {
  breakpoints: {
    xs: "360px",
    sm: "600px",
    md: "720px",
    lg: "1024px",
    xl: "1920px",
  },
  colors: {
    accent: {
      "extra-light": "#D1EFF2",
      light: "#A3DFE6",
      medium: "#53C3D0",
      dark: "#34AEBC",
    },
    primary: {
      "extra-light": "#E8EFF5",
      light: "#1C5D9F",
      medium: "#022B54",
    },
    neutral: {
      "extra-light": "#F7F7F7",
      transparent: "transparent",
      black: "#000014",
      white: "#FFFFFF",
      "extra-dark": "#505051",
    },
  },
  typography: {
    fontFamily: "Source Sans Pro",
    weight: {
      light: "300",
      regular: "400",
      "semi-bold": "600",
    },
  },
  motion: {
    velocity: {
      fast: "0.175s",
    },
  },
}

export default tokens
