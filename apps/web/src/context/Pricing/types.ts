import { ReactNode } from "react"
import { Home } from "../../services/graphql/homes"
import { HomePricing } from "../../services/graphql/homesPricing"

export type PricingHome = Pick<HomePricing, "numberOfNights" | "total">

export interface PricingContextProps {
  loading: boolean
  pricing: Map<string, PricingHome>
}

export interface PricingProvider {
  children: ReactNode
  homes?: Home[]
}
