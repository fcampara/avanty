import { createContext } from "react"
import { PricingContextProps } from "./types"

const pricingContext = createContext<PricingContextProps>(
  {} as PricingContextProps,
)

export default pricingContext
