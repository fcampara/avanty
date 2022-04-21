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
  spacing: {
    1: "0.125rem",
    2: "0.25rem",
    3: "0.5rem",
    4: "0.75rem",
    5: "1rem",
    6: "1.25rem",
    7: "1.5rem",
    8: "2rem",
    9: "2.5rem",
    10: "3rem",
    11: "3.5rem",
    12: "4rem",
    13: "5rem",
    14: "7.5rem",
    15: "10rem",
    16: "12.5rem",
  },
};

export default tokens;
