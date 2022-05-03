import { useContext } from "react"
import pricingContext from "../context/Pricing/context"
import { PricingContextProps } from "../context/Pricing/types"

export const usePricingHome = (): PricingContextProps => {
  const context = useContext(pricingContext)
  return context
}
