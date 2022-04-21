import { AvantyTheme } from "../types/theme";

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
      medium: "#53C3D0",
    },
    primary: {
      light: "#1C5D9F",
      "extra-light": "#E8EFF5",
      medium: "#022B54",
    },
    neutral: {
      transparent: "transparent",
      black: "#000014",
      white: "#FFFFFF",
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
};

export default tokens;
