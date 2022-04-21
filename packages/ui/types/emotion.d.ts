import "@emotion/react";
import { AvantyTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends AvantyTheme {}
  export function useTheme<T = AvantyTheme>(): T;
}
